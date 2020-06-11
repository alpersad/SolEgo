<template>
    <div class="main">
        <h1> Projects </h1>
        <ProjectSortBar v-bind:techlist="techlist" v-on:sort-projects="sortProjects"/>
        <ProjectGroup v-bind:projects="projects"/>
    </div>
</template>

<script>
import ProjectGroup from '../components/ProjectGroup'
import ProjectSortBar from '../components/ProjectSortBar'

export default {
    name: 'Projects',    
    components: {
        ProjectGroup,
        ProjectSortBar
    },
    data() {
        return {
            allprojects: [
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
                },
                {
                    id: 5,
                    title: 'fiddlebox',
                    description: 'fiddlebox',
                    tech: ['java']
                }
            ],
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
            ],
            techlist: []
        }
    },
    methods: {
        sortProjects (tech) {
            if (tech === "all") {
                this.projects = this.allprojects;
                return;
            }
            this.projects = this.allprojects.filter( proj => proj.tech.includes(tech) );
        }
    },
    created () {
        this.allprojects.forEach( arrayItem => {
            console.log(arrayItem.tech);
            this.techlist = this.techlist.concat(arrayItem.tech);
        })
        console.log(this.techlist);
        this.techlist = [...new Set(this.techlist)];
        console.log(this.techlist);
    }
}
</script>

<style scoped>

</style>