import { useStore } from "~~/store";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStore();

  if (!store.state.isAuthenticated) {
    return navigateTo('/admin_slym'); // Redirect to login page
  }
});
