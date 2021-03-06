import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import router from './router'
import store from './store'
import config from './config.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMarkdownIt from "markdown-it-vue"
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueMarkdownIt);
Vue.config.productionTip = false
store.commit("onConfig", config);
const api = store.state.api;
api.connect(config.url);
/*
api.onOpen = () => {
   var res = localStorage.getItem("authdata");
   if(res)
   {
     var resdata = JSON.parse(res);
     console.log(resdata);
     api.sendRequest("restoreSession", { session: resdata.session }, (result) => {
      console.log(result);
      this.$store.commit('onAuth', resdata);
      this.$root.api.sendRequest('lkExtendedInfo', {}, (extInfo) => {
        console.log(extInfo);
        this.$store.commit('onExtInfo', extInfo);
      }, (error) => {
        console.log(JSON.stringify(error))
      });
      router.push("/user");
     }, (error) => {
       console.log(error);
       router.push("/login");
     });
   }
   else
   {
    router.push("/login");
   }
};
*/
api.debugmode = false; // enable debugmode

api.promises.auth = new Promise(function (resolve, reject) {
  api.promises.auth_resolve = resolve
  api.promises.auth_reject = reject
});
api.callbacks.onopen = () => {
  var sessionId = localStorage.getItem("sessionId");
  if (sessionId) {
    api.sendRequest("restoreSession", { session: sessionId, needUserInfo: true }, (result) => {
      store.commit('onUserInfo', result.userInfo);
      api.sendRequest('lkExtendedInfo', {}, (extInfo) => {
        store.commit('onExtInfo', extInfo);
        api.promises.auth_resolve();
      }, (error) => {
        api.promises.auth_reject(error);
      });
    }, (error) => {
      api.promises.auth_reject(error);
    });
  }
  else {
    api.promises.auth_reject(null);
  }
};
api.callbacks.unexpected_handler = function(event) {
  console.error(event);
}
new Vue({
  router,
  store,
  data: {
    api
  },
  render: h => h(App)
}).$mount('#app')
