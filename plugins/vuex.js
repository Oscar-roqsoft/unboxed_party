import { createStore } from "vuex";
// import { store } from ".";

// import { version } from "../package.json";


 const state = () => ({
  //  image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_600/v1683359349/Screenshot_2023-05-06_at_8.48.45_AM_wfh3xb.png',
    myevents:[],
    myarticles:[],
    mycategory:[],
    myitems:[],
    myvideo:[],

    events: [
      
      {name: 'Meme Edition 2', 
      image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1700458125/Unboxed_Party_Meme_Party_2_usm8ub.jpg',
      created_at: '8th Dec. 2023',
      onSale: true,
      active:true,
      video:false,
      venue: 'UNN, Nsukka',
      paid: true,
      id: 8,
      deadline: '2023-12-08',
      time:'07:00PM',
      amount: 2000,
      caption:'Countdown',
      description: "Coming soon",
      },
      {name: 'Neon Fest - Glow in the Dark', 
      image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1699725435/Unboxed_Party_Neon_Fest_u6khvp.jpg',
      created_at: '24th Nov. 2023',
      // onSale: true,
      // active:true,
        video:false,
        venue: 'Umuahia',
        paid: true,
        id: 7,
        deadline: '2023-11-24',
        time:'08:00PM',
        amount: 1000,
        caption:'Countdown',
        description: "Coming soon",
      },
          {name: 'Halloween', 
      image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1698141997/Unboxed_Halloween_Party_lnmm69.jpg',
      created_at: '5th Nov. 2023',
      // onSale: true,
      // active:true,
        video:false,
        venue: 'Awka',
        paid: true,
        id: 6,
        deadline: '2023-11-06',
        time:'08:00PM',
        amount: 2000,
        caption:'Countdown',
        description: "Coming soon",
      },
      // {name: 'All White Affair - 200k Table', 
      // image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1692897396/Unboxed_AWA_Location_aoziz4.jpg',
      // created_at: '21st Sept. 2023',
      // // onSale: true,
      // // active:true,
      // video:false,
      // venue: 'Awka',
      // paid: true,
      // id: 7,
      // deadline: '2023-09-21',
      // time:'08:00PM',
      // amount: 200000,
      // caption:'Countdown',
      // description: "Coming soon",
      // },
      // {name: 'All White Affair - 100k Table', 
      // image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1692897396/Unboxed_AWA_Location_aoziz4.jpg',
      // created_at: '21st Sept. 2023',
      // // onSale: true,
      // // active:true,
      //   video:false,
      //   venue: 'Awka',
      //   paid: true,
      //   id: 6,
      //   deadline: '2023-09-21',
      //   time:'08:00PM',
      //   amount: 100000,
      //   caption:'Countdown',
      //   description: "Coming soon",
      // },
      {name: 'All White Affair', 
      image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1692897396/Unboxed_AWA_Location_aoziz4.jpg',
      created_at: '21st Sept. 2023',
      // onSale: true,
      // active:true,
        video:false,
        venue: 'Awka',
        paid: false,
        id: 5,
        deadline: '2023-09-21',
        time:'08:00PM',
        amount: 2000,
        caption:'Countdown',
        description: "Coming soon",
      }, 
      {name: 'Denim/Jean Carnival', 
      image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1685509866/Unboxed_Denim___Jean_Carnival_ico2na.jpg',
      created_at: '24th Jun. 2023',
      // onSale: true,
      // active:true,
        video:false,
        venue: 'Oye, Ekiti',
        paid: false,
        id: 4,
        deadline: '2023-06-24',
        time:'06:00PM',
        amount: 0,
        caption:'Countdown',
        description: "Coming soon",
      },

      {name: 'Hollywood High School', 
      image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1685184764/Hollywood_Highschool_2_wthdcx.jpg',
      created_at: '17th Jun. 2023',
      video:false,
      venue: 'UNN, Nsukka',
      paid: false,
      deadline: '2023-06-17',
      id:3,
      time:'06:00PM',
      amount: 0,
      caption:'Countdown',
      description: "Coming soon",
    },  

    {name: 'Pyjamas/Night Wear',
    image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_600/v1684047128/Unboxed_Pyjamas_Nightwear_rpp7ty.jpg',
    created_at: '25th May. 2023',
    video: 'https://www.youtube.com/embed/tgy9JKMRI74',    
    max:100,
    amount: 2000,
    deadline: '2023-05-25',
    venue: 'Reboot',
      caption:'Countdown',
      description: "Coming soon",
     },

      {name: 'Royal Ball/Prom',
      image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1681315633/Unboxed_Royal_Ball_Prom_s4wxxm.jpg',
      created_at: '16th Mar. 2023',
      video:'https://www.youtube.com/embed/IyQooW90034',
          venue: 'Reboot',
      description: "Coming soon",
     },


       {
        name: 'Arabian Fest',

       video:'https://www.youtube.com/embed/TGD7ZOyLaC0',
       
       image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1677835749/ARABIAN_FEST_ux58sh.jpg',
       created_at: '10th Dec. 2022',
       venue: 'Reboot',
       description: `🎉🌴🎵🎨 THE UNBOXED ARABIAN FEST 🎨🎵🌴🎉

         After a short break and the elections, the Unboxed Party came back bigger with another themed party - not your regular kind of themed party! We all watch Arabian fests on TVs and social media, and we've never experienced that feeling at least here in Awka. Thus, the organizers of Unboxed decided to bring that feeling here for their audience to engage and have fun!
         
         The Arabian Fest was a one-of-a-kind event that was designed to bring the vibrant culture of the Middle East to life. From the moment guests arrived, they were immersed in an atmosphere of magic, mystery, and exotic beauty. The Unboxed Party team had gone to great lengths to create an event that would transport guests to a different world, and they succeeded beyond all expectations. ✨👑🌟
         
         The event was held in the Reboot Lounge, which had been transformed into an Arabian-themed wonderland. The environment was adorned with ornate Arabic calligraphy, and the floor was covered with white sand that added a sense of the desert and middle eastern comfort to the space. The lighting was low and atmospheric, with dozens of flickering candles casting a warm glow over the entire area. 🔮🕌🕯️
         
         One of the highlights of the event was the songs! The Unboxed Party team had put together an incredible playlist of traditional Arabian songs from across the Middle East. 🎶🎤🌍
         
         Throughout the evening, guests could take part in a range of Arabian-themed activities. There was henna tattooing, where guests could have intricate designs painted on their skin in traditional henna paste. 🖌️👩‍🎨💅
         
         Overall, the Arabian Fest was a huge success! The Unboxed Party team had created an unforgettable event that brought the magic of the Middle East to life. The attention to detail was incredible, with every aspect of the event carefully considered and executed to perfection. Guests left the event feeling as though they had truly experienced something special, and many commented that it was the best event they had ever attended. 👏👏👏
         
         In conclusion, the Arabian Fest was a celebration of Arabian culture and tradition, and the Unboxed Party team had done an incredible job of bringing that culture to life. From the music to the entertainment to the activities, every aspect of the event was carefully designed to transport guests to a different world. It was a true testament to the creativity and innovation of the Unboxed Party team, and the crowd was left with memories that will last a lifetime. 🤩💖🎉
         Despite the situation of the country Unboxed still came out to put smiles on people's faces to let them come out and relieve stress which would help them forget about the country's needs and the cash problem at hand. They took the crowd to another reality to party and enjoy themselves... 
         No be today we go solve everything, one thing at a time and yes, we can't forget the importance of looking after our mental health in times like this...
         So kudos, to this Unboxed team for creating an unforgettable and memorable experience`,
        },
        
        {name: 'Rep Your Zodiac',
        image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1680267199/Unboxed_Rep_your_Zodiac_Sign_1_vfbylt.jpg',
        created_at: '26th Jan. 2023',
        venue: 'Reboot',
        video:'https://www.youtube.com/embed/uMFmKtbyrVE',
        description: `THE UNBOXED Celestial Zodiac Party 🥳✨♈
        REP YOUR ZODIAC SIGN
        
        You wouldn't have seen this one coming, the brand always comes up with idea that you won't be able to guess, predict or see coming, it's always about being unique; bigger than just coming for the drinks and parties, it always gives you something to look up to and want to participate in.
        And there's this sense of joy in the crowd where you know you're expecting something and your expectation is met. That's why the unboxed concept was created.
        The unboxed party, rep your zodiac sign was a different wave and kind of fun. A celebrity guest artist (Iyanya) was invited to spice things up, and he brought mad fun and jams to the party. Everyone came to rep their zodiac signs.
        People believe in astrology and also feel it comes to pass, and the sense of rivalry or the actual feeling that your zodiac is the best, the Unboxed decided to fuel the spirit, come rock it out in a party and let's see the zodiac which does it best. Don't stay on your keyboards fighting or arguing, come prove it and have fun while doing it as well 😈. 
        
        On a beautiful thursday evening; one thing about the unboxed is that they show and prove to you that every day is a party day nothing like parties are only meant for the weekend, the unboxed beats that misconception.
        So on a beautiful thursday like any other, the city of awka witnessed a unique and exciting party. The Unboxed Party,  invited people from all walks of life to come and celebrate their zodiac signs. This party was unlike any other, as it combined music, dance, and astrology to create a celestial celebration of life.
        
        As guests arrived at the venue, they were greeted by a beautiful display of zodiac signs. The decorations were carefully curated to represent each sign, with vibrant colors and intricate designs that captured the essence of each zodiac. From the fiery Aries to the creative Pisces, every sign was represented in a unique and beautiful way 😎
        
        As the party kicked off, guests were invited to participate in a photo booth where guests could take pictures with their zodiac sign. The atmosphere was electric, with everyone excited to learn more about themselves and their fellow party-goers.
        
        The music was another highlight of the party. You know there was a notable celebrity to spice things up, and people anticipated him, as they waited for him the Dj's and the hypemen did well to entertain the party animals. They kept the crowd on fire, the dj provided the perfect soundtrack for the evening. He mixed popular hits with astrological themes, creating a unique and unforgettable experience. The dance floor was packed all night, with guests grooving to the beat and showing off their zodiac-inspired moves.
        
        But the true highlight of the evening was the celebrity guest, who surprised everyone by showing up and joining in on the fun. Iyanya was the life of the party. He came dressed in a zodiac-inspired outfit, complete with a sequined jacket and leather trouser. He danced, sang, and entertained the crowd to another level.
        He sang his popular songs and club bangers and the crowd sang along. It wasn't a moody or a dull crowd, everyone was hyped up and wanting to represent their zodiac and they were doing well no group wanted to lose.
        Overall, the Unboxed Party was a massive success. It brought together people from all over the city, united by their love for astrology and good music. The organizers, who had previously organized successful unboxed editions and events in the city, outdid themselves with this one. They created a unique and unforgettable experience that was the talk of the town 💯.
        In conclusion, the Unboxed Party was a true celebration of life and the zodiac signs. It brought together people from all walks of life, united by their love for astrology and good music. The celebrity guest added an extra spark to the evening, making it even more special. The organizers deserve all the credit for pulling off such a fantastic event.`,
       }, 
          
       {name: 'Meme Edition',
       image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1680267207/Unboxed_Party_Meme_Edition_wwhaxu.jpg',
       created_at: '24th Nov. 2022',
       venue: 'Milas Turf',
       video:'https://youtube.com/embed/io7A5nbQqoQ',

       description: `🤣🤪 The Unboxed Party's  2 was an absolute blast! After the success of their Halloween party, the brand decided to set another high standard for their next event. And they did not disappoint!

       Attendees were asked to come dressed as their favorite memes, and the creativity was 💯. From their favourite comedian (Sabinus) meme, to caramel plug look, everyone came ready to have a good time and take some hilarious pictures 📸.
       One thing about the unboxed is that the theme and costume for the event is always top notch, people actually take their time to prepare to have fun cause they know this isn't their regular every day party and they so much want to participate in the event.
       
       The decorations were also on point, with meme-inspired decorations. The overall vibe was fun and lighthearted, with attendees laughing and joking around all night long 🤣.
       
       The hypeman was a huge part of the fun, encouraging attendees to participate in meme-themed dance-offs and challenges 🔥🕺. He even dressed up as a meme himself.
       It was all so hilarious and enjoyable.
       
       You just couldn't be dull and sad, just like our conversations aren't sweet or seem to be lacking without the emojis and stickers that makes you laugh and giggle while chatting, you get to see all those memes and stickers in person, and you're wowed cause people are actually doing well with this.
       You smile and want to snap with anyone that's dressed as your favourite meme, make connections, network and vibe.
       For every unboxed they're different Dj's and hypemen to fill the stage so there can't possibly be a dull moment.
       You dance till you can't anymore.
       The music was also top-notch, with DJs playing top notch songs and current meme-themed songs that kept the crowd energized and dancing all night long, it was a playlist that was impossible not to enjoy 🎶.
       
       One of the most fun aspects of the party was seeing everyone's creative costumes and ideas. It was great to see everyone come together and celebrate the power of memes and humour.
       
       Overall, The Unboxed Party's  2 was a night to remember 🎉🤪. It was a celebration of all things silly and fun, and a testament to the brand's ability to create unique and entertaining events. The attendees had a great time, and the brand certainly set a high standard for themselves going forward, any time you think they can't surprise you no more, they do, they raise the standards up again, the meme party being the 3rd edition brought more engagement into the platforms and more crowd to the event, it shows how fast and rapid it is growing and people wanted to come and see what the unboxed concept is all about. The community is definitely growing and getting better, the unboxed decided to change their venue to accommodate a larger audience, thus spreading it's wings to grow to the next level.
       One thing about the unboxed is that after every party, they reach out to the audience to be criticized and know where they failed to entertain, though it's always had positive reviews and few criticism, they always asked the audience what they want and how they want it. Then the unboxed delivers their desire and needs to them.
       After the meme party, you would see the eagerness some showed, some even went to meet the hypeman to ask when another unboxed would be held, something that started small was already growing so fast and has now come to stay and will soon be established as an entertainment institution in the South East.`,
      },

       {name: 'Halloween Edition',
       image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1680267202/Unboxed_Halloween_Edition_lp7q17.jpg',
       created_at: '31st Oct. 2022',
       venue: 'Milas Turf',
       video:'https://www.youtube.com/embed/ScjaFtCao8k',
       description: `🎃🎉👻 The Unboxed Party's Halloween Edition was 🔥🔥🔥! It was the second edition of the party, and it did not disappoint. From the moment attendees arrived, they were transported to a world of Halloween magic 🌟🎃👻.

       The decorations were 💯, with pumpkins 🎃, cobwebs 🕸️, and eerie lighting 🕯️ creating the perfect atmosphere for the occasion. The costumes were also 💯, with attendees coming dressed in a variety of spooky and creative outfits 👻🧟‍♀️🧙‍♀️. There was even a costume competition, with a 💰 cash prize for the winner. The competition was 🔥🔥🔥, and the creativity of the costumes was truly impressive.
       And you know when you set a costume event people mostly don't obey, they ignore the rules but this was different, people prepared for it and dressed well,from the favourite villain (the joker), to vampire looks and many others it was madt..
       The musical experience at The Unboxed Party was another highlight of the event 🎶🎵. The brand is known for its commitment to providing top-notch entertainment, and the Halloween party was no exception. The DJs kept the crowd dancing 💃🕺 all night long, playing a mix of old and new Halloween-themed tracks that kept the energy high.
       
       The hypeman at the event was also a standout, keeping the crowd engaged and hyped up throughout the entire night 🔥👏. He interacted with the attendees, getting them to participate in games and dance-offs, adding to the overall fun and excitement of the event.
       
       The love and enthusiasm shown by the attendees were 😍. The joy and experience people had at The Unboxed Party were evident from the huge smiles on their faces and the excitement in their voices. It was a testament to the brand's ability to create an atmosphere that fosters genuine connection and fun.
       
       Overall, The Unboxed Party's Halloween Party was a night to remember 🎉👻🔥. The experience was mad, the costumes were crazy, and the musical experience was unforgettable 🙌🎶. It was an incredible celebration of Halloween 🎃, and a great example of what The Unboxed Party can do...
       This particular party was the first of it's kind in the city and it sent waves and trended on the internet and social media platforms, an event that kept people taking days after it happened, people were now more eager and anticipated for the next unboxed, it so happened that the city of Abuja called requesting for their unboxed cause they wanted to feel the thrill too, they wanted the kind of vibe and uniqueness the unboxed gave and their eagerness was of course rewarded with them getting their very own unboxed party 😋🌚.`
      },

       {name: 'TTOTY',
       image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1680267199/Unboxed_Party_TTOTY_flndxs.jpg',
       created_at: '20th Dec. 2022',
       video:'https://www.youtube.com/embed/C1n7r0hA5Yw',
       venue: 'Milas Turf',
       description: `The Unboxed Party: A Christmas Extravaganza 🎁🎄🎅

       It's that time of the year again! The holiday season is upon us, and everyone is in the festive mood. From the twinkling lights on the streets to the aroma of fresh baked cakes and delicious cuisines in the air, there's something magical about December.
       
       For the organizers of the Unboxed Party, this was a chance to create a unique experience for party-goers. The Unboxed Party is a monthly event that has been going strong since it kick-started in 2022. The first edition, "What's in the Box," was a massive success, and it set the bar high for subsequent editions. The second edition, "Halloween" was equally impressive, and the third edition, "Meme" was a unique experience.
       
       This current edition, however, was different. The organizers decided to theme it around Christmas, and they called it the "that time of the year". There were mixed reactions to this decision, with some people excited about the prospect of a Christmas-themed party, while others were skeptical. Nevertheless, the organizers were determined to make it a memorable experience for everyone.
       
       As the day of the party drew closer, the excitement in the air was palpable. Social media was buzzing with anticipation, with people sharing pictures of their Christmas outfits and discussing what to expect at the Unboxed Party. The organizers had kept the details of the party under wraps, adding to the mystery and anticipation.
       
       Finally, the day arrived, and the venue was transformed into a merry wonderland. The entrance was decorated with twinkling lights, and nice Christmas themed decorations adorned the whole place. The DJ was playing nice jams, and there was a sense of warmth and joy in the air. The party-goers were greeted with more fun which added to the festive atmosphere.
       
       As the night went on, it became clear that the organizers had gone all out for this. There was even a special appearance from Santa Claus himself, who gave out presents to the party-goers.
       
       The highlight of the night, however, was the unboxing activity. As with previous editions, the Unboxed Party was all about the surprise element. It was a fun and interactive way to get everyone involved in the party, and it added to the sense of community and togetherness, creativity and hard work.
       While there were criticisms, it's important to remember that the Unboxed Party is all about having fun and creating lasting memories. The Christmas Effect did just that, and it's a testament to the power of creativity and community.
       
       As dawn drew close, party-goers left with smiles on their faces and memories that would last a lifetime. The Christmas Effect had set a new standard for the Unboxed Party, and it would be interesting to see what the organizers would come up with for the next edition.
       
       In conclusion, the Unboxed Party's Christmas Effect was a resounding success. It brought people together, created a sense of joy and happiness, and provided a much-needed escape from the challenges of everyday life. It was a reminder that, despite the difficulties we face, there is still room for fun, creativity, and community. The Unboxed Party once again set a double standard for the party scene, and by the looks and expression at the end of the party, people couldn't wait to see what they have in store for them next. 🎉🥳🤩`,
      },
       {name: 'Unboxed Party 1st Edition',
       image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1680267204/Unboxed_hdq7f6.jpg',
       created_at: '22nd Sept. 2022',
       venue: "Mr Smith's Rooftop",
       video:'https://www.youtube.com/embed/TKXjrizWnqE',
       photos:[],
       description:`The Unboxed Party: What's Really in the Box? 📦

       The first edition of the Unboxed Party was organized by Kopykat Dreams. Because of insecurity, we were not sure there would be a turn-up, regardless of the fact that there were no VIPs or special celebrity treatments. It was just a chance for everyone to enjoy themselves and experience a different kind of party 😉. There were no popular celebrities invited, just a team of DJs and hypemen to host the show.
       
       On the day of the event, people were pleasantly surprised. The atmosphere was lively, with games 🎮 and fun activities before the party even started. The party animals in attendance were already making new friends and vibing to the music. When it was time to go inside, the venue sadly couldn't contain the crowd that turned up. The Unboxed Party was not your regular kind of party where you sit down and get bored. Everyone was on their feet and dancing throughout the night. 💃🕺
       
       The DJs had an incredible playlist that kept everyone moving, and the 
       hypemen rallied the crowd. Unlike many parties that lose steam halfway through the night, the intensity grew as the night progressed. Even those who couldn't dance were forced to move their bodies. 💥
       The drinks served were affordable and enjoyable, and people bonded over their shared love of the party. It was a great experience for non-party goers too, especially since it was the first of its kind. It was a safe haven where people of all backgrounds could come together and set aside class differences to have a good time.
       After the party, people couldn't stop praising the Unboxed Party. Many said it was the best party they had ever been to, and they couldn't wait to experience it again. 👏
       
       This is just the beginning of something great. The Unboxed Party is going to be a monthly affair and will wax stronger with time. The Unboxed Party team promises to serve a more superb experience edition after edition, with more games, fun activities, and exciting surprises. It's going to be the party everyone in Awka and South East looks forward to every month.`,
      },
    ],

    cartItems:[],

    event: {},

    user: {},

    items: [
      {
        category:'T-Shirts',
        name: 'T-Shirts',
        id: '1',
        price: 10000,
        options: [
          {
            colors: ['White',  'Pink',  'Brown', 'Dark green'],
            images: [
              'white_tee_1_cmav9b',
              'pink_tee_wxk1ji',
              'nude_tee_msmolc',
              'green_tee_rxt0r3'
            ],
            sizes: ['M', 'L', 'XL', 'XXL']
          }
        ]
      },
      {
        category:'Shorts',
        name: 'Shorts',
        id: '2',
        price: 8000,
        options: [
          {
            colors: ['Dark green', 'Brown', 'Black', 'Grey'],
            images: [
              'green_shorts_eynkmi',
              'brown_shorts_ny3pg4',
              'BLACK_SHORT_qfoivh'
            ],
            sizes: ['M', 'L', 'XL', 'XXL']
          }
        ]
      },
      {
        category:'Hoodies',
        name: 'Hoodies',
        id: '3',
        price: 15000,
        options: [
          {
            colors: ['Brown', 'Nude', 'Black', 'Pink', 'Dark green', 'Grey'],
            images: [
              'brown_hoodie_1_xpdegk',
              'nude_hoodie_1_qhkeuf',
              'black_crop_hoodie_x3qcoc',
              'pink_crop_hoodie_ecvpwt'
            ],
            sizes: ['M', 'L', 'XL', 'XXL']
          }
        ]
      },
      {
        category:'T-Shirts',
        name: 'Armless Shirts',
        id: '4',
        price: 8000,
        options: [
          {
            colors: ['White', 'Black', 'Army green', 'Nude'],
            images: [
              'white_armless_msu5ix',
              'black_armless_pxfanl',
              'army_green_armless_mfzdnp',
              'nude_armless_p5svtm'
            ],
            sizes: ['M', 'L', 'XL', 'XXL']
          }
        ]
      },
      {
        category:'T-Shirts',
        name: 'Crop Tops',
        id: '5',
        price: 8000,
        options: [
          {
            colors: ['Black', 'Pink', 'White'],
            images: [
              'black_crop_top_difdtj',
              'pink_crop_top_cvis2l',
              'white_crop_top_liywds'
            ],
            sizes: ['M', 'L', 'XL', 'XXL']
          }
        ]
      },
      
      {
        category:'Trousers',
        name: 'Cargo Pants',
        id: '6',
        price: 15000,
        options: [
          {
            colors: ['Black','Light brown'],
            images: [
              'blck_cargo_pants_knnbev',
              'nude_cargo_pants_ep1ijf'
            ],
            sizes: ['M', 'L', 'XL', 'XXL']
          }
        ]
      },

      {
        category:'Hoodies',
        name: 'Crop Hoodies',
        id: '7',
        price: 12000,
        options: [
          {
            colors: ['Pink', 'Black'],
            images: [
              'pink_crop_hoodie_ecvpwt',
              'black_crop_hoodie_x3qcoc'
            ],
            sizes: ['M', 'L', 'XL', 'XXL']
          }
        ]
      },
      {
        category:'Vest',
        name: 'Cargo Vest',
        id: '8',
        price: 15000,
        options: [
          {
            colors: ['Black', 'Brown'],
            images: [
              'black_cargo_jacket_f9e3mh',
              'nude_cargo_jacket_dqb0ax'
            ],
            sizes: ['M', 'L', 'XL', 'XXL']
          }
        ]
      },
      {
        category:'Joggers',
        name: 'Joggers',
        id: '9',
        price: 10000,
        options: [
          {
            colors: ['Black','Army green',  'Light brown'],
            images: [
              'black_joggers_vcpbwm',
              'green_joggers_harkhs',
              'nude_joggers_kq9gad'
            ],
            sizes: ['M', 'L', 'XL', 'XXL']
          }
        ]
      },

      {
        category:'T-Shirt',
        name: 'Long Sleeved Shirt',
        id: '10',
        price: 10000,
        options: [
          {
            colors: [ 'Red','Black',],
            images: [
              'red_long_sl_mecfkj',
              'black_long_sleeves_t8b9nc'
            ],
            sizes: ['M', 'L', 'XL', 'XXL']
          }
        ]
      }
    ],
   
    users: [],
    tickets: [],
    students: [],
    article: {},

    articles: [
      {
        name: `11 ways to know you're a true Gen z`,
        image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1683467740/11_ways_to_know_you_re_a_true_Gen_Z_uvig6l.jpg',
        body: `

        **  You are obsessed with social media: You.         spend hours scrolling through Instagram,       TikTok, and other social media platforms.         You are always on the lookout for the.               latest trends and memes.
        <br>
        <br>
        • You have a short attention span: You get bored quickly and cannot handle long hours of events or classes, except when there is free food and drinks or when your favorite artist is performing.
        
        <br>
        <br>
        • You are always on the go: You love to travel and explore new places. You believe that life is too short to stay in one place for too long.
        
        <br>
        <br>
        
        • You are politically engaged: You are passionate about social justice and believe in using your voice to effect change. You love to attend protests and rallies and stay informed about current events.
        
        <br>
        <br>
        • You love to binge-watch: You can spend an entire weekend binge-watching your favorite shows on Netflix or Hulu. You believe that there's nothing wrong with indulging in some guilty pleasure TV.
        
        <br>
        <br>
        • You are obsessed with food: You love trying new foods and taking pictures of your meals to post on Instagram. You also enjoy cooking and experimenting with new recipes.
        
        <br>
        <br>
        • You love to express yourself through fashion: You have a unique sense of style and enjoy experimenting with different trends. You love to express your individuality through your clothing and accessories.
        
        <br>
        <br>
        • You have a side hustle: You are always looking for ways to make extra money and have a side hustle or two. You love the idea of being your own boss and making your own rules.
        
        <br>
        <br>
        • You love to dance: You have a passion for dancing and love to attend parties and clubs where you can show off your moves. You believe that dancing is a great way to relieve stress and have fun.
        <br>
        <br>
        
        • You are always looking for new experiences: You believe that life is meant to be lived to the fullest and are always on the lookout for new experiences and adventures. You love to try new things and step out of your comfort zone.
        <br>
        <br>
        
        • You have a strong sense of self: You know who you are and what you stand for. You believe in being true to yourself and living life on your own terms.
        
        <br>
        <br>
        
        
        Wahala for who no b gen z `,
        author: 'Current'
      },
      {
        name:'10 Things All Gen Z Should Look Out For During UNBOXED PARTY',
        image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1684055277/10_Things_All_Gen_Z_Should_Look_Out_For_During_UNBOXED_PARTY_fq8bzv.jpg',
        author: 'Current',
        body:'Coming Soon...'
      },

      {
        name:'Re-Live top moments from UNBOXED PARTIES So Far',
        image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1684055244/Re-live_Top_Moments_from_UNBOXED_PARTIES_SO_FAR_fzyhpi.jpg',
        author: 'Current',
        body:'Coming Soon...'
      },
    ],

    ticket_no: {},
    student_no: 0,
  })
  
   const getters = {
    getCategories(state){
      return state.items.category
    },

    getEvents(state) {
      return state.events
    },
    getMyEvents(state) {
      return state.myevents
    },

    getItems(state) {
      return state.items
    },
    getMyItems(state) {
      return state.myitems
    },

    getEvent(state){
        return state.event
    },
    getArticles(state) {
      return state.articles
    },
    getMyArticles(state) {
      return state.myarticles
    },
    getArticle(state){
        return state.article
    },
    getUser(state){
        return state.user
    },
    getTickets(state){
        return state.tickets
    },
    getStudents(state){
        return state.students
    },
    getUsers(state){
        return state.users
    },
    getStudentNo(state){
        return state.student_no
    },
    getTicket_no(state){
        return state.ticket_no
    },
  }
  
   const mutations = {
    INIT_STORE (state){
      const lState = localStorage.getItem('unboxed_party');
    
      if (lState) {
        // load the cached state if versions match
        const cachedState = JSON.parse(lState);
    
        if (cachedState.version == version) {
          store.replaceState(
            //replace app's store state with the cached version
            Object.assign(store.state, cachedState)
          );
        } else {
          //update store version to current version
          state.version = version;
        }
      } else {
        //update store version to current version
        state.version = version;
      }
      // setTheme(state);
    },



    setArticles(state, {article}) {
      state.articles = article
    },

    SET_MY_ARTICLES(state, payload) {
      state.myarticles = payload
    },

    SET_MY_CATEGORY(state, payload) {
      state.mycategory = payload
    },

    SET_MY_Video(state, payload) {
      state.myvideo = payload
    },

    setArticle(state, {article}) {
      state.article = article
    },

    SET_MY_EVENTS(state, payload) {
      state.myevents = payload
    },

    SET_MY_ITEMS(state, payload) {
      state.myitems = payload
    },
  
    setEvents(state, {event}) {
      state.events = event
    },

    setEvent(state, event) {
      state.event = event
    },
    setStudentNo(state, data) {
      state.student_no = data
    },
    setTicketNo(state, data) {
      state.ticket_no = data
    },
    setUser(state, user) {
      state.user = user
    },
    setTickets(state, tickets) {
      state.tickets = tickets
    },
    setStudents(state, students) {
      state.students = students
    },

    setUsers(state, users) {
      state.users = users
    }
  }

  
   const actions = {
    setMyCategory({commit},payload) {
      console.log("category payload from store...",payload)
      commit("SET_MY_CATEGORY",payload)
    },

    setMyVideo({commit},payload) {
      console.log("category payload from store...",payload)
      commit("SET_MY_Video",payload)
    },

     setArticle({ commit }, article) {
      // make request
      commit('setArticle', article)
    },


     setMyArticles({ commit }, payload) {
      // make request
      commit('SET_MY_ARTICLES', payload)
    },


    setMyEvents({ commit }, payload) {
       // make request
       console.log("events payload from store...",payload)
      commit('SET_MY_EVENTS', payload)
    },

    setMyItems({ commit }, payload) {
       // make request
       console.log("items payload from store...",payload)
      commit('SET_MY_ITEMS', payload)
    },

     setEvent({ commit }, event) {
      // make request
      commit('setEvent', event)
    },

     setUser({ commit },user) {
      // make request
      commit('setUser', user)
    },
     setUsers({ commit },users) {
      // make request
      commit('setUsers', users)
    },
     setStudents({ commit },users) {
      // make request
      commit('setStudents', users)
    },
    setTicketNo({ commit },data) {
      // make request
      commit('setTicketNo', data)
    },
    setTickets({ commit }, data) {
      // make request
      commit('setTickets', data)
    },
    setStudentNo({ commit }, data) {
      // make request
      commit('setStudentNo', data)
    },

  }






  
  const store = createStore({state, mutations, actions, getters});
  store.subscribe((_, state) => {
    // persisting the state of the store
    localStorage.setItem('unboxed_party', JSON.stringify(state));
  });

  export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
  });
  
