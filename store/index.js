
import { defineStore } from 'pinia';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

// Create a Pinia instance and use the persisted state plugin
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

export const useStore = defineStore(
  'unboxAdminApp',
  () => {
    const state = reactive({
      user: null,
      isAuthenticated: false,
      password: null,
      token: null,
    });

    const setUser = (payload) => {
      state.token = payload;
      state.isAuthenticated = true;
    };

    const clearUser = () => {
      state.token = null;
      state.isAuthenticated = false;
      navigateTo('/');
    };

    return {
      state,
      clearUser,
      setUser,
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
// }
export { pinia };