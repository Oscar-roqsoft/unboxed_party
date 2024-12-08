<template>
    <div class="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-gray-100 tw-px-4">
        <div class="tw-text-center tw-bg-white tw-shadow-xl tw-rounded-lg tw-p-8 tw-max-w-md tw-w-full">
            <h1 class="tw-text-5xl tw-font-bold tw-text-red-500 tw-mb-4">500</h1>
            <h2 class="tw-text-2xl tw-font-semibold tw-text-gray-800 tw-mb-4">
                Internal Server Error
            </h2>
            <p class="tw-text-gray-600 tw-mb-6">
                Oops! Something went wrong. The page you requested could not be found please
                try refreshing the page or contact support if the issue persists.
            </p>

            <button @click="refreshPage"
                class="tw-bg-blue-500 tw-text-white tw-px-6 tw-py-3 tw-rounded-lg tw-hover:bg-blue-600 tw-transition tw-duration-300 tw-flex tw-items-center tw-justify-center tw-mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="tw-h-5 tw-w-5 tw-mr-2" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh Page
            </button>
        </div>
    </div>
</template>

<script setup>
const refreshPage = () => {
    // For client-side navigation
    const router = useRouter();

    // Reload the current route
    router.go( 0 );
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>