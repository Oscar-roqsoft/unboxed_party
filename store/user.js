import { createStore } from "vuex";



export const state = () => ({

    myevents:[],
    events: [
        {name: 'Arabian Fest',
         image: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700,h_700/v1677835749/ARABIAN_FEST_ux58sh.jpg',
         created_at: '16th Mar. 2023',
         venue: 'Reboot',
         description: "With his new album 'Manusia' sincerely ready for concerts with beautiful songs and full of meaning",
        },
        {name: 'Rep Your Zodiac',
         image: 'https://res.cloudinary.com/crushcontest-com/image/upload/v1680267199/Unboxed_Rep_your_Zodiac_Sign_1_vfbylt.jpg',
         created_at: '26th Jan. 2023',
         venue: 'Reboot',
         description: "With his new album 'Manusia' sincerely ready for concerts with beautiful songs and full of meaning",
        },
    ],
    event: {},
    user: {},
    cartItems: [],
    survey:[],

  })
  
  export const getters = {
    getEvents(state) {
      return state.events
    },
    getEvent(state){
        return state.event
    },   getUser(state){
      return state.user
  }
  }
  
  export const mutations = {
    setEvents(state, {event}) {
      state.events = event
    },
    setMyEvents(state, {event}) {
      state.myevents = event
    },
    setEvent(state, event) {
      state.event = event
    },  
      setUser(state, user) {
      state.user = user
    },

      setSurvey(state, item) {
      state.survey = item
    },

    
    
  }
  
  export const actions = {
     setEvent({ commit }, {event}) {
      // make request
      commit(setEvent, event)
     },
     setMyEvent({ commit }, {event}) {
      // make request
      commit(setMyEvent, event)
    },
    setUser({ commit }, user) {
      // make request
      commit(setUser, user)
    }

    
  }



