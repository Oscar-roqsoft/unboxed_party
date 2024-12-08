<template>
    <div class="md:tw-max-w-[1100px] tw-mx-auto tw-p-4 md:tw-pt-10 tw-w-full">
        <button @click="logout" class=" shover:tw-shadow-lg tw-rounded tw-text-xl tw-bg-[#F5200A] tw-mb-[50px]
            tw-p-4">Log
            out</button>
        <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4">
            <button @click.prevent="navigateTo(`/admin_slym/user`)"
                class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">user
            </button>
            <button @click.prevent="navigateTo('/admin_slym/events')"
                class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">events
            </button>
            <button @click.prevent="navigateTo('/admin_slym/items')"
                class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">merch</button>
            <button @click.prevent="navigateTo('/admin_slym/category')"
                class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">categories</button>
            <button @click.prevent="navigateTo('/admin_slym/articles')"
                class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">articles</button>
            <button @click.prevent="navigateTo('/admin_slym/orders')" class="tw-h-[150px] md:tw-h-[200px]  
          hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">Orders</button>
            <button @click.prevent="navigateTo('/admin_slym/questionaire')" class="tw-h-[150px] md:tw-h-[200px]  
          hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">Questionnaire</button>
            <button @click.prevent="navigateTo('/admin_slym/settings')"
                class="tw-h-[150px] md:tw-h-[200px]  hover:tw-shadow-lg tw-rounded tw-text-2xl tw-bg-gray-950">general
                settings</button>
        </div>
    </div>
    <!-- <div v-else>
        <button @click="logout" class=" shover:tw-shadow-lg tw-rounded tw-text-xl tw-bg-[#F5200A] tw-mb-[50px]
            tw-p-4">Log in</button>
    </div> -->
</template>

<script>
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import { useStore } from '~~/store'; // Adjust the path as needed
import { useRouter } from 'vue-router';
// const store = useStore(); // Access the store inside setup
export default {
    setup() {
        middleware: ['auth']; // Apply the auth middleware to this route
        const store = useStore(); // Access the store inside setup
        const router = useRouter();
        const toast = ( message ) => {
            createToast( message );
        };
        onMounted( () => {
            if ( !store.state.isAuthenticated ) {
                router.replace( '/admin_slym' ); // Redirect to login if not authenticated
            }
        } );
        const logout = () => {
            store.clearUser(); // Clear user data from the store
            toast( 'Logged out successfully' );
            localStorage.clear(); // Clear storage if the token is missing
            window.location.href = '/admin_slym'; // Redirect to login and reload the page
        };

        return {
            toast,
            logout,
        };
    },
};
</script>
