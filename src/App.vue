<template>
  <div id="app">
    <portal-target name="semantic-ui-vue" />
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background-color: #fafafa;
}

.main {
  margin-top: 100px;
  margin-left: 200px;
  margin-right: 200px;
  text-align: center;
}
</style>
