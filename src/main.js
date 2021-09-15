import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import vSelect from "vue-select";
import VueCarousel from "vue-carousel";

import rootStore from "./state";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("v-select", vSelect);

Vue.use(VueCarousel);
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store(rootStore);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
