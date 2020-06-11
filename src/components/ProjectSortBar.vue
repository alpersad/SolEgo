<template>
    <div class="button-layout">
        <sui-button-group size="large">
            <sui-button v-on:click="$emit('sort-projects','all')" v-bind:key='all' :content="All" />
            <sui-button v-on:click="$emit('sort-projects',tech)" v-bind:key="tech" v-for="tech in techlist" :content="tech" />
        </sui-button-group>
    </div>
</template>

<script>
export default {
    name: 'ProjectSortBar',
    props: ["techlist"],
    data() {
        return {
            All: "All"
        }
    }
}
</script>

<style scoped>
    .button-layout{
        padding-bottom: 2%;
    }
</style>