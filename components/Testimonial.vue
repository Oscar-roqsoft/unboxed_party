<template>
<div class="d-flex align-center justify-center" style="min-height: 100vh;">

    <div style="background: #000!important;padding:0px 0" class="mb-12">

    <h2 v-if="$vuetify.display.smAndDown" :style="$vuetify.display.smAndDown?'padding-top:60px':''" style="font-size:46px!important;padding-bottom: 34px;color:#fff" class=" my-0 mb-6 coreupcard hidden text-center    px-5 ">With ❤️ from Unboxed FC </h2>
                <v-container :class="$vuetify.display.smAndDown?'px-0':''" class="py-0" style="overflow:hidden">
    
    <v-row wrap style="position:relative;" class="d-flex align-center ">
             <div  style="position:absolute;top:0;height:40%;background: linear-gradient(to bottom, #000 0%, rgba(0,0,0,0) 100%);
    width:100%;z-index:2"></div>
             <div  style="position:absolute;bottom:0;height:40%;background: linear-gradient(to top, #000 0%, rgba(0,0,0,0) 100%);
    width:100%;z-index:2"></div>
        <v-col :style="   $vuetify.display.smAndDown?'animation: moveSlideshow2 40s linear infinite':'  animation: moveSlideshow 40s linear infinite'" :cols="$vuetify.display.smAndDown? '12': '6'" class="animatediv px-3" style="position:relative;max-height:550px;overflow-y:visible" xs12 md6 :class="$vuetify.display.smAndDown?'order-2 pt-12':'py-12'">
            <div style="margin-top:500px">
    
           
    <v-row   v-for="(n, i) in reasons" :key="i">
        <v-col  :cols=" '4'" :class="i % 2 > 0 ?'order-1':'order-2'">
            
        </v-col>
        <v-col   :cols=" '8'" :class="i % 2 > 0 ?'order-2':'order-1'">
    <div :class="$vuetify.display.smAndDown? 'pa-1':'pa-2'">
    
        <v-card height="auto" style="position:relative;" class="rounded-xl elevation-0 pb-5 pa-2" flat :color="n.color">
           <v-row class="" >
            <v-col style="max-width:58px" class="pb-0 d-flex " :cols="cols[6]">
                
                <v-avatar size="60"><v-img eager :src="n.image"></v-img></v-avatar>
            </v-col>

            <v-col :cols="cols[7]" class="  px-4">
                    
                    <span style="font-size:12px;line-height0.31" class="text-grey-darken-3">
                    {{n.title}}
                </span>
             <div style="line-height:0.9">
                    
                 <span style="font-size:12px;opacity:0.6" class="text-black ">
                    @{{n.handle}}
                </span>
                </div>
                <p style="font-size:14px;bottom:10px;width:100%" class="jost text-grey-darken-4  font-weight-bold  cardtext  mt-3 ">{{n.name}}</p> 
        </v-col>   
        </v-row>
        </v-card>
    </div>
        </v-col>
    </v-row>
     </div>
        </v-col>
        <v-col style="z-index:9" cols="6"  v-if="$vuetify.display.mdAndUp"  :class="$vuetify.display.smAndDown?'order-1 text-center':'text-right'">
    <h2 class=" herotitle2 d-block text-white">With ❤️ from Unboxed FC </h2>
    <div class="pt-6 ml-8 d-flex justify-start" >
      <v-btn to="/reserve"
      
                
      size="x-large" class="mx-auto text-capitalize font-weight-bold " rounded color="white">Join Unboxed FC</v-btn></div>
        </v-col>
    </v-row>
