<template>
  <div class="main">
    <canvas :id="canvasId" class="canvas-style" v-on:mousedown="mouseDown" />
  </div>
</template>

<script>
// TODO: move all of this logic to master
// packages
const paper = require("paper");
export default {
  name: "Canvas",
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
    mouseDown() {
      // in order to access functions in nested tool
      let self = this;
      // create drawing tool
      this.tool = this.createTool(this.scope);
      this.tool.onMouseDown = event => {
        // init path
        self.path = self.pathCreate(self.scope);
        // add point to path
        self.path.add(event.point);
      };
      this.tool.onMouseDrag = event => {
        self.path.add(event);
      };
      this.tool.onMouseUp = event => {
        // line completed
        self.path.add(event.point);
      };
    }
  },
  mounted() {
    this.scope = new paper.PaperScope();
    this.scope.setup(this.canvasId);
    var player = new paper.Path.Circle(new paper.Point(10, 10), 5);
    player.fillColor = new paper.Color(1, 0, 0);
    // this.scope.view.onFrame = event => {};
  }
};
</script>

<style scoped>
.canvas-style {
  cursor: crosshair;
  width: 500px !important;
  height: 300px !important;
  border: 5px solid black;
  border-radius: 10px;
  display: block;
  margin: auto;
  box-shadow: 0 10px 8px -8px black;
}
</style>
