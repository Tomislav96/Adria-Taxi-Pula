import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from "vue2-google-maps"
import { CarouselPlugin } from 'bootstrap-vue'

Vue.use(CarouselPlugin)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps,{
  load: {
    key: "AIzaSyCwZlc5i5cEJ00sCQ2Vhu-aVhBGVzVRIaQ",
    libraries: "places"
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
