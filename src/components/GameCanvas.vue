<template>
  <div>
    <canvas :id="canvasId" class="canvas-style" v-on:mouseover="mouseOver" resize />
  </div>
</template>

<script>
// TODO: move all of this logic to master
// packages
const paper = require("paper");
export default {
  name: "GameCanvas",
  data: () => ({
    path: null,
    scope: null,
    canvasId: "game"
  }),
  methods: {
    reset() {
      this.scope.project.activeLayer.removeChildren();
    },
    pathCreate(scope) {
      scope.activate();
      return new paper.Path({
        strokeColor: "#000000",
        strokeJoin: "round",
        strokeWidth: 1.5
      });
    },
    createTool(scope) {
      scope.activate();
      return new paper.Tool();
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
    mouseOver() {
      this.tool = this.createTool(this.scope);
      this.tool.onMouseMove = event => {
        this.$emit("coords", [event.point.x, event.point.y]);
        // console.log(event.point.x + " " + event.point.y);
      };
    }
  },
  mounted() {
    this.scope = new paper.PaperScope();
    this.scope.setup(this.canvasId);
    var player = new paper.Path.Circle(new paper.Point(10, 10), 5);
    player.fillColor = new paper.Color(1, 0, 0);
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