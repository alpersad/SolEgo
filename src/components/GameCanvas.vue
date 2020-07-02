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
    love: null,
    canvasId: "game"
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
      var currentItem = null;
      this.tool.onMouseDown = event => {
        var hitResult = this.scope.project.hitTest(event.point);
        if (!hitResult) {
          return;
        }
        currentItem = hitResult.item;
        currentItem.selected = true;
        if (currentItem.name === "player") {
          this.$emit("selected", "PLAYER");
        }
      };
      this.tool.onMouseDrag = event => {
        if (currentItem) {
          currentItem.position = event.point;
        }
      };
      this.tool.onMouseUp = () => {
        if (currentItem) {
          currentItem.selected = false;
          currentItem = null;
        }
      };
    },
    // mouseDown() {
    //   console.log("mouseover");
    //   // in order to access functions in nested tool
    //   let self = this;
    //   // create drawing tool
    //   this.tool = this.createTool(this.scope);
    //   this.tool.onMouseDown = event => {
    //     // init path
    //     self.path = self.pathCreate(self.scope);
    //     // add point to path
    //     self.path.add(event.point);
    //   };
    //   this.tool.onMouseDrag = event => {
    //     self.path.add(event);
    //   };
    //   this.tool.onMouseUp = event => {
    //     // line completed
    //     self.path.add(event.point);
    //   };
    // },
    drawLove(scope) {
      scope.activate();
      // Build path.
      var top = [20, 80];
      var bottom = [100, 80];
      var left = [60, 40];
      var right = [60, 120];
      this.love = new paper.Path({
        segments: [top, right, bottom, left],
        fillColor: paper.Color.random(),
        closed: true
      });
    }
  },
  mounted() {
    this.scope = new paper.PaperScope();
    this.scope.setup(this.canvasId);

    this.player = new paper.Path.RegularPolygon(new paper.Point(80, 70), 3, 25);
    this.player.fillColor = "#e9e9ff";
    this.player.name = "player";
    console.log(LEVEL.SMART);
    this.drawLove(this.scope);
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