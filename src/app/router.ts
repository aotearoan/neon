import type { RouteLocationNormalized } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { Menu } from './Menu';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ './views/home/Home.vue'),
  },
  ...Menu.menu().flatMap((group) =>
    group.children.flatMap((item) =>
      item.children
        ? item.children
            .filter((child) => child.page)
            .map((child) => ({
              path: `/${item.path}/${child.path}`,
              name: `${item.path}-${child.name || child.page}`,
              meta: { title: child.name || child.page },
              component: () => import(`./views/${item.path}/${child.path}/${child.page}.vue`),
            }))
        : [],
    ),
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
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    meta: { title: '404' },
    component: () => import(/* webpackChunkName: "source" */ './views/error/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollBehavior: (to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition: any | null) =>
    to.path !== from.path ? savedPosition || { left: 0, top: 0, behavior: 'smooth' } : undefined,
});

router.afterEach((to: RouteLocationNormalized) => {
  setTimeout(() => {
    document.title = `Neon: ${
      to.params.enum || to.params.model || to.params.util || to.meta.title || 'A VueJS Component Library'
    }`;
  });
});

export default router;
