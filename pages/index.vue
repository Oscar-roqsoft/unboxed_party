<template>
  
  <v-app>
    <v-card class="pa-0 ma-0" color="black" tile flat min-height="900px">
     
      <div style="position:relative;  z-index: 99;  
   min-height: 900px;" class="overflow-hidden">
       <div>
        <div
        v-if="$vuetify.display.mdAndUp"
class="bgh">
              
          <video
            id="heroVideo"
            :style="$vuetify.display.smAndDown ? ' width: 1365px ' : ' width: 100%'"
            style="
              position: absolute;
              top: 0;
              scale: 1.2;
              height: 900px;
              z-index: 1;
            "
            autoplay
            muted
            loop
          >
            <source
              src="https://res.cloudinary.com/crushcontest-com/video/upload/v1680267203/WhatsApp_Video_2023-03-31_at_8.40.28_AM_pvaijr.mp4"
            />
          </video>
          <!-- <v-avatar  tile width="100%" height="100%"><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_1000/v1664318468/C0042.MP4.16_29_36_17.Still001_1_br9fzu.jpg"></v-img></v-avatar> -->
        </div>
        <div class="bgh" v-else>
    <v-img width="auto" height="100%" 
    src="https://res.cloudinary.com/payhospi/image/upload/v1698310701/unboxed/Screenshot_2023-10-26_at_3.58.05_AM_cy5krs.png">
    </v-img>
        </div>
     <Header />
     <div style="position: relative">
           <v-container  style="z-index:99;" class="" >
        <v-row style="min-height: 800px; "  class="d-flex align-center py-9">
          <v-col class="d-flex align-center  mb-12" style="max-width: 700px;" :cols="cols[2]">
            <div>
              <!-- 😎 -->
              <!-- 🥳 -->
              <!-- 🎅🏾 -->
            <h1 class="herotitleb"> <span class="herotitle">Your Monthly Themed Party</span> 🥳</h1>
            <p 
              style="max-width: 450px"
              class="py-3 mb-4 text-grey-lighten-1 centerIt"
            >
            Join the Party Revolution and Experience Unforgettable Moments with Our Monthly Themed Events. Let's Unbox the Fun Together!            </p>
            <div class="py-1 centerIt mb-6">
              <v-btn
              to="/ticket/list"
                size="large" height="55"
                style="
                  background: linear-gradient(
                    132.03deg,
                    #c471ed 14.22%,
                    #a044ff 97.95%
                  );
                "
                class="text-capitalize font-weight-black"
                rounded
                >Tickets</v-btn
              >
              <!-- <v-btn
                variant="outlined"
                style="border: 2px solid #ffffff"
                rounded
                to="/events"
                size="large"
                class="text-capitalize font-weight-bold ml-3"
                ><v-icon class="mr-1 mt-1" icon="mdi:mdi-play-speed"></v-icon> Past Events</v-btn
                > -->
                <v-btn
                variant="elevated" flat
                rounded color="white" style="border: 2px solid #b0b0b0;overflow: hidden;"
                to="/shop" width="200"
                size="large" height="55"
                class="text-capitalize py-0 font-weight-bold ml-3"
                > <v-img cover width="200" height="75" eager class="mt-0" src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1698217121/unboxed/Unboxed_Thelma_2_e4b9dg.jpg"></v-img> </v-btn
              >
            </div>
          </div>

          </v-col>
          <v-col :class="$vuetify.display.smAndDown?'justify-center':'justify-end'" class="d-flex  align-center  mb-12" style="max-width: 700px;" :cols="cols[2]">
            
               
                <!-- <v-card  v-if="isLoading" class="tw-w-full">
                    <v-skeleton-loader type="card" style="background: #010107 !important;" />
                </v-card> -->

                <div v-if="isLoading" class=" skeleton-container tw-h-[250px] tw-w-[450px]">
                  <div class="skeleton-item tw-h-full tw-w-full"></div>
                </div>

            <iframe v-else eager class="rounded-lg" width="450" height="250" :src="fetchedVideo" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-col>
        </v-row>
        
      </v-container> 
      <div v-if="true" style="height: 60vh;
    position: absolute;
    width: 100%;
    bottom: 0;
    background: linear-gradient(360deg, black, transparent);
    z-index: -1;"></div></div>
    </div>
    </div>

    <div  
    :style="$vuetify.display.smAndDown?'margin-top: 20px;':'margin-top: -200px;'"
    style="position: relative;    
    z-index: 9; padding-top: 239px;margin-bottom: 100px;">

 <div v-if="$vuetify.display.smAndDown" class="photobanner0 d-flex justify-start">
  <v-img class="" height="" eager 
          width="200px"
          v-for="n in memes" :key="n"
          :src="n"
        ></v-img>
  <v-img class="" height="" eager 
          width="200px"
          v-for="n in memes" :key="n"
          :src="n"
        ></v-img>
 </div>
    <v-container   v-for="(i,index) in eventsLists" :key="index"   :class="$vuetify.display.smAndDown? 'bg-black':''" class="pt-0" style="box-shadow: 0px -42px 29px 8px #000000f0;overflow: visible; position: relative;" fluid>
      <div  v-if="!$vuetify.display.smAndDown" style="    max-height: 543px;"  class="photobanner0 d-flex align-end justify-start">
      <div v-if="true" style="height: 80vh;
    position: absolute;
    width: 100%;
    bottom: 0; z-index: 99999;
    background: linear-gradient(360deg, black, transparent);
    ;"></div>
  <v-img class="" style="    max-height: 543px;" height="100%" eager 
          max-width="530px" width="auto"
          v-for="n in memes" :key="n"
          :src="n"
        ></v-img>
  <v-img class="" style="    max-height: 543px;" height="100%" eager 
          max-width="530px" width="auto"
          v-for="n in memes" :key="n"
          :src="n"
        ></v-img>
 </div>  
      <!-- <v-card image="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1700458125/Unboxed_Party_Meme_Party_2_usm8ub.jpg" style="opacity: 0.05;position: absolute;top: 0;z-index: -1; left: 0;height: 100%;width: 100%;" ></v-card> -->
    <v-container class="py-0">
 <v-row style="z-index: 999999;position: relative;"
    class="d-flex align-center pt-0">
      <!-- <div v-if="true" style="height: 60vh;
    position: absolute;
    width: 100%;
    background: linear-gradient(360deg, black, transparent);
    z-index: 0;"></div> -->
     <v-col  @click="openEvent(i);"    style="position: relative;z-index: 7;" class="py-0 pb-0" :cols="cols[2]">
      <div class=" d-flex pt-0 pb-0 align-end justify-center">

            <!-- skeleton loader
            <div v-if="isLoading" class=" tw-w-full  tw-rounded-3xl ">
                <div class="skeleton tw-h-[350px] tw-max-w-[500px] tw-rounded-3xl"></div>
                <div class="skeleton tw-h-[30px] my-4 tw-w-[120px] tw-mx-1  tw-rounded-lg"></div>
             </div> -->

        <v-img 
        class=" rounded-lg"  max-width="500"
        width="100%" eager style="cursor: pointer;overflow: visible;"
        height="100%"
        :src="i.image"
        ></v-img>

      </div>
   </v-col> 
   <v-col style="
    z-index: 99;
