import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from "vue-router";
import App from './App.vue';

// Components
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import SignUpPage from "./components/SignUpPage.vue";

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignUpPage }
];
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
  created() {
    //dispatch action to get all games
  }
}).$mount('#app')
