<template>
    <div v-if="user" class="w-100 text-center">
  
    <v-card v-if="user.student" class="my-4 mx-auto" max-width="400" tile theme="dark" >
        <div class="d-flex px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
                Name
 
           </p>
           <p
             style="font-family: monospace !important"
             class="text-body-1 text-right text-grey-lighten-1 font-weight-bold"
             >
            {{ user.name}}
           </p>
       </div>     
        <div class="d-flex px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
               Phone
 
            </p>
            <p
            style="font-family: monospace !important"
            class="text-body-1 text-right text-grey-lighten-1 font-weight-light"
            >
            <a target="_blank" :href="'tel:'+user.phone">
                {{ user.phone }}<v-icon size="16" class="ml-1">mdi-phone</v-icon>
              </a>
            </p>
       </div>     
        <div class="d-flex px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
               Email
 
           </p>
           <p
             style="font-family: monospace !important"
             class="text-body-1 text-right text-grey-lighten-1 font-weight-bold"
             >
            {{ user.email}}
           </p>
       </div>     
        <div class="d-flex px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
               Instagram Handle
 
           </p>
       
           <p
             style="font-family: monospace !important"
             class="text-body-1 text-right text-grey-lighten-1 font-weight-light"
             >
             <a    :href="'https://www.instagram.com/'+user.student[0].instagram_handle"
                    target="_blank">
                    {{ user.student[0].instagram_handle }}<v-icon size="16" class="ml-1">mdi-instagram</v-icon>
                  </a>

           </p>
       </div>     
        <div class="d-flex px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
               Whatsapp
 
           </p>
       
           <p
             style="font-family: monospace !important"
             class="text-body-1 text-right text-grey-lighten-1 font-weight-light"
             >
             <a    :href="
                      'https://wa.me/+234' +
                        user.whatsapp +
                        '?text= Hi%20'+user.name"
                    target="_blank">
                    {{ user.whatsapp }}<v-icon size="16" class="ml-1">mdi-whatsapp</v-icon>
                  </a>

           </p>
       </div>     
       <div class="d-flex px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
                School
 
           </p>
           <p
             style="font-family: monospace !important"
             class="text-body-1 text-right text-grey-lighten-1 font-weight-bold"
             >
            {{ user.student[0].school}}
           </p>
       </div>   
       <div class="d-flex px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
                Departmemt
 
           </p>
           <p
             style="font-family: monospace !important"
             class="text-body-1 text-right text-grey-lighten-1 font-weight-bold"
             >
            {{ user.student[0].department}}
           </p>
       </div>   
       <div class="d-flex px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
                Level
 
           </p>
           <p
             style="font-family: monospace !important"
             class="text-body-1 text-right text-grey-lighten-1 font-weight-bold"
             >
            {{ user.student[0].level}}lvl
           </p>
       </div>   
       <div class="d-flex px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
                Have Attended An Unboxed Episode?
           </p>
           <p
             style="font-family: monospace !important"
             class="text-body-1 text-right text-grey-lighten-1 font-weight-bold"
             >
            {{ user.student[0].attended? 'Yes': 'No'}}
           </p>
       </div>   
       <div class=" px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
ID Card           </p>
<div class="pa-3">

  <v-img width="100%" :src="user.student[0].school_id"></v-img>
</div>
       </div>   
       <div class=" px-2 py-2  justify-space-between  align-center">
               <p
               variant="outlined"
               style=""
               class="text-capitalize text-left  font-weight-bold"
               rounded
               >
School Fees           </p>
<div class="pa-3">

  <v-img width="100%" :src="user.student[0].school_fees"></v-img>
</div>
       </div>   
  
    </v-card>

  

 
    </div>
  
    </template>
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  
  * {
    font-family: "Permanent Marker", cursive !important;
  }</style>
  <script>
  import moment from 'moment';
  
  export default {
   
      mounted(){
    //  this.getUser()
      },
    data () {
      return {
        users: [],
        dialog:false,
        chosen:{},
        ticket:{},
        dialog2:false,
        loading:false,
        loading2:false,
        activeId: null,
        qty: 1,
        ticket_code: '123'
      }
    },
    computed:{
     user () {
      return this.$store.state.user
    },
    tickets () {
      return this.user ? this.user.tickets : []
    },
    
    },
    methods:{
      getUser(){
        fetch("https://backend.unboxedparty.com/api/get_tickets?id="+this.$route.params.id, {
            method: "GET",
            headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json'
            }})
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error("Something went wrong");
            })
            .then((res) => {
              // console.log(res)
            this.$store.dispatch('setUser',res.success.user)
            })
            .catch(() => {
              alert("An error has occurred");
              this.loading = false;
            });
      },
      incrementTicket(){
          this.qty ++
        },
        decrementTicket(){
          if(this.qty <= 1){
            return
          }else{
            this.qty --
          }
        },
      sendTicketBtn(e) {
        this.chosen = e
        this.dialog2 = true
      },
      openTicketBtn(e) {
        this.ticket = e[0]
        this.dialog = true
      },
      sendTicket(e) {
        this.activeId = e.id
  
          this.loading2 = true;
            fetch("https://backend.unboxedparty.com/api/sendTicket?amount=2000&email="+e.email+"&user_id="+e.id+"&event_id=1&event=Royal Ball/Prom&qty="+this.qty, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
              }
            })
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error("Something went wrong");
              })
              .then((res) => {
            this.loading2 = false;
            this.dialog2 = false;
            this.getUser()
          })
          .catch(() => {
                this.dialog2 = false;
                this.loading2 = false;
              });
          },
      get_tickets(x){
        this.activeId = x
        this.loading = true
        fetch("https://backend.unboxedparty.com/api/get_tickets?id="+x, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json'
            
            
          }})
          .then((response) => {
            if (response.ok) {
              this.loading = false
            this.dialog = true
              return response.json();
            }
            throw new Error("Something went wrong");
          })
          .then((res) => {
            // console.log(res)
            this.loading = false
            this.dialog = true
          })
            .catch(() => {
              alert("An error has occurred");
              this.loading = false;
            });
      },
      formatDated(x){
        return moment(x).format("YYYY MM DD")
      }
    }
  }
  </script>