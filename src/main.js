import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// import { obj } from "./assets/js/utils"
import "font-awesome/css/font-awesome.min.css"
import request from './request/index'

new Vue({
   router,
   store,
   mounted() {
      // window.onresize = () => {
      // obj.setRem()
      // }
   },
   render: h => h(App)
}).$mount('#app')
// request({
//    url: '/home/multidata'
// }).then(res => console.log(res)).catch(err => console.log(err))