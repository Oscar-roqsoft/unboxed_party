<template>

    <v-container>

        <v-card style="max-width: 800px; margin: 0 auto;" class="bg-white  rounded-md shadow-md">

          <v-card-title class="tw-underline tw-text-2xl tw-text-gray-900  font-bold mb-4">Order Details</v-card-title>

            <v-card-text style="font-size: 18px !important;">
                <div class="text-lg tw-text-gray-800 font-medium mb-2">Order ID: {{ order.id }}</div>
                <div class="text-lg tw-text-gray-800 mb-2">Customer Name: {{ order_name }}</div>
                <div class="text-lg tw-text-gray-800 mb-2">Customer Phone: {{ phone }}</div>
                <div class="text-lg tw-text-gray-800 mb-2">Payment Status: 
                    <span class="tw-text-blue-600" v-if="order.status === 'fulfilled'">Paid</span>
                    <span class="tw-text-red-600" v-else>Pending</span>
                </div>
                
                <span class="tw-text-lg tw-text-gray-800 tw-font-bold ">Items:</span>
                <div class="tw-flex tw-flex-wrap  tw-gap-2">
                   
                    <div v-for="item in item_list" >

                        <div class=" mb-2 tw-text-gray-800"> 
                            <div class=" tw-my-2"   >
                                <img class="tw-w-28 tw-rounded-lg tw-bg-slate-400 tw-shadow-md tw-h-28"  :src="item.image" alt="">
                            </div>
                            <div class="tw-flex tw-flex-col">
                                <span class="mr-3">Color: {{ item.color }}</span>
                                <span>Size: <span class="tw-uppercase tw-text-gray-700">{{ item.size }}</span></span>
                            </div>
                        </div>
                    </div>
                   
                    
                </div>

                <v-btn class="mt-4">Update</v-btn>


            </v-card-text>
          
        </v-card>


    </v-container>

</template>


<script>

export default{
    data(){
        return{

            order:'',
            order_name:'',
            phone:"",
            item_list:[],

        }
    },

    computed:{

        orders(){
        return this.$store.state.orders.list
        },
    },

    mounted(){

        var name = decodeURIComponent(this.$route.params.id)
    
        this.order = this.orders.find(el=>  el.id == name )

        this.order_name = this.order.user.name
        this.phone = this.order.user.phone
        this.item_list = JSON.parse(this.order.cart_items)

        console.log(this.item_list)
    }

}

</script>
  