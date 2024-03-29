import { createMemoryHistory, createRouter } from 'vue-router';
import { defineComponent } from 'vue';

const internalRouter = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: defineComponent({ name: 'Home' }),
    },
    {
      path: '/test',
      name: 'Test',
      component: defineComponent({ name: 'Test' }),
    },
  ]
});

export const router = internalRouter;
