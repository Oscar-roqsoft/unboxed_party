<template>
    <div class="md:tw-max-w-[1100px] tw-mx-auto tw-p-4 md:tw-pt-10 tw-w-full">
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
</template>