
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAdmin: false,
    bookingModalShow: false,
    projectModalShow: false,
    staffModalShow: false,
    targetModalId: "",
    openProjectModalHashStateId: "#pmOpen",
    openBookingModalHashStateId: "#bmOpen",
    openStaffModalHashStateId: "#smOpen",
    swiperOn: false,
    isMobile: false,
  },
  mutations: {
    // setAdmin(state) {
    //   var adminKey = localStorage.getItem("adminKey");
    //   if(adminKey && adminKey === process.env.VUE_APP_ADMINKEY) {
    //     state.isAdmin = true;
    //   }
    // },
  },
  actions: {
  },
  modules: {
  }
})
