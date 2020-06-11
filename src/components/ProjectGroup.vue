<template>
    <div>
        <sui-card-group :items-per-row="3" >
                <sui-card v-bind:key="projectitem.id" v-for="projectitem in projects" v-bind:projectitem="projectitem" class="red raised">
                    <sui-card-content>
                        <sui-card-header>{{projectitem.title}}</sui-card-header>
                        <sui-card-meta>{{projectitem.tech}}</sui-card-meta>
                        <sui-card-description>
                            {{projectitem.description}}
                        </sui-card-description>
                    </sui-card-content>
                    <sui-card-content extra>
                        <sui-container text-align="center">
                            <sui-button-group>
                                <sui-button circular icon="github square" size="medium">
                                </sui-button>
                            </sui-button-group>
                        </sui-container>
                    </sui-card-content>
                </sui-card>
        </sui-card-group>
    </div>
</template>

<script>

export default {
    name: 'ProjectGroup',
    props: ["projects"]
}
</script>

<style scoped>
</style>