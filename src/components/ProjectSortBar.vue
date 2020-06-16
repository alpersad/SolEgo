<template>
  <div class="button-layout">
    <sui-divider horizontal>Filter</sui-divider>
    <sui-button-group size="large">
      <sui-button
        class="button-text"
        v-on:click="$emit('sort-projects', all)"
        v-bind:key="all"
        :content="all"
      />
      <sui-button
        class="button-text"
        v-on:click="$emit('sort-projects', tech)"
        v-bind:key="tech"
        v-for="tech in techlist"
        :content="tech"
      />
    </sui-button-group>
  </div>
</template>

<script>
export default {
  name: "ProjectSortBar",
  props: ["techlist"],
  data() {
    return {
      all: "all"
    };
  }
};
</script>

<style scoped>
.button-layout {
  padding-bottom: 2%;
}
.button-text {
  text-transform: capitalize;
}
</style>
