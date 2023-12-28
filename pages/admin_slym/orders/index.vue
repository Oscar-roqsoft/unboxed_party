
<template>

    <div style="max-width: 1100px !important;margin: 0 auto !important;padding:10px 4px !important;">

        <div class="tw-max-w-full  tw-mt-4" style="overflow-y:hidden;">
    
            <table style="overflow-x: scroll !important;" class=" tw-shadow-lg tw-rounded-lg tw-w-full">

                <thead class="tw-bg-gray-950 tw-border-b tw-border-gray-800">
                    <tr>
                    <th style="min-width: 150px;" scope="col" class="tw-px-6 tw-py-3 tw-text-left  tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">
                        Order ID
                    </th>
                    <th style="min-width: 150px;" scope="col" class="tw-px-6 tw-py-3 tw-text-left  tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">
                        Customer Name
                    </th>
                    
                    <th style="min-width: 150px;"  scope="col" class="tw-px-6 tw-py-3 tw-text-left  tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">
                        date
                    </th>

                    <th scope="col" class="tw-px-6 tw-py-3  tw-text-left tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">
                        Order Status
                    </th>

                    <th style="min-width: 100px;"  scope="col" class="tw-px-6 tw-py-3 tw-text-left  tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">
                        Actions
                    </th>
                    
                    </tr>
                </thead>
    
                <tbody class=" ">
                    <tr v-for="order in paginated" :key="order.id" class="tw-border-b tw-text-gray-300 tw-border-gray-800 tw-overflow-x-scroll  hover:bg-gray-50">
                    <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                       {{order.id }}
                    </td>
                    <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                        {{order.user.name}}
                    </td>
                    <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                        {{formatDate(order.updated_at)}}
                    </td>
                    <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap" 
                    :class="order.status === pending_payment?'tw-text-red-500': order.status === delivered?'tw-text-blue-500':''">
                        {{order.status}}
                    </td>
                    <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                        <v-btn  color="primary">
                            <v-icon small  @click="navigateTo(`/admin_slym/orders/${order.id}`)">mdi-pencil</v-icon>
                        </v-btn>
                        <!-- <v-btn  class="ml-4"  color="red">
                            <v-icon small  @click="cancelEdit(order)">mdi-close</v-icon>
                        </v-btn> -->
                    </td>
                    </tr>
                </tbody>

            </table>
        </div>
        <div class="tw-mt-4">
            <div class="tw-flex tw-items-center tw-text-center tw-flex-col">
                <span class="text-muted me-3">Showing 1 - 10 out of {{ itemlist.length}}</span>
                <ul class="tw-flex tw-justify-between tw-mt-4 tw-mt-sm-0">
                    <li class="mx-1 " ><v-btn  @click.prevent="handlePagePrevChange()">Prev</v-btn></li>
                    <!-- <li class="" @click.prevent="currentPage=i" v-for="i in totalPages" :key="i"  :class="i==currentPage?'tw-bg-[blue]':''">
                        <v-btn disabled color="white" >{{ i }}</v-btn></li>
                    -->
                    <li class="mx-1 "><v-btn @click.prevent="handlePageNextChange()" aria-label="Next">Next</v-btn></li>
                </ul>
            </div>
        </div>


    </div>

  

</template>
  
  

<script>
export default {
    
   data() {
    return {

      headers: [
        { text: 'Order ID', value: 'id' },
        { text: 'Customer', value: 'customerName' },
        { text: 'Total', value: 'total', align: 'right' },
        { text: 'Date', value: 'createdAt' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],

     

     itemlist:[],
     perPage:10,
     currentPage:1,

    };


  },

  computed:{
    orders(){
        return this.$store.state.orders.list
    },
    paginated(){
        return this.itemlist.slice(((this.currentPage - 1) * this.perPage), this.currentPage * this.perPage)
    },
    totalPages(){
        return Math.ceil(this.itemlist.length / this.perPage)
    }
  },
  async mounted(){

    setTimeout(() => {
        this.itemlist = this.orders
        console.log('updated')
    },3000);



         try{
            const data = await fetch('https://backend.unboxedparty.com/api/order',{
                method:"GET",
                headers:{
                    'Content-Type': 'application/json',
                }
            }).then(resp=>resp.json())
    
    
            const payload =  [...data.orders]
              payload.reverse(payload)
              this.$store.dispatch("setMyOrders", payload);
              this.$store.dispatch("setMyOrdersExpirationDate", addMinutes(30));
    
         }catch(e){
            console.log(e)

         }
     

  },

  methods:{
    handlePageNextChange (){
        if (this.currentPage < this.totalPages) {
        this.currentPage++;
        }
    },

    handlePagePrevChange(){
        if (this.currentPage > 1) {
           this.currentPage--;
         }
    }
  }
};
</script>
<style>
</style>