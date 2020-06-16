<template>
  <div class="main ui container">
    <ProjectSortBar
      v-bind:techlist="techlist"
      v-on:sort-projects="sortProjects"
    />
    <ProjectGroup v-bind:projects="projects" />
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import ProjectList from "../data/ProjectList.json";
import ProjectGroup from "../components/ProjectGroup";
import ProjectSortBar from "../components/ProjectSortBar";

export default {
  name: "Projects",
  components: {
    ProjectGroup,
    ProjectSortBar,
  },
  data() {
    return {
      allprojects: [],
      projects: [],
      techlist: [],
    };
  },
  methods: {
    sortProjects(tech) {
      if (tech === "all") {
        this.projects = this.allprojects;
        return;
      }
      this.projects = this.allprojects.filter((proj) =>
        proj.tech.includes(tech)
      );
    },
  },
  created() {
    this.allprojects = ProjectList;
    this.allprojects.id = uuid.v1();
    this.projects = this.allprojects;
    this.allprojects.forEach((arrayItem) => {
      console.log(arrayItem.tech);
      this.techlist = this.techlist.concat(arrayItem.tech);
    });
    console.log(this.techlist);
    this.techlist = [...new Set(this.techlist)];
    console.log(this.techlist);
  },
};
</script>

<style scoped></style>
