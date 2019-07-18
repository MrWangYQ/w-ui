import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // redirect: '/cascader',
      component: resolve => require(['../view/index'], resolve),
    },
    {
      path: '/cascader',
      name: 'cascader',
      component: resolve => require(['../view/cascader'], resolve),
    },
  ],
});
