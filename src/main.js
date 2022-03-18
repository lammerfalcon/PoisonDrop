import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/style.scss";
import "vue-select/dist/vue-select.css";
import VCalendar from "v-calendar";
import vSelect from "vue-select";
import Vuelidate from "vuelidate";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VCalendar);
Vue.use(Vuelidate);
Vue.use(VueAxios, axios);
Vue.component("v-select", vSelect);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
