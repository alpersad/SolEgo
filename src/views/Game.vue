<template>
  <div class="main ui container">
    <sui-grid :columns="2">
      <sui-grid-row stretched>
        <sui-grid-column>
          <sui-segment>
            <GameCanvas v-on:selected="handleSelected" v-bind:level="level" />
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <GameUI v-bind:flavorID="flavorID" />
          </sui-segment>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
import GameCanvas from "../components/GameCanvas";
import GameUI from "../components/GameUI";

export const LEVEL = Object.freeze({
  START: 0,
  SMART: 1,
  EMOTIONS: 2,
  LOVE: 3,
  SADNESS: 4,
  END: 5
});

export default {
  name: "Game",
  components: {
    GameCanvas,
    GameUI
  },
  data() {
    return {
      flavorID: "",
      LEVEL,
      level: LEVEL.LOVE
    };
  },
  methods: {
    handleSelected(name) {
      this.flavorID = name;
    }
  }
};
</script>

<style scoped>
</style>