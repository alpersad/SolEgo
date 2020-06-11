<template>
  <div id="app">
    <NavBar/>
  </div>
</template>

<script>
import NavBar from './components/layout/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

.main {
    margin-top: 100px;
    margin-left: 200px;
    margin-right: 200px;
    text-align: center;
}

</style>
