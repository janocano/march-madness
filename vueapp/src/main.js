import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created() {
    //dispatch action to get all games
  }
}).$mount('#app')
