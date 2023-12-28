<template>

    <v-container>

        <v-card style="max-width: 800px; margin: 0 auto;" class="bg-white  rounded-md shadow-md">

          <v-card-title class="tw-underline tw-text-2xl tw-text-gray-900  font-bold mb-4">Order Details</v-card-title>

            <v-card-text style="font-size: 18px !important;">
                <div class="text-lg tw-text-gray-800 font-medium mb-2">Order ID: {{ order.id }}</div>
                <div class="text-lg tw-text-gray-800 mb-2">Customer Name: {{ order_name }}</div>
                <div class="text-lg tw-text-gray-800 mb-2">Customer Phone: {{ phone }}</div>
                <div class="text-lg tw-text-gray-800 mb-2">Total Amount: N{{ addCommas(amount)}}</div>
                <div class="text-lg tw-text-gray-800 mb-2 tw-capitalize">Payment Status: 
                    <span class="tw-text-red-600" v-if="order.status === 'pending_payment'">{{ order.status }}</span>
                    <span class="tw-text-blue-600" v-else>{{ order.status }}</span>
                </div>
                
                <span class="tw-text-lg tw-text-gray-800 tw-font-bold ">Items:</span>
                <div class="tw-flex tw-flex-wrap  tw-gap-2 tw-mb-6">
                   
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

                <span class=" tw-text-xl tw-font-semibold tw-mt-6">Update Order Status</span>
                <v-select
                    label="Select"
                    v-model="selected"
                    :items="['pending_payment', 'fulfilled', 'delivered', 'canceled']"
                ></v-select>

                <span v-if="message.length" class="tw-text-red-500">{{ message }}</span>

                <v-btn color="blue-darken-4" :loading="isLoading" @click="updateOrder()" class="mt-4">Update</v-btn><br>



            </v-card-text>
          
        </v-card>


    </v-container>

</template>


<script>
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

export default{
    setup () {
    const toast = (message) => {
        createToast(message)
    }
    return { toast }
  },

    data(){
        return{

            order:'',
            order_name:'',
            phone:"",
            item_list:[],
            isLoading:false,

            status:[

                {id:1,name:'pending_payment'},
                {id:2,name:'fulfilled'},
                {id:3,name:'delivered'},
                {id:4,name:'canceled'}
            ],
            selected:'',
            message:'',
            amount:''

        }
    },

    computed:{

        orders(){
        return this.$store.state.orders.list
        },
    },

    mounted(){

       
     this.selected = this.order.status
        var name = decodeURIComponent(this.$route.params.id)
    
        this.order = this.orders.find(el=>  el.id == name )

        this.order_name = this.order.user.name
        this.phone = this.order.user.phone
        this.item_list = JSON.parse(this.order.cart_items)
        this.amount = this.order.total_amount 

    },

    methods:{
        addCommas(num) {
      // ... your method logic
       // Convert the number to a string
       let str = num.toString();
        // Split the string into an array of characters
        let arr = str.split('');
        // Reverse the array so we can add commas from right to left
        arr.reverse();
        // Loop through the array and add commas every three digits
        for (let i = 3; i < arr.length; i += 4) {
          arr.splice(i, 0, ',');
        }
        // Reverse the array again and join it back into a string
        str = arr.reverse().join('');
        // Return the formatted string
        return str;
    },
        async updateOrder(){

            if(!this.selected) return this.message = 'select order status'
            // this.isLoading = true
            const orderInfo = {
                id: this.order.id,
                status: this.selected
            }
            try{
                const data = await fetch(`https://backend.unboxedparty.com/api/order`,{
                    method:"PATCH",
                    headers:{
                        'Content-Type': 'application/json',

                    },
                    body:JSON.stringify(orderInfo)
                }).then(resp=>resp.json())

                 
                this.isLoading = false
                console.log(data)

                // const filteredItems = [this.$store.state.orders.list,..data]
                // console.log(filteredItems)
                //  this.$store.dispatch("setMyOrders", filteredItems)
                this.$store.dispatch("setMyOrders", this.$store.state.orders.list);
                this.$store.dispatch("setMyOrdersExpirationDate", addMinutes(30));
    

                if(data.success) this.toast('Order Updated successfully')
                 
                this.$router.push('/admin_slym/orders')

            }catch(e){
                this.toast(e)
            }
        }
    }

}

</script>
  