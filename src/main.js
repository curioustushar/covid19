import Vue from "vue";
import VueGtag from "vue-gtag";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "./styles.scss";

Vue.config.productionTip = false;
Vue.use(
  VueGtag,
  {
    appName: "goCovid19",
    config: { id: process.env.VUE_APP_GTAG_ID },
    pageTrackerEnabled: true,
    pageTrackerScreenviewEnabled: true
  },
  router
);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
