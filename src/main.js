import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';

export const bus = new Vue()

import './assets/css/bootstrap-grid.min.css'
import './assets/css/lineicons.css'
import './assets/css/main.css'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.config.productionTip = false


const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, options);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
