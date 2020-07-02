<template>
  <div>
    <sui-tab>
      <sui-tab-pane title="Main UI">
        <h3>HTML</h3>
        <p>{{ sceneInfo }}</p>
        <sui-divider />
        <sui-button></sui-button>
        <sui-divider />
        <h3>{{flavorTitle}}</h3>
        <p>{{flavorText}}</p>
      </sui-tab-pane>
      <sui-tab-pane title="Instructions">
        <h3>CSS</h3>
        <p>
          Cascading Style Sheets (CSS) is a stylesheet language used to describe
          the presentation of a document written in HTML or XML (including XML
          dialects such as SVG or XHTML). CSS describes how elements should be
          rendered on screen, on paper, in speech, or on other media.
        </p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">developer.mozilla.org</a>
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>
export default {
  name: "GameUI",
  props: ["gameDecision", "flavorID"],
  data() {
    return {
      flavorTitle: "Title"
    };
  },
  computed: {
    sceneInfo: function() {
      return "THIS IS THE SCENE";
    },
    flavorText: function() {
      return this.flavorID;
    }
  }
};
</script>

<style scoped>
</style>