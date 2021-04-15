import Vue from "vue";
import Vuex from "vuex";
import main from "./modules/main";

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  modules: {
    main
  }
});

export default store;