"  class="mb-0 d-flex  justify-center" :cols="cols[2]">
<div>

  <h1 style="  font-weight: 700;
   font-size: 50px;
   line-height: 60px;" class="text--white bigtext centerIt text-right">Countdown <br>
    <vue-countdown style="  font-weight: 700;
  font-size:40px;" class="text-yellow-darken-1" :time="timediff(mydate)" v-slot="{ days, hours, minutes, seconds }">
   {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
  </vue-countdown>
</h1>

<div class="py-3 centerIt  text-right my-4">
  <v-btn

  @click="openEvent(i);"
  size="x-large"
  style="
           background: linear-gradient(132.03deg, rgb(16 221 81) 14.22%, rgb(3 108 39) 97.95%)
           "
         class="text-capitalize font-weight-bold"
         rounded
         >Reserve</v-btn
         >
         
        </div>
        
      </div>
   </v-col>

 </v-row>
</v-container> 
</v-container>     </div>
<div  class=""  :style="$vuetify.display.smAndDown?'margin-top:60px': 'margin-top:200px' ">
<div >

<h1 class="text-center font-weight-bold text-h2 herotitle ">Our Media Partners</h1>
<p class=" text-grey-lighten-1 text-center font-weight-light">
            Thanks for making us look good.
          </p>
    <div   
      style="position: relative;    
      z-index: 9;height: 200px;" class=" mt-8">

      
      <div  style="margin-top: 20px;" class="photobanner1 h-100 d-flex justify-start">
        <v-img class="mdpert" height="100" eager 
        width="180"
        v-for="n in media_parteners" :key="n"
        :src="n"
        ></v-img>
        <v-img class="mdpert" height="100" eager 
        width="180"
        v-for="n in media_parteners" :key="n"
        :src="n"
        ></v-img>
    
      </div>    
    </div>
    </div>

 </div>


<!-- <v-container>
 <v-row class="d-flex align-center pt-9">
   <v-col :class="$vuetify.display.mdAndDown ?'order-2':'order-1'" class="mb-6" :cols="cols[2]">
     <h1 style="  font-weight: 700;
  font-size: 50px;
  line-height: 60px;" class="text--white bigtext centerIt text-left">Countdown<br>
    <vue-countdown style="  font-weight: 700;
  font-size:40px;" class="text-white-darken-1" :time="timediff2" v-slot="{ days, hours, minutes, seconds }">
   {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
  </vue-countdown>
</h1>
  
     <div class="py-3 centerIt text-left my-4">
       <v-btn
       to="/ticket/Meme Edition 2"
         size="x-large"
         style="
           background: linear-gradient(
             132.03deg,
             #c471ed 14.22%,
             #a044ff 97.95%
           );
         "
         class="text-capitalize font-weight-bold"
         rounded
         >Get Ticket</v-btn
       >
    
     </div>
   
   </v-col>
      <v-col :class="$vuetify.display.mdAndDown ?'order-1':'order-2'" :cols="cols[2]">
     <v-img 
       class="rounded-lg"
       width="100%" eager
       height="auto"
       src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1700458125/Unboxed_Party_Meme_Party_2_usm8ub.jpg"
     ></v-img>
   </v-col>
  

 </v-row>
</v-container>   -->
<v-container style="min-height: "  :class="$vuetify.display.smAndDown? 'mt-0': 'pt-12 mt-12'">
  <div class="centerIt mb-6" style="position:relative">
        <h1 class="herotitle  my-4 text-center">Merch</h1>
         <div class=" px-2 justify-space-between align-center">
          <p class=" text-grey-lighten-1 text-center font-weight-light">
            Rep Unboxed Fc.
          </p>
      
        </div>  
       
        </div>
 <v-row class="py-9">
  <v-col cols="12" lg="8">
    <v-card  to="/shop" color="transparent" flat height="100%" max-height="500" >

    <v-img @click="$router.push('/shop')" style="cursor: pointer;" class="rounded-lg" eager max-height="500" height="100%" cover src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1000/v1698217121/unboxed/Unboxed_Thelma_2_e4b9dg.jpg"></v-img>
 </v-card>
  </v-col>
  <v-col cols="12"  lg="4">
    <v-row>
      <v-col  v-for="(item, i) in items.slice(0,4)" :key="item.id" cols="6">
        <v-card  :to="'/shop/'+item.name" color="transparent" flat height="">

               <!-- <v-img eager  style="cursor: pointer;"   max-width="500px"
                  class="rounded-lg" height="200" width="100%" cover 
                  :src="JSON.parse(item.options[0]).images[0]">
                </v-img> -->

                <div class="tw-rounded-lg">
                  <ItemImage :options="item.options" :width="270"  />
              </div>

                  <h3 style="font-size: 20px;" class="font-weight-medium mt-2 text-capitalize text-truncate text-white">{{item.name}}</h3>

 </v-card>
      </v-col>
    </v-row>
  </v-col>
</v-row>
</v-container>
  
<div class="d-flex align-center justify-center" style="min-height: 800px;">

  <v-container style="position: relative " class="mt-12">
    <v-img eager
    class="rotimg"     
    width="400px"
      style="position: absolute; left: -200px; top: calc(50% - 150px)"
      src="https://res.cloudinary.com/crushcontest-com/image/upload/v1679658507/Vector_5_1_hx2cls.png"
    ></v-img>
    <v-img eager
    class="rotimg"     
    width="400px"
      style="position: absolute; right: -200px; top: calc(50% - 150px)"
      src="https://res.cloudinary.com/crushcontest-com/image/upload/v1679658409/Ellipse_4_1_babxrn.png"
    ></v-img>

    <div class="d-flex align-center" style="max-width: 560px">
      <p class="text-caption mr-2 text-grey-lighten-2 font-weight-light">
        @the_unboxedparty
      </p>
      <v-divider style="border-width: 1px"></v-divider>
    </div>
    <v-row class="d-flex py-9">
      <v-col :cols="cols[2]">
        <h1 class="herotitle2">
          Unleash the Fun with Unboxed Party
        </h1>
      </v-col>
      <v-col :class="$vuetify.display.smAndDown? 'pt-0':'pt-4'" class=" centerIt" :cols="cols[2]">
        <p :class="$vuetify.display.smAndDown? 'mb-4':''" class="text-grey-lighten-1 px-2 py-4" >
          Unboxed Party is your go-to destination for unique and exciting events in the Nigeria (for now sha 😉). From Arabian Fest to Halloween, Meme Party to Royal Ball/Prom, we bring you the best in themed entertainment. Since our inception, we have been growing rapidly, with each event exceeding expectations and setting new standards. Our monthly events are the talk of the town, and we pride ourselves on delivering unforgettable experiences that keep people coming back for more. Join us and unleash the fun at Unboxed Parties!
        </p>
        <v-btn
          size="large"
          rounded to="/ticket/list"
          variant="outlined"
          style="border: 2px solid #ffffff"
          class="text-capitalize mt-4"
          >See Upcoming Events</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</div>
      <v-container :class="$vuetify.display.smAndDown? 'mt-0': 'mt-12'">
        <div class="centerIt" style="position:relative">
        <h1 class="herotitle  mb-4 text-center">Past Events</h1>
         <div class=" px-2 justify-space-between align-center">
          <p class=" text-grey-lighten-1 text-center font-weight-light">
            The coolest parties around you.
          </p>
      
        </div>  
       
        </div>
        <v-row class="d-flex pt-9">
          <v-col v-show="!parseFloat(n.on_sale)"  v-for="(n, i) in events.slice(0, 4)" :key="i"  :cols="cols[3]"
          >
             <div    class="pt-6 d-flex justify-center">

               <!-- skeleton loader -->
             <div v-if="isLoading" class=" tw-w-full  tw-rounded-3xl ">
                <div class="skeleton tw-h-[350px] tw-max-w-[500px] tw-rounded-3xl"></div>
                <div class="skeleton tw-h-[30px] my-4 tw-w-[120px] tw-mx-1  tw-rounded-lg"></div>
                <div class="tw-flex tw-justify-between tw-items-center">
                  <div class="skeleton tw-h-[25px] my-2 tw-w-[120px] tw-mx-1  tw-rounded-lg"></div>
                  <div class="skeleton tw-h-[25px] my-2 tw-w-[120px] tw-mx-1  tw-rounded-lg"></div>
                </div>
             </div>

            <v-card v-else   width="100%"
            max-width="500px"
            :to="'/event/'+ encodeURIComponent(n.name)" color="transparent" class="pa-3">
              <v-img eager
                cover
                height="350px"
                max-width="500px"
                class="rounded-xl"
                :src="n.image"
              ></v-img>
              
              <h2 style="font-size: 30px" class="logoText font-weight-bold text-grey-lighten-2 pt-3">
                {{n.name.substring(0, 21)}}{{  n.name.length > 15 ? '...':''}}  
              </h2>
      
              <div class="d-flex justify-space-between my-2 align-center">
                <p
                  style="font-family: monospace !important"
                  class="text-body-1 text-grey-lighten-1 font-weight-light"
                >

                {{formatDate(n.date)}}

              </p>
              <p
              style=""
              class="text-capitalize text-grey-darken-2 font-weight-bold"
              rounded
              >
              <v-icon size="15" class="mb-1" icon="mdi mdi-map-marker"></v-icon> {{n.venue.substring(0, 15)}}{{  n.venue.length > 15 ? '...':''}}  
                </p>
              </div>
              <!-- <p class="text-body-2 mt-0 text-grey-lighten-2 font-weight-light">
                {{n.description}}
              </p> -->
            </v-card>
             </div>
          </v-col>

        </v-row>
        <div class="py-12 d-flex justify-center" >
          <v-btn to="/events" size="x-large" class="mx-auto text-capitalize font-weight-bold " rounded color="white">See more</v-btn></div>
      </v-container>

      <v-container style="position: relative" class="">
        <v-img eager 
        class="rotimg"  
        width="400px"
          style="position: absolute; left: -200px; top: calc(50% - 150px)"
          src="https://res.cloudinary.com/crushcontest-com/image/upload/v1679658507/Vector_5_1_hx2cls.png"
        ></v-img>
        <v-img eager 
        class="rotimg"  
        width="400px"
          style="position: absolute; right: -200px; top: calc(50% - 150px)"
          src="https://res.cloudinary.com/crushcontest-com/image/upload/v1679658409/Ellipse_4_1_babxrn.png"
        ></v-img>

        <v-row class="d-flex justify-center py-9">
          <v-col class="d-flex justify-center" cols="12">
          <v-card max-width="650px" flat tile color="transparent" style="overflow: visible; display:flex" class="justify-space-between">
            <v-row class="d-flex pa-8">
          <v-col class="godown pics8 d-flex align-center justify-center" 
 cols="4">
 <v-img eager  src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238980/Person_Chris_Skin_Tone_Black_Posture_17_Happy_Winking_jzw2vo.png"></v-img>
</v-col>
          <v-col class="d-flex pics1 align-center justify-center" 
 cols="4">

<v-img eager style="
    scale: 1.6;
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238981/Person_Ed_Skin_Tone_Black_Posture_1_Happy_dfeklq.png"></v-img>
</v-col>
          <v-col class="godown pics2 d-flex align-center justify-center" 
 cols="4">

<v-img eager  src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238979/Character_Mary_Skin_tone_White_Posture_27_Sh_e68nio.png"></v-img>
</v-col>
          <v-col class="d-flex pics7 align-center justify-center" 
 cols="3">

<v-img eager @load="animImg()" style="
    scale: 1.5;
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238977/Character_Darlene_Skin_tone_White_Posture_9_Lovely_bkhiqo.png"></v-img>
</v-col>

<v-col class="py-4 justify-center d-flex centerIt" cols="6">
  <h1 class="herotitle2 text-center">
    Created by Ravers.
  </h1>
  
</v-col>
<v-col class="d-flex pics3 align-center justify-center" 
 cols="3">

<v-img eager style="
    scale: 1.5;
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238977/Character_Angela_Skin_tone_Black_Posture_8_Star_Eye_c7g0od.png"></v-img>
</v-col>
<v-col class=" pics6 goup d-flex align-center justify-center" 
 cols="4">

<v-img eager style="
    scale: 1;
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680247343/28_29_gfibxr.png"></v-img>
</v-col>
          <v-col style="z-index: 999;" class="pics5 d-flex align-center justify-center" 
 cols="4 ">

<v-img eager style="
    scale: 1.5;
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680248707/Character_Ishanvi_Skin_tone_Black_Posture_26_Crossing_Finger_hdukf3.png"></v-img>
</v-col>
          <v-col class="pics4 goup d-flex align-center justify-center" 
 cols="4">

<v-img eager   style="
    scale: 1;
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238979/Character_Mary_Skin_tone_Black_Posture_1_Happy_ephuz0.png"></v-img>
</v-col>
</v-row>
<!-- <v-img eager class="pics"  src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238980/Person_Chris_Skin_Tone_Black_Posture_17_Happy_Winking_jzw2vo.png"></v-img>
</v-col>
          <v-col class="d-flex align-center justify-center" 
 cols="4">

<v-img eager class="pics" style="
    
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238981/Person_Ed_Skin_Tone_Black_Posture_1_Happy_dfeklq.png"></v-img>
</v-col>
          <v-col class="godown d-flex align-center justify-center" 
 cols="4">

<v-img eager class="pics"  src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238979/Character_Mary_Skin_tone_White_Posture_27_Sh_e68nio.png"></v-img>
</v-col>
          <v-col class="d-flex align-center justify-center" 
 cols="3">

<v-img eager class="pics" style="
    
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238977/Character_Darlene_Skin_tone_White_Posture_9_Lovely_bkhiqo.png"></v-img>
</v-col>

<v-col class="py-4 justify-center d-flex centerIt" cols="6">
  <h1 class="herotitle2 text-center">
    Created by Ravers.
  </h1>
  
</v-col>
<v-col class="d-flex align-center justify-center" 
 cols="3">

<v-img eager class="pics" style="
    
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238977/Character_Angela_Skin_tone_Black_Posture_8_Star_Eye_c7g0od.png"></v-img>
</v-col>
<v-col class=" goup d-flex align-center justify-center" 
 cols="4">

<v-img eager class="pics" style="
    
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680247343/28_29_gfibxr.png"></v-img>
</v-col>
          <v-col class="d-flex align-center justify-center" 
 cols="4 ">

<v-img eager class="pics" style="
    
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680248707/Character_Ishanvi_Skin_tone_Black_Posture_26_Crossing_Finger_hdukf3.png"></v-img>
</v-col>
          <v-col class="goup d-flex align-center justify-center" 
 cols="4">

<v-img eager class="pics"  style="
    
" src="https://res.cloudinary.com/crushcontest-com/image/upload/v1680238979/Character_Mary_Skin_tone_Black_Posture_1_Happy_ephuz0.png"></v-img>
</v-col>
</v-row> -->
          </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="d-flex align-center justify-center" style="min-height: 800px;">

       <v-container :class="$vuetify.display.smAndDown? 'mt-0': 'mt-12'">
        <div class="centerIt" style="position:relative">
       
          <h1 class="herotitle mb-4 text-center">Quick Reads</h1>
         <div class=" px-2 justify-center align-center">
          <p class="mb-0 text-grey-lighten-1 text-center font-weight-light">
            Intresting articles about whatever we think is cool 😎
          </p>
      
        </div>  
       
        </div>
        <v-row class="d-flex pt-9">
          <v-col v-for="n in articles.slice(0, 2)" :key="n.name" class="pt-3 pb-3" :cols="cols[2]">

               <!-- skeleton loader -->
              <div v-if="isLoading" class=" tw-w-full  tw-rounded-3xl ">
                <div class="skeleton tw-min-h-[400px] tw-max-w-[650px] tw-rounded-3xl"></div>
                <div class="skeleton tw-h-[30px] my-4 tw-max-w-[500px] tw-mx-1  tw-rounded-lg"></div>
                <div class="skeleton tw-h-[30px] my-4 tw-max-w-[500px] tw-mx-1  tw-rounded-lg"></div>
               
             </div>

            <v-card v-else max-width="650px" :height="$vuetify.display.mdAndDown? 'auto': '540px'" :to="'/article/'+encodeURIComponent(n.name)"  class="rounded-xl mx-auto  pa-3">
              <v-img
                cover eager
                height="auto"
                max-height="400px"
                width="100%"
                max-width="650px"
                class="rounded-xl"
                :src="n.image"
              ></v-img>
              <h2 style="font-size: 40px " class="text-truncate font-weight-bold text-grey-lighten-2 logoText pt-1">
                {{n.name}}
              </h2>
           
              <p class="text-body-2 mt-2  text-grey-lighten-1 font-weight-medium">
               {{n.body.substring(0,140)}}...
              </p>
            </v-card>
          </v-col>
        </v-row>
        <div class="py-12 d-flex justify-center" >
          <!-- <v-btn to="/article" size="x-large" class="mx-auto text-capitalize font-weight-bold " rounded color="white">See more</v-btn> -->
        </div>
      
      </v-container>
      </div>
      
  <Footer />
    </v-card>
  </v-app>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';
// import { mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import {gsap, Back, Bounce, CSSPlugin } from 'gsap';

import {formatDate} from '@/composables/mixins'

export default {
 
 components:{
    VueCountdown
  },
  data: () => ({

    isLoading:false,
    timeline: '',
    media_parteners: [
    'https://res.cloudinary.com/payhospi/image/upload/v1701176151/7_1_w7tdfi.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1701176150/2_1_mir4xi.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1701176150/4_1_jnr0t9.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1701176150/3_1_eblymr.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1701176149/5_1_vuuany.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1701176147/6_1_yfx3ky.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1701176147/11_1_blukdp.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1701176146/8_1_fxpkt9.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1701176146/9_1_yafs60.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1701176146/10_1_eu5qlg.png'
    ],  
    memes:['https://res.cloudinary.com/payhospi/image/upload/v1700924470/shaggi_B_W_kais6g.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1700924458/pawpaw_axaa0c.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1700924460/sabi_B_W_usr7bx.png',
    'https://res.cloudinary.com/payhospi/image/upload/v1700924459/igreet_buorgn.png',
  'https://res.cloudinary.com/payhospi/image/upload/v1700924465/taaoma_vhehpx.png',
'https://res.cloudinary.com/payhospi/image/upload/v1700924461/brainjotter_sh3mua.png',
'https://res.cloudinary.com/payhospi/image/upload/v1700924460/layi_zqex8d.png',
'https://res.cloudinary.com/payhospi/image/upload/v1700924458/pawpaw2_m6opxi.png'],
    


    rules: {
      required: (value) => !!value || "Required.",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
    numberRules: [
      (v) => (v != null && v.length >= 11) || "Min 11 characters",
      (v) => !!v || "Phone number is required",
      (v) => v[0] === "0" || 'Phone number must start with "0"',
      (v) => /^[0-9]*$/.test(v) || "Number must be valid",
    ],
    name: "",
    text: null,
    phone: "",
    whatsapp: "",
    email: "",
    loading: false,
    isLoading:false,
    consent: false,
    dialog: false,
    booked: false,
    sign: "",
    eventsLists:null,
    mydate:null,
    signs: [
      {
        value: "Aries",
        title: "Aries (March 21 - April 19)",
      },
      {
        value: "Taurus",
        title: "Taurus (April 20 - May 20)",
      },
      {
        value: "Gemini",
        title: "Gemini (May 21 - June 20)",
      },
      {
        value: "Cancer",
        title: "Cancer (June 21 - July 22)",
      },
      {
        value: "Leo",
        title: "Leo (July 23 - August 22)",
      },
      {
        value: "Virgo",
        title: "Virgo (August 23 - September 22)",
      },
      {
        value: "Libra",
        title: "Libra (September 23 - October 22)",
      },
      {
        value: "Scorpio",
        title: "Scorpio (October 23 - November 21)",
      },
      {
        value: "Sagittarius",
        title: "Sagittarius (November 22 - December 21)",
      },
      {
        value: "Capricorn",
        title: "Capricorn (December 22 - January 19)",
      },
      {
        value: "Aquarius",
        title: "Aquarius (January 20 - February 18)",
      },
      {
        value: "Pisces",
        title: "Pisces (February 19 - March 20)",
      },
    ],
  }),

  computed: {
    screenWidth() {
        return this.$vuetify.display.width;
    },

    itemSize(){

      if (this.screenWidth >= 1264) {
      return 500; // Customize size names and breakpoints

      } else if (this.screenWidth >= 960) {
      return 500;

      } else {
      return 450;

      }

    } ,
    fetchedVideo(){
    return this.$store.state.myvideo.home_page_video_url
   } ,

    displ() {
      return this.$vuetify.display;
    },
    timediff2(){
      var startDate = new Date();
// Do your operations
var endDate   = new Date('2023-12-08');
var seconds = (endDate.getTime() - startDate.getTime()) ;
return seconds
    },
   
    articles () {
      return this.$store.state.myarticles.list
    },
    events () {
      return this.$store.state.myevents.list
    },

    items () {
      return this.$store.state.shop_items.list
    },

    eventsList () {
      return this.events.filter(event =>  !event.on_sale)
    },
    upcoming () {
      return this.events.filter(events =>  events.onSale)
    },
  
    cols() {
      const { xl, lg, sm, md } = this.$vuetify.display;
      return (lg || xl)
        ? [4, 12, 6, 4, 8, 4, 3]
        : md
        ? [4, 12, 12, 6, 8, 4, 3]
        : sm
        ? [6, 12, 12, 12, 12, 12, 12]
        : [6, 12, 12, 12, 12, 12, 12];
    },
  },
  created(){    
    gsap.registerPlugin(CSSPlugin);
},



  async mounted() {
   
    this.isLoading= true
    if(this.$store.state.myvideo.home_page_video_url){
       this.$store.state.myvideo.home_page_video_url
      
    }else{

      
      try{
            const data = await fetch(`https://backend.unboxedparty.com/api/general-settings`,{
                method:"Get",
                headers:{
                    'Content-Type': 'application/json',
                },
            }).then(res=>res.json())
  
          this.isLoading = false
          const payload =  data.settings
          this.$store.dispatch("setMyVideo", payload);
  
  
        }catch(e){
           console.log(e)
      }

    }


   
     try {
  const data = await fetch(`https://backend.unboxedparty.com/api/merch`,{
    method:"GET",
    headers:{
      'Content-Type': 'application/json',
          }

        }).then(res=>res.json());

        console.log(data)

        const payload =  [...data.items]
        payload.reverse(payload)
        this.$store.dispatch("setMyItems", payload);
        this.$store.dispatch("setMyItemsExpirationDate", addMinutes(30));

        this.isLoading = false

      } catch (error) {
        console.error(error);
      }

    try {
    const data = await fetch(`https://backend.unboxedparty.com/api/event`,{
      method:"GET",
      headers:{
        'Content-Type': 'application/json',
      }
    }).then(res=>res.json());


    const payload =  [...data.events]
    payload.reverse(payload)
    this.$store.dispatch("setMyEvents", payload);
    this.$store.dispatch("setMyEventsExpirationDate", addMinutes(30));

    this.isLoading = false
    } catch (error) {
    console.error(error);
    }

   


   

      try {
      const data = await fetch(`https://backend.unboxedparty.com/api/article`,{
        method:"GET",
        headers:{
          'Content-Type': 'application/json',
        }

      }).then(res=>res.json());

      const payload =  [...data.articles]
      this.$store.dispatch("setMyArticles", payload);
      this.$store.dispatch("setMyArticlesExpirationDate", addMinutes(30));

      this.isLoading = false

      } catch (error) {
      console.error(error);
      }
     

      if(this.events.length){
        this.eventsLists = this.events.filter(el=>{
          return el.on_sale == 1
        }).reverse()
     
       this.mydate = this.eventsLists[0].date
    
      }

   
   
    setTimeout(() => {
      this.dialog = true;

    }, 10000);

  },

  methods: {
    openEvent(e){
        e.active? this.$router.push('/ticket/'+encodeURIComponent(e.name)): alert('Coming Soon!!!')
      },
    timediff(x){
        var startDate = new Date();
  // Do your operations
  var endDate   = new Date(x)
  var seconds = (endDate.getTime() - startDate.getTime()) ;
  return seconds
      },

    animImg(){
      setTimeout(() => {
      this.animImg2()

    }, 2000);
    },
    animImg2(){
      // alert(9)
  const img1 =  document.querySelector('.pics1')
  const img2 =  document.querySelector('.pics2')
  const img3 =  document.querySelector('.pics3')
  const img4 =  document.querySelector('.pics4')
  const img5 =  document.querySelector('.pics5')
  const img6 =  document.querySelector('.pics6')
  const img7 =  document.querySelector('.pics7')
  const img8 =  document.querySelector('.pics8')
var imgslist = [img1,img2,img3,img4,img5,img6,img7,img8]
gsap.to(imgslist,
  {
      scale: 1.2,
      rotate: '4deg',
      stagger:{
        each: 0.6,
        repeat: -1,
        delay:-0.2,
        yoyo: true,
        from: 'start'
      },
      // ease: Bounce.easeOut,
    })

  },
    async submit() {
      this.booked = true;

      var bol = await this.$refs.form.validate();
      if (bol.valid) {
        this.loading = true;
        var dat = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          whatsapp: this.whatsapp,
          // sign: this.sign,
        };
        console.log(dat);
        fetch("https://backend.unboxedparty.com/api/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
          },
          body: JSON.stringify(dat),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Something went wrong");
          })
          .then((res) => {
            this.booked = true;
            this.loading = false;
            this.dialog = true;
          })
          .catch(() => {
            this.dialog = true;
            this.loading = false;
          });
      }
    },
  },
};
</script>
<style>
.mdpert {
    filter: opacity(0.6);
}
.rotimg {
    animation: rotate 60s linear infinite;
    }
    
    @keyframes rotate {
      0% {
          transform: rotate(0deg);
      }
      50% {
          transform: rotate(360deg);
      }
      100% {
          transform: rotate(0deg);
      }
    }
