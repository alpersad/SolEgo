import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SuiVue from "semantic-ui-vue";
import PortalVue from "portal-vue";
import UUID from "vue-uuid";

Vue.config.productionTip = false;
Vue.use(SuiVue);
Vue.use(PortalVue);
Vue.use(UUID);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
