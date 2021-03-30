import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import routes from "./routes/routes";
import ToggleButton from "vue-js-toggle-button";

Vue.config.productionTip = false;

/* Tell Vue to register our routes */
Vue.use(Router);
/* Tell Vue to register our toggle component */
Vue.use(ToggleButton);

const router = new Router({ routes });

/* Mound the Vue instance in index.html */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
