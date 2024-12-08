<template>
    <div>
  
    <v-card tile theme="dark" >
      <div class="pa-5 d-flex justify-space-between">
        <h1 >Students({{ students.length }})</h1>
   
       <v-btn :loading="loader" @click="getUsers(true)" icon size="small"><v-icon icon="mdi mdi-reload"></v-icon></v-btn>
      </div>
      <v-table theme="dark" class=" pb-12 px-3 mb-12">
        <thead>
          <tr>
            <th class="text-left font-weight-black text-h5">
              S/N
            </th>
       
            <th class="text-left font-weight-black text-h5">
              Name
            </th>
       
            <th class="text-left font-weight-black text-h5">
              Email
            </th>
            <th class="text-left font-weight-black text-h5">
              Phone
            </th>
            <th class="text-left font-weight-black text-h5">
              Whatsapp
            </th>
        
            <th class="text-left font-weight-black text-h5">
              Created
            </th>
            <!-- <th class="text-left font-weight-black text-h5">
              Updated
            </th> -->
          </tr>
        </thead>
        <tbody >
          <tr 
            v-for="item, i in students"
            :key="i"
          >
            <td>{{ i + 1 }}</td>
            <td class="text-blue font-weight-medium" @click.stop="openTicketBtn(item)">{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td><a target="_blank" :href="'tel:'+item.phone">{{ item.phone }}<v-icon>mdi-phone</v-icon></a></td>
            <td><a 
              :href="
                        'https://wa.me/+234' +
                          item.whatsapp +
                          '?text= Our%20person%20'+item.name+'%0aUnboxed%20party%20is%20just%20few%20days%20away%20and%20we%20can’t%20wait%20to%20party%20with%20you%20😊💯%0aGet%20your%20tickets%20at%20www.unboxedparty.com%0aTell%20your%20friends%20and%20save%20up%20our%20contacts%20too'"
  
                      target="_blank"
              >{{ item.whatsapp }}<v-icon>mdi-whatsapp</v-icon></a></td>
  
       
            <td>{{ formatDated(item.created_at) }}</td>
            <!-- <td>{{ formatDated(item.updated_at) }}</td> -->
  
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <v-dialog z-index="9"
      v-model="dialog2"
      width="400" class="text-center "
    >
  <v-sheet class="pa-3"> 
    <h3 class="text-grey text-h6">Offline Tickets Fulfilment for {{ chosen.name }} (Email: {{ chosen.email }})</h3>
    <div class="d-flex my-3 px-3 align-center justify-space-between">
  <p class="text-h6 text-left font-weight-bold">Quantity :</p>
  
  <div style="width:150px" class=" mb-0 d-flex align-center justify-space-around ">
    
    <v-btn @click="decrementTicket" color="white" size="x-small" class="font-weight-bold d-flex align-center"><v-icon icon="mdi mdi-minus" size="19px"></v-icon></v-btn>
    <p class="text-h5 font-weight-black mb-0">{{ qty }}</p>
          <v-btn @click="incrementTicket" color="white" size="x-small"  class="font-weight-bold d-flex align-center"><v-icon icon="mdi mdi-plus" size="19px"> </v-icon></v-btn>
        </div>
      </div>
      <!-- come back nd finalize the offline ticket process -->
    <v-btn
    :loading="loading2"
                @click="sendTicket(chosen)"
                size="x-large"
              rounded
                color="grey"
                theme=""
                class="my-3 d-flex align-center font-weight-bold text-capitalize mx-auto"
                >Send Ticket <v-icon class="ml-2 mt-1" icon="mdi mdi-cash"></v-icon></v-btn>
    </v-sheet>
    </v-dialog>
    <v-dialog z-index="9"
      v-model="dialog"
      width="300"
    >
  
    
          
    </v-dialog>
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
    computed:{
       students () {
        return this.$store.state.students
      },
      ticket_no () {
        return this.$store.state.ticket_no
      },
      student_no () {
        return this.$store.state.student_no
      },
      },
      mounted(){
  this.getUsersbtn()
      },
    data () {
      return {
        dialog:false,
        loader:false,
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
    methods:{
      getUsersbtn(){
        if(this.students.length < 1){
          this.getUsers()
        }
      },
      getUsers(x){
        this.loader = true
        fetch("https://backend.unboxedparty.com/api/students", {
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
              this.loader = false
              this.$store.dispatch('setStudents', res.success.users)
  
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
      sendTicketBtn(item) {
        this.chosen = item
        this.dialog2 = true
      },
      openTicketBtn(item) {
        // this.ticket = e.tickets[0]
        // this.dialog = true
        // console.log(item)
        this.$store.dispatch('setUser', item)
        // console.log(this.$store.state.user.user)
        this.$router.push('/admin_slym/student/'+item.id)
      },
      sendTicket(e) {
        this.activeId = e.id
  
          this.loading2 = true;
            fetch("https://backend.unboxedparty.com/api/sendTicket?amount=1000&email="+e.email+"&user_id="+e.id+"&event_id=1&event=Royal Ball/Prom&qty="+this.qty, {
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