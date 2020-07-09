<template>
  <div>
    <canvas :id="canvasId" class="canvas-style" v-on:mouseover="mouseDown" resize />
  </div>
</template>

<script>
// TODO: move all of this logic to master
// packages
const paper = require("paper");
import { LEVEL } from "../views/Game";

export default {
  name: "GameCanvas",
  props: ["level"],
  data: () => ({
    path: null,
    scope: null,
    player: null,
    currentItem: null,
    canvasId: "game",
    levelParameters: {
      start: {},
      smart: {},
      emotions: {},
      love: {
        interest: null,
        seen: false
      },
      sadness: {},
      end: {}
    }
  }),
  methods: {
    reset() {
      this.scope.project.activeLayer.removeChildren();
    },
    createTool(scope) {
      scope.activate();
      return new paper.Tool();
    },
    mouseDown() {
      this.tool = this.createTool(this.scope);
      this.tool.onMouseDown = event => {
        var hitResult = this.scope.project.hitTest(event.point); // Test for item hit
        if (this.currentItem) {
          this.currentItem.selected = false; // De-select current selected item if user clicks empty space
        }
        if (!hitResult) {
          return;
        }
        this.currentItem = hitResult.item;
        this.currentItem.selected = true; // Selects item hit
        if (this.currentItem.name === "player") {
          this.$emit("selected", "PLAYER");
        }
        switch (this.currentItem.name) {
          case "player":
            this.$emit("selected", "PLAYER");
            break;
          default:
            console.log("Error on select emit");
        }
      };
      this.tool.onMouseDrag = event => {
        if (this.currentItem.name === "player") {
          // Allows only Player item to be dragged

          this.currentItem.position = event.point;

          // var dragDirection = event.point.subtract(this.currentItem.position);
          // this.currentItem.position = this.currentItem.position.add(
          //   dragDirection.normalize()
          // );
          // console.log(dragDirection, this.currentItem.position);
        }
      };
      this.tool.onMouseUp = () => {
        return;
      };
    },
    drawLove(scope) {
      // Create LoveInterest item
      scope.activate();
      // Build path.
      var top = [20, 80];
      var bottom = [100, 80];
      var left = [60, 40];
      var right = [60, 120];
      this.levelParameters.love.interest = new paper.Path({
        segments: [top, right, bottom, left],
        fillColor: paper.Color.random(),
        closed: true,
        name: "loveInterest"
      });

      return this.levelParameters.love.interest;
    },
    createLevelStart(scope) {
      return scope;
    },
    createLevelSmart(scope) {
      return scope;
    },
    createLevelEmotions(scope) {
      return scope;
    },
    createLevelLove(scope) {
      var loveInterest = this.drawLove(scope); // Draw item on canvas
      scope.view.onFrame = () => {
        // Check if loveInterest item is "seen"
        if (loveInterest.position.isClose(this.player.position, 100)) {
          this.levelParameters.love.seen = true;
        }
        if (this.levelParameters.love.seen) {
          // Calculate direction from LoveInterest item to Player item
          var runAwayDirection = this.player.position.subtract(
            loveInterest.position
          );

          // Get normal vector of direction from LoveInterest item to Player item
          // Rotate vector 180 degrees
          runAwayDirection = runAwayDirection.normalize().rotate(180);

          // Move LoveInterest in the opposite direction of Player
          loveInterest.position = loveInterest.position.add(
            runAwayDirection.multiply(loveInterest.bounds.width / 50)
          );
        } else {
          // Move item across canvas
          loveInterest.position.x += loveInterest.bounds.width / 50;
        }
        // Handle item leaving the canvas
        if (
          loveInterest.bounds.left > scope.view.size.width ||
          loveInterest.bounds.right < 0 ||
          loveInterest.bounds.top > scope.view.size.height ||
          loveInterest.bounds.bottom < 0
        ) {
          loveInterest.fillColor = paper.Color.random();
          this.levelParameters.love.seen = false; // resets if LoveInterest item has "seen" Player item
          loveInterest.position.x = -loveInterest.bounds.width / 2 + 1; // Reset item to left side of screen
          loveInterest.position.y =
            scope.Point.random().y * scope.view.size.height; // Randomly choose item's animation height on canvas

          // Handle cases where item draws off screen
          if (
            loveInterest.position.y >
            scope.view.size.height - loveInterest.bounds.height
          ) {
            loveInterest.position.y =
              scope.view.size.height - loveInterest.bounds.height;
          }
          if (loveInterest.position.y < loveInterest.bounds.height) {
            loveInterest.position.y = loveInterest.bounds.height;
          }
        }
      };
    },
    createLevelSadness(scope) {
      return scope;
    },
    createLevelEnd(scope) {
      return scope;
    },
    createPlayer(scope) {
      scope.activate();
      //define player model
      this.player = new paper.Path.RegularPolygon(
        new paper.Point(80, 70),
        3,
        25
      );
      this.player.fillColor = "#000000";
      this.player.name = "player";
      this.player.position = this.scope.view.center;
    }
  },
  mounted() {
    // Initialize and mount canvas
    this.scope = new paper.PaperScope();
    this.scope.setup(this.canvasId);

    // Create and draw player on canvas
    this.createPlayer(this.scope);

    // Generate level
    switch (this.level) {
      case LEVEL.START:
        this.createLevelStart(this.scope);
        console.log("start");
        break;
      case LEVEL.SMART:
        this.createLevelSmart(this.scope);
        console.log("smart");
        break;
      case LEVEL.EMOTIONS:
        this.createLevelEmotions(this.scope);
        console.log("emotions");
        break;
      case LEVEL.LOVE:
        this.createLevelLove(this.scope);
        console.log("love");
        break;
      case LEVEL.SADNESS:
        this.createLevelSadness(this.scope);
        console.log("sadness");
        break;
      case LEVEL.END:
        this.createLevelEnd(this.scope);
        console.log("end");
        break;
      default:
        console.log("ERROR");
    }

    // this.scope.view.onFrame = () => {
    //   this.player.rotate(2);
    // };
    // this.scope.view.viewSize.set(400, 600);
    // this.scope.view.onFrame = event => {};
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

/* Scale canvas with resize attribute to full size */
canvas[resize] {
  width: 100%;
  height: 100%;
}
.canvas-style {
  cursor: crosshair;
  border: 5px solid black;
  height: 500px !important;
  width: 400px !important;
  border-radius: 10px;
  display: block;
  margin: auto;
  box-shadow: 0 10px 8px -8px black;
}
</style>