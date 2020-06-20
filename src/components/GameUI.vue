<template>
  <div>
    <sui-tab>
      <sui-tab-pane title="Main UI">
        <h3>HTML</h3>
        <p>
          HTML (HyperText Markup Language) is the most basic building block of
          the Web. It describes and defines the content of a webpage along with
          the basic layout of the webpage. Other technologies besides HTML are
          generally used to describe a web page's appearance/presentation (CSS)
          or functionality/ behavior (JavaScript).
        </p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">developer.mozilla.org</a>
        <sui-divider />
        <sui-button :content="gameDecision"></sui-button>
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
  props: ["gameDecision"]
};
</script>

<style scoped>
</style>