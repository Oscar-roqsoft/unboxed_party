<template>


<div class="tw-border tw-bg-gradient-to-t tw-from-gray-800 tw-via-gray-700 tw-bg-gray-600  tw-shadow tw-rounded-md tw-h-[520px] tw-overflow-y-scroll tw-p-4">
                  <h5 class="tw-py-2 tw-pb-4 tw-border-b tw-border-gray-500  tw-text-white tw-text-center tw-rounded-t tw-capitalize tw-text-xl">Payment Info</h5>
                  <!-- <br><hr class=" tw-text-xs"><br> -->
                  <p class="tw-capitalize tw-py-4">payment method:</p>
                  <div class="tw-grid tw-grid-cols-2 tw-text-center tw-gap-5  tw-items-center tw-pb-6 tw-border-b tw-border-gray-500 ">
                    <div class="tw-border tw-relative tw-border-gray-300 tw-text-xs tw-rounded-xl tw-py-3 tw-px-2 tw-capitalize">
                         <div class="tw-absolute tw-inset-y-0 tw-py-4 tw-flex tw-items-center tw-ps-3.5 tw-pointer-events-none">
                              <svg class="tw-w-4 tw-h-4 tw-text-gray-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                              </svg>
                          </div>
                          <span class="pl-3">
                            credit card
                          </span> 
                          
                    </div>
                    <div class="tw-border tw-relative tw-border-gray-300 tw-text-xs tw-rounded-xl tw-py-3 tw-px-2 tw-capitalize">
                         <div class="tw-absolute tw-inset-y-0 tw-py-4 tw-flex tw-items-center tw-ps-3.5 tw-pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M7.914 10.677h1.659c3.604 0 5.649-1.623 6.3-4.96c.021-.11.04-.216.056-.322c.036-.226.054-.429.062-.624c.006-.134.01-.213.009-.287a2.643 2.643 0 0 0-.216-1.039c-.129-.296-.324-.587-.613-.918C14.318 1.557 12.832 1 11.057 1H5.404a.81.81 0 0 0-.799.683l-1.02 6.571l-1.269 8.185a.486.486 0 0 0 .48.561h2.772l.849-5.043a1.51 1.51 0 0 1 1.497-1.28m9.103-4.587c-.792 3.771-3.357 5.772-7.445 5.772H7.914a.331.331 0 0 0-.328.282L6.481 19h2.907a.707.707 0 0 0 .699-.597l.029-.15l.555-3.514l.036-.194a.707.707 0 0 1 .699-.597h.44c2.85 0 5.081-1.158 5.733-4.506c.268-1.38.132-2.534-.562-3.352"/></svg>
                          </div>
                          <span class="">
                            Paypal
                          </span> 
                    </div>
                   
                  </div>
                 
                   <form class="tw-max-w-sm tw-mx-auto">
               
                       <div class="">
                           <label for="card-number-input" class=" tw-text-white tw-relative">Name On Card:</label>
                           <input type="text" id="card-number-input" class="border-b tw-outline-none  tw-text-sm  tw-block tw-w-full  tw-py-2.5  " 
                           placeholder="Account Name" 
                            required>
                           
                       </div>
               
                       <div class="tw-my-4">
                           <label for="card-number-input" class=" tw-text-white  tw-mt-10">Card number:</label>
                           <input type="text" id="card-number-input" class="border-b tw-outline-none  tw-text-sm  tw-block tw-w-full  tw-py-2.5  " 
                           placeholder="0000 0000 0000 0000" 
                           pattern="^4[0-9]{12}(?:[0-9]{3})?$" required>
                         
                       </div>
               
               
                       <div class="tw-grid tw-grid-cols-3 tw-gap-4 tw-my-4">
                           <div class="tw-col-span-2">
                               <label for="card-expiration-input" class="">Card expiration date:</label>
               
                             
               
                               <div class="tw-grid tw-grid-cols-2 tw-gap-3">
               
                                       <input id="card-expiration-input" type="number" 
                                       class="border-b border-gray-300   tw-text-sm tw-outline-none
                                       tw-p-2 " placeholder="MM" required>
               
                                       <input  id="card-expiration-input" type="number" 
                                       class="border-b border-gray-300   tw-text-sm tw-outline-none
                                        tw-p-2" placeholder="YY" required>
               
                               </div>
               
                           </div>
               
                           <div class="tw-col-span-1">
                               <label for="cvv-input" class="">CVV code: </label>
                               <input type="number" id="cvv-input"
                               class=" border-b border-gray-300  tw-text-sm tw-outline-none
                                tw-block tw-w-full tw-p-2 " placeholder="CVV" required>
                           </div>
                       </div>
                       
                       <button type="submit" class=" tw-bg-blue-600 tw-mt-4 hover:bg-blue-800 tw-w-full 
                       tw-font-bold tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-me-2 tw-mb-2 ">Pay now</button>
                       
                   </form>

                </div>


</template>