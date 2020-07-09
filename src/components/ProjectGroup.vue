<template>
  <div>
    <sui-divider horizontal>Projects</sui-divider>
    <sui-card-group :items-per-row="3">
      <sui-card
        v-bind:key="projectitem.id"
        v-for="projectitem in projects"
        v-bind:projectitem="projectitem"
        class="raised"
      >
        <sui-card-content>
          <sui-card-header>{{ projectitem.title }}</sui-card-header>
          <sui-card-meta class="techstack">
            {{
            projectitem.tech.map((x) => " " + x).toString()
            }}
          </sui-card-meta>
        </sui-card-content>

        <sui-card-content>
          <sui-card-description class="card-desc">
            {{
            projectitem.description
            }}
          </sui-card-description>
        </sui-card-content>

        <sui-button-group>
          <sui-button v-on:click="link(projectitem.github)" attached="bottom" size="small">
            <sui-icon name="github" size="big" link />
          </sui-button>
          <sui-popup wide basic position="top center" content="Video coming soon">
            <sui-button attached="bottom" size="small" slot="trigger">
              <sui-icon name="youtube" size="big" link />
            </sui-button>
          </sui-popup>
          <sui-popup
            wide
            basic
            position="top center"
            content="Email arunlevipersad@gmail.com for download"
          >
            <sui-button attached="bottom" size="small" slot="trigger">
              <sui-icon name="download" size="big" link />
            </sui-button>
          </sui-popup>
        </sui-button-group>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: "ProjectGroup",
  props: ["projects"],
  methods: {
    link: function(link) {
      window.open(link);
    }
  }
};
</script>

<style scoped>
.techstack {
  text-transform: capitalize;
}
.card-desc {
  text-align: left;
}
</style>
