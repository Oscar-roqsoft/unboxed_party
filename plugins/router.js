import { useStore } from "~~/store";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.beforeEach((to, from, next) => {
    const store = useStore();

    if (to.path.startsWith('/admin_slym/') && !store.state.isAuthenticated) {
      return next('/admin_slym');
    }

    next();
  });
});
