<template>
    <div class="">
       <h3 class=" tw-text-3xl tw-mb-2 tw-mx-2 tw-font-bold" color="deep-purple-accent-3">Cart({{ $store.state.cartItems.length }})</h3>
        <div >

        <div class="tw-relative tw-overflow-auto   sm:tw-rounded-lg  ">
            <table class="tw-w-full tw-text-sm tw-text-left rtl:tw-text-right  ">
                <thead class="tw-text-sm tw-border-b tw-border-gray-900 tw-capitalize  " color="deep-purple-accent-3">
                    <tr>
                      
                        <th scope="col" class="tw-px-6 tw-py-3">
                            Product name
                        </th>
                        <th scope="col" class="tw-px-5 tw-py-3">
                            Size
                        </th>
                        <th scope="col" class="tw-px-6 tw-py-3">
                            Quantity
                        </th>
                        <th scope="col" class="tw-px-6 tw-py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>

                    </tr>
                </thead>

                <tbody v-for="(item,index) in $store.state.cartItems" :key="item.name" class="" color="deep-purple-accent-3">
                    <tr class="tw-border-b tw-border-gray-900  hover:bg-gray-50 tw-relative tw-h-[100px] tw-text-[14px]">
                        <th scope="row" class="px-4 py-4 font-medium  whitespace-nowrap " style="min-width: 200px;">
                          <div class="tw-w-full tw-flex ">
                            <div class="tw-w-[100px] ">
                              <img class="tw-w-[200px]  tw-rounded-md" 
                              :src="item.image" 
                               />
                            </div>
                      
                            <div class=" tw-px-2 tw-py-2 tw-leading-5 tw-w-full">

                              <div class="price-size">
                                  <h3>{{item.name }}</h3>
                              </div>
                              <p>{{ item.color }}</p>
                            </div>
                          </div>

                        </th>

                        <td class="px-6 tw-py-4 tw-uppercase tw-font-bold">

                          <!-- <div class="tw-flex tw-flex-col   tw-justify-center tw-items-start ">
                            <select v-model.trim="selected" class="tw-bg-gray-transparent tw-border tw-shadow-sm tw-text-center  tw-text-sm
                                tw-rounded tw-block w-14 tw-px-2 tw-py-1 flex justify-between items-center">
                              <option v-for="option in  $store.state.items[index].options[0].sizes"  :value="option">{{option}}</option>
                            <span class="inline-block w-4 h-4 fill-current ml-auto">
                                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.293 12.954l-2.645 2.645a1.5 1.5 0 0 1-2.121-2.121l4.473-4.473a1.5 1.5 0 0 1 2.121 2.121z" />
                                </svg>
                              </span
                            </select>
                          </div> -->

                            {{ item.size }}
                        </td>


                        <td class="px-6   ">
                          <div class="tw-flex tw-items-center tw-justify-between tw-bg-transparent tw-rounded-md tw-p-1 tw-w-20 tw-shadow-sm">
                            
                            <button 
                              @click.prevent="decrement(index)"
                              class=" tw-bg-white tw-rounded tw-p-1  ">
                                 <svg xmlns="http://www.w3.org/2000/svg"  width="22" height="22" viewBox="0 0 48 48">
                                  <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" 
                                  d="M10.5 24L38.5 24"/></svg>
                            </button>

                            <span class="tw-font-bold  tw-px-3 tw-text-lg">{{ item.quantity }}</span>


                            <button
                              @click.prevent="increment(index)"
                              class="tw-bg-white tw-rounded tw-p-1 ">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                  <path fill="#000" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"/></svg>
                            </button>
                          </div>
                        </td>

                        <td class="px-6 tw-py-4 tw-font-bold">
                            N{{ addCommas(item.price * item.quantity) }}
                        </td>

                        <td class="px-6 tw-py-4 text-right ">
                            <a href="#" @click.prevent="deleteItem(item.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 352 512">
                                <path fill="red" d="m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 
                                0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 
                                111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 
                                32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48z"/>
                              </svg>
                            </a>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
          
        </div>
    </div>
  </template>
  

<script>
export default {
  props: {
    product: Object,

  },
  data(){
    return{
      items:[
        {id:1,count:2},
        {id:2,count:0},
        {id:3,count:0},
        {id:4,count:0}
      ],

      selected:'',
      options:[]
    
    }
  },

  computed:{
      cartitems(){
        return this.$store.state.cartItems
      },
      subtotal(){
        const total = this.$store.state.cartItems
        return 
      },
    

  },


  methods: {
    updateQuantity(product) {
      // Update the product quantity in the cart state
      this.$store.dispatch('updateCartItemQuantity', { product, quantity: product.quantity });
    },
    increment(index) {
      console.log(index +  1)
      this.$store.state.cartItems[index].quantity++;
    },
    decrement(index ) {
      if(this.$store.state.cartItems[index].quantity > 1){
        this.$store.state.cartItems[index].quantity--;

      }
    },
    removeFromCart(product) {
      // Remove the product from the cart state
      this.$store.dispatch('removeItemFromCart', product);
    },

    deleteItem(itemId) {
    const itemIndex = this.$store.state.cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex >= 0) {
      this.$store.state.cartItems.splice(itemIndex, 1);
      if(this.$store.state.cartItems.length == 0){
        navigateTo('/shop')
     }
    }
    
   },

   addCommas(num) {
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


  },

};
</script>

<!-- <style scoped>

.product-card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 200px;
  margin: 10px;
  overflow: hidden;
  color: gray;
}

.image-container {
  background-color: #f5f5f5;
  width: 25%;
}

.product-card img {
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  object-fit: cover;
}

.product-badge {
  background-color: #ff4757;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  font-weight: bold;
}

.product-info {
  padding: 10px;
  width: 25%;
}

.product-info h3 {
  margin-bottom: 5px;
}

.price-size {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.price-size span {
  font-size: 14px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 7px;
}

.quantity-label {
  margin-right: 10px;
  font-size: 14px;
}

.quantity-controls button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 8px;
  cursor: pointer;
  width: 20px;
}
.quantity-controls input{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    margin: 0px 4px;
    padding: 5px 8px;
}

.product-info button {
  background-color: #ff4757;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 10px;
}

.product-info button:hover {
  background-color: #e64058;
}

</style> -->