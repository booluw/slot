import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Axios } from 'axios'
import wb from "./registerServiceWorker"

Vue.prototype.$workbox = wb
Vue.prototype.$https = Axios

import VueSweetalert2 from 'vue-sweetalert2'
import moment from 'moment'
// import Cloudinary, { CldImage, CldVideo, CldTransformation, CldContext } from "cloudinary-vue";

export const bus = new Vue()

import './assets/css/bootstrap-grid.min.css'
import './assets/css/lineicons.css'
import './assets/css/main.css'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.config.productionTip = false
Vue.prototype.moment = moment

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, options);
/*Vue.use(Cloudinary, {
  configuration: { cloudName: "booluw"},//, upload_preset: 'ml_default' },
  components: {
    CldContext,
    CldImage, 
    CldVideo, 
    CldTransformation,
  }
});*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
