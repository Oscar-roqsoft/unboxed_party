import Vue3Paystack from "vue3-paystack";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Vue3Paystack", Vue3Paystack);
});