</v-container>
<div v-if="$vuetify.display.mdAndDown" class="py-12 d-flex justify-center" >
      <v-btn to="/reserve"
      
                
      size="x-large" class="mx-auto text-capitalize font-weight-bold " rounded color="white">Join Unboxed FC</v-btn></div>
    </div>    </div>

    </template>
    <style >
    .animatediv{
      transform: translate3d(0, 0, 0);
    
    }
    @keyframes moveSlideshow {
      100% { 
        transform: translatey(-490%);  
      }
      }
    @keyframes moveSlideshow2 {
      100% { 
        transform: translatey(-600%);  
      }
    }
    </style>
    <script>
    export default {
        computed:{
            cols() {
        const { lg, sm, md } = this.$vuetify.display;
        return lg
          ? [4, 12, 6, 4, 8, 4, 3,9]
          : md
          ? [4, 12, 12, 6, 8, 4, 3, 9]
          : sm
          ? [6, 12, 12, 12, 12, 12, 12, 12]
          : [6, 12, 12, 12, 12, 12, 12, 12];
      },
        },
        data: () => ({
        reasons:[
                {
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238981/Person_Chris_Skin_Tone_Black_Posture_1_Happy_q9em5c.png',
                handle: 'abimbolaojo',    
                title: 'Abimbola Ojo',    
                color: '#c5c5c5',
                name: 'Finally! an event for introverts',
                },
                {
                    image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680248707/Character_Ishanvi_Skin_tone_Black_Posture_26_Crossing_Finger_hdukf3.png',
                    handle: 'adaezeobi',
                    title: 'Adaeze Obi',
                    color: '#aaa332',
                name: 'Its going!!!!!',
                },
                {
                    image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238981/Person_Ed_Skin_Tone_Black_Posture_1_Happy_dfeklq.png',
                    handle: 'abudusanni',
                    title: 'Abudu Sanni',
                    color: '#cd4481',
                name: 'The Box is limitless.',
                },
                {
                    image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238981/Person_George_Skin_Tone_Black_Posture_17_Happy_Winking_tkn6xa.png',
                    handle: 'ibrahimgafa',
                    title: 'Ibrahim Gafa',
                    color: 'teal',
                    name: 'Who dey check am!!! ',
                },
                {
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238979/Character_Mary_Skin_tone_White_Posture_27_Sh_e68nio.png',
                handle: 'azubikekelvin',    
                title: 'Azubike kelvin',    
                color: 'green',
                name: 'Tight security always guranteed',
                },
                {
                    image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238979/Character_Mary_Skin_tone_Black_Posture_1_Happy_ephuz0.png',
                    handle: 'obichidigo',
                    title: 'Obi Chidiogo',
                    color: 'red',
                    name: 'Ambulance on Stand By for emergencies',
                },
                {
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238977/Character_Darlene_Skin_tone_White_Posture_9_Lovely_bkhiqo.png',
                handle: 'chiemekajackson',    
                title: 'Chiemeka Jackson',    
                color: '#aaa332',
                name: 'Vibe check ',
                },
           
                {
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238977/Character_Jeniffer_Skin_tone_White_Posture_22_Victory_owgp53.png',
                handle: 'taiwolawal',    
                title: 'Taiwo Lawal',    
                color: '#cd4481',
                    name: "Shaming attracts permanent ban",
                },
                {
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238981/Person_Chris_Skin_Tone_Black_Posture_1_Happy_q9em5c.png',
                handle: 'adedayoprecious',    
                title: 'Adedayo Precious',    
                color: '#aaa332',
                    name:"One thing about Unboxed parties is that they are like a box of chocolates - you never know what you're going to get, but you're guaranteed to have a great time!",
                },
                {
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238979/Character_Mary_Skin_tone_White_Posture_27_Sh_e68nio.png',
                handle: 'bayoyinka',    
                title: 'Adebayo Adeyinka',    
                color: 'teal',
                    name:"if you are attending unboxed party You're in for a treat, my friend!",
                },
                {
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238981/Person_George_Skin_Tone_Black_Posture_17_Happy_Winking_tkn6xa.png',
                handle: 'emmanueljare',    
                title: 'Emmanuel Adejare',    
                color: 'green',
                    name:"Grab a drink, get comfy, and get ready to unbox some amazing moments with your favorite people! Let's make this party one to remember!",
                },
                {
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238977/Character_Jeniffer_Skin_tone_White_Posture_22_Victory_owgp53.png',
                handle: 'ifeolawale',    
                title: 'Ife Olawale ',    
                color: 'red',
                    name:"The only thing better than receiving gifts is unboxing them with your besties!",
                },
                {
                    image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_100,h_100/v1680238981/Person_George_Skin_Tone_Black_Posture_17_Happy_Winking_tkn6xa.png',
                handle: 'MulanyaMulanya',    
                title: 'All about diego',    
                color: 'teal',
                    name:"@theunboxedparty is here to stay, Every new edition is a higher standard set",
                },
            ]
        })
    }
    </script>