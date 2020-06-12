<template>
    <!-- TODO -->
    <!-- DESIGN CARD LAYOUT -->
    <div>
        <sui-card-group :items-per-row="3" >
                <sui-card v-bind:key="projectitem.id" v-for="projectitem in projects" v-bind:projectitem="projectitem" class=" ">
                    <sui-card-content>
                        <sui-card-header>{{projectitem.title}}</sui-card-header>

                        <!-- Generates a string where each technology used has its first letter capitalized and a space is added between multiple technologies -->
                        <sui-card-meta>{{projectitem.tech.map( x => " " + x.charAt(0).toUpperCase() + x.slice(1)).toString()}}</sui-card-meta>

                        <sui-card-description>
                            {{projectitem.description}}
                        </sui-card-description>
                    </sui-card-content>
                    <sui-button attached="bottom" size="small">
                        <sui-icon  name="github" size="big" link/>
                    </sui-button>
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