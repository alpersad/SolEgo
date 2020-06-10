<template>
    <div class="main">
        <h1> Projects </h1>
        <ProjectGroup v-bind:projects="projects"/>
    </div>
</template>

<script>
import ProjectGroup from '../components/ProjectGroup'

export default {
    name: 'Projects',    
    components: {
        ProjectGroup
    },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'LolTomes',
                    description: 'A minecraft mod',
                    tech: ['java']
                },
                {
                    id: 2,
                    title: 'SolEgo',
                    description: 'A website in vue',
                    tech: ['vue.js','javascript/css/html']
                },
                {
                    id: 3,
                    title: 'filler',
                    description: 'arclove',
                    tech: ['c++']
                },
                {
                    id: 4,
                    title: 'arclove',
                    description: 'arclove',
                    tech: ['golang']
                }
            ]
        }
        
    }
}
</script>

<style scoped>

</style>