import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from "vue-router";
import App from './App.vue';
import  store  from "./store/store.js";

// Components
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import SignUpPage from "./components/SignUpPage.vue";
import DashboardPage from "./components/DashboardPage.vue";
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false


function authGuard(to, from, next) {
  console.log(store.user)
  if(store.getters.user){
    next()
  }else{
    next('/')
  }
}

function loggedInUserRedirect(to, from, next) {
  //console.log(store.getters.user)
  if(to.path === '/' && store.getters.user){
    next('/dashboard')
  }else{
    next()
  }
}

const routes = [
  { path: '/', component: HomePage, beforeEnter: loggedInUserRedirect},
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignUpPage },
  { path: '/dashboard', component: DashboardPage, beforeEnter: authGuard }
];
const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    //dispatch action to get all games
  }
}).$mount('#app')
