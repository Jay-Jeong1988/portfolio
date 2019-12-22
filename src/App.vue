<template>
  <div id="app">
    <Menu :class="{showMenu: isMenu}" :currentPage="currentPage" @closeMenu="hideMenu"></Menu>
    <div id="main">
      <Navbar :totalItemCount="totalItemCount" :checkedItemCount="checkedItemCount"></Navbar>
      <router-view :defaultItems="trips" :currentPage="currentPage"/>
      <div class="showMenuBtn" @click="toggleMenu">
        <p v-if="!isMenu">Show filters</p>
        <p v-else>Hide filters</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import Menu from "./components/Menu.vue";
import Navbar from "./components/Navbar.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
export default {
  name: "App",
  components: { Menu, Navbar },
  data() {
    return {
      currentPage: "trips",
      isMenu: false,
      user: null,
      trips: [
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
        {
          pickupTime: "12:40",
          eta: "13:10",
          from: "YVR Airport",
          to: "Downtown",
          thumbnailUrl:
            "https://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-6-4,w-1000e-usm-2-2-0.8-0.024/knife-creamy50.jpg",
          status: "going"
        },
      ]
    };
  },
  computed: {
    totalItemCount() {
      return this.trips.length;
    },
    checkedItemCount() {
      var checkedItems = 0;
      this.trips.forEach(item => {
        if (item.status == "done") checkedItems++;
      });
      return checkedItems;
    }
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
    logout() {
      localStorage.removeItem("user");
      this.user = null;
      this.closeMenubar();
      this.$router.push("/login");
    },
    login(user) {
      localStorage.setItem("user", JSON.stringify(user));
      this.user = user;
      this.$router.push("/");
    },
    hideMenu() {
      this.isMenu = false;
    }
  },
  created() {
    
  }
};
</script>

<style>
a:hover {
  text-decoration-line: none;
}
#app {
  display: flex;
  overflow-x: hidden;
  min-height: 100vh;
  background-color: #fff;
}
#main {
  width: calc(100vw - 16em);
}
.showMenuBtn {
  position: fixed;
  z-index: 1001;
  bottom: 0;
  display: none;
  color: white;
  background-color: #f78410;
  width: 100vw;
  height: 3.5em;
  text-align: center;
  vertical-align: center;
}
.showMenuBtn p {
  margin: 0;
}
@media only screen and (max-width: 600px) {
  #main {
    width: 100%;
  }
}
@media only screen and (max-width: 924px) {
  .showMenuBtn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #menu.showMenu {
    display: block;
    position: fixed;
    z-index: 1000;
  }
  #menu.showMenu .fixedContainer {
    width: 100vw;
  }
  #main {
    width: 100%;
  }
}
</style>