.photobanner0 {
  position:absolute; 
  top:0px; 
  left:0px; 
  overflow:hidden; 
  white-space: nowrap;
  animation: bannermove 30s linear infinite;
}
.photobanner1 {
  position:absolute; 
  top:0px; 
  right:0px; 
  overflow:hidden; 
  white-space: nowrap;
  animation: bannermove1 30s linear infinite;
}
@keyframes bannermove1 {
  0% {
      transform: translate(0, 0);
  }
  100% {
      transform: translate(50%, 0);
  }
}
@keyframes bannermove {
  0% {
      transform: translate(0, 0);
  }
  100% {
      transform: translate(-50%, 0);
  }
}
.shadow img.v-img__img.v-img__img--contain{
z-index: 99!important;
}
.shadow:before,
.shadow:after {
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  border-radius: 2px;
  content: "";
  top: 0;
  position: absolute;
  width: calc(100%);
  height: calc(100%);
  background: linear-gradient(
    45deg,
    #e8612e,
    #3098e5,
    #79d21c,
    #f5c231,
    #ff0000,
    #e8612e,
    #3098e5,
    #79d21c,
    #f5c231,
    #ff0000
  );
  background-size: 400%;
  z-index: -1;
  animation: animate 20s linear infinite;
  /* visibility: hidden !important; */
}
@keyframes animate {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 300% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.shadow:after {
  filter: blur(20px);
}

* {
  font-family: "Permanent Marker", cursive !important;
}
.bgh{
  position: absolute;
            z-index: -1;
            opacity: 0.2;
            height: 100%;
            display: flex;
            width: 100%;
            justify-content: center;
}
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;1,200&display=swap");

.godown{
  position:relative;top: 40px;
}
.goup{
  position:relative;bottom: 40px;
}
.scehimg{
  position:absolute;
  right:0;
  top:-50px;
  transform: rotate3d(-2, 39, 0, 180deg);

}
.shadow:before,
.shadow:after {
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  border-radius: 2px;
  content: "";
  position: absolute;
  width: calc(100%);
  height: calc(100%);
  background: linear-gradient(
    45deg,
    #e8612e,
    #3098e5,
    #79d21c,
    #f5c231,
    #ff0000,
    #e8612e,
    #3098e5,
    #79d21c,
    #f5c231,
    #ff0000
    );
    background-size: 400%;
    z-index: -1;
    animation: animate 20s linear infinite;
    /* visibility:hidden !important; */
  }

@keyframes animate {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 300% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.shadow:after {
  filter: blur(20px);
}
.herotitle2 {
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  display: flex;
  align-items: center;
}
.herotitle {
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  
  align-items: center;

  background: radial-gradient(
        102.82% 2444.7% at 95.38% 100.02%,
        #a84efa 0%,
        rgba(255, 255, 255, 0) 32.73%,
        rgba(135, 135, 135, 0.506798) 81.48%,
        #131313 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
}
.herotitleb {
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  
  align-items: center;

  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
}
.numberstyle {
  font-weight: 700;
  font-size: 38px;
  line-height: 60px;
  align-items: center;

  /* gradient p */

  background: linear-gradient(132.03deg, #c471ed 14.22%, #a044ff 97.95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.numberstyle2 {
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;

  /* gradient p */

  background: linear-gradient(132.03deg, #c471ed 14.22%, #a044ff 97.95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.text2 {
  font-size: 16px;
}
* {
  font-family: "Plus Jakarta Sans", sans-serif !important;
}

@media only screen and (max-width: 768px) {
  .scehimg{
  position:relative;
  /* right:0; */
  top:0px;
  transform: rotate3d(-2, 39, 0, 180deg);

}
  .herotitle {
    font-size: 40px !important;
    line-height: 55px !important;
    text-align: center;
  }
  .bigtext {
    font-size: 40px !important;
    line-height: 50px !important;
    text-align: center;
  }
  .herotitleb {
    font-size: 40px !important;
    line-height: 55px !important;
    text-align: center;
  }
  .text2 {
    font-size: 13px;
    line-height: 16px !important;
    text-align: center;
  }
  .logoText {
    font-size: 23px !important;
    line-height: 46px !important;
  }
  .herotitle2 {
    font-size: 40px;
    line-height: 50px;
    text-align: center;
  }
  .cnter{
    justify-content:center
  }
  .centerIt {
    text-align: center !important;
  }
  .numberstyle {
    font-weight: 700;
    line-height: 46px;
    font-size: 28px;
  }

 

   .w {
  animation: wav 2s ease-in-out infinite;
  }  
 


  @keyframes wav {
    0% {
    background-position: -100px 0;
  }
  50% {
    background-position: 50px 0;
  }
  100% {
    background-position: -100px 0;
  }

}

}

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 10%);
  }
  100% {
    background-color: hsl(200, 20%, 8%);
  }
}
</style>
