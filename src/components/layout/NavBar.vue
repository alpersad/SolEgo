<template>
  <div id="nav">
    <div>
      <router-link to="/projects">
        <img src="../../assets/kaguya.png" alt="Profile Picture" class="propic" />
      </router-link>
    </div>
    <div class="nav-align">
      <button
        :class="[currentPage.endsWith('/') ? activeClass : '', 'nav-item']"
        @click="$router.push('/')"
      >Home</button>
      <button
        :class="[currentPage.endsWith('game') ? activeClass : '', 'nav-item']"
        @click="$router.push('/game')"
      >Games</button>
      <button
        :class="[
          currentPage.endsWith('projects') ? activeClass : '',
          'nav-item',
        ]"
        @click="$router.push('/projects')"
      >Projects</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activeClass: "active"
    };
  },
  computed: {
    currentPage() {
      console.log(this.$route.path);
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
#nav {
  height: 75px;
  width: auto;
  background-color: #261421;
  border-bottom-style: solid;
  border-color: #d93662;
  text-align: left;
}
.nav-align {
  margin-left: 250px;
}
.nav-item {
  cursor: pointer;
  background-color: inherit;
  border: none;
  color: white;
  font-size: 20px;
  padding-right: 15px;
  padding-left: 15px;
  height: 72px;
}
.nav-align button:hover {
  background-color: #585055;
}
.nav-align button:active {
  background-color: #3b383a;
}
.active {
  background-color: #3b383a;
}
.propic {
  height: 150px;
  width: 150px;
  float: left;
  margin-top: 20px;
  margin-left: 50px;
}
</style>
