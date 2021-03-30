import Vue from "vue";
import App from "./App.vue";
import routes from "./routes/routes";
import Router from "vue-router";
import ToggleButton from "vue-js-toggle-button";

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(ToggleButton);

const router = new Router({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
