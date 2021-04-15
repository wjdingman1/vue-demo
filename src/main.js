import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import routes from "./routes/routes";
import store from "./state/store";
import ToggleButton from "vue-js-toggle-button";

Vue.config.productionTip = false;

/* Tell Vue to use vue-router */
Vue.use(Router);
/* Tell Vue to register our toggle component */
Vue.use(ToggleButton);

/* Create the router instance with our defined routes */
const router = new Router({ routes });

/* Mound the Vue instance in index.html */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
