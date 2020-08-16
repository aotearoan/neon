import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { Menu } from './Menu';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: { simpleLayout: true },
    component: () => import(/* webpackChunkName: "home" */ './views/home/Home.vue'),
  },
  ...Menu.menu.flatMap((item) =>
    item.children
      ? item.children
          .filter((child) => child.page)
          .map(
            (child) =>
              ({
                path: `/${item.path}/${child.path}`,
                name: child.name || child.page,
                component: () => import(`./views/${item.path}/${child.path}/${child.page}.vue`),
              } as RouteConfig),
          )
      : [],
  ),
  {
    path: '/enums/:enum',
    name: 'Enums',
    component: () => import(/* webpackChunkName: "source" */ './views/source/Source.vue'),
  },
  {
    path: '/models/:model',
    name: 'Models',
    component: () => import(/* webpackChunkName: "source" */ './views/source/Source.vue'),
  },
  {
    path: '/utils/:util',
    name: 'Utils',
    component: () => import(/* webpackChunkName: "source" */ './views/source/Source.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes,
});

export default router;
