<template>
  <div class="main ui container">
    <sui-grid :columns="2">
      <sui-grid-row stretched>
        <sui-grid-column>
          <sui-segment>
            <GameCanvas v-on:coords="handleCoords" />
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <GameUI v-bind:gameDecision="buttonMessage" />
          </sui-segment>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
import GameCanvas from "../components/GameCanvas";
import GameUI from "../components/GameUI";

export default {
  name: "Game",
  components: {
    GameCanvas,
    GameUI
  },
  data() {
    return {
      buttonMessage: "Click to advance"
    };
  },
  methods: {
    handleCoords(coords) {
      this.buttonMessage = coords[0] + " " + coords[1];
    }
  }
};
</script>

<style scoped>
</style>