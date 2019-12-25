<template>
  <div id="app">
    <Menu :class="{showMenu: isMenu}" @closeMenu="hideMenu"></Menu>
    <div id="main">
      <Navbar></Navbar>
      <router-view/>
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
      isAdmin: false,
      isMenu: false,
    };
  },
  computed: {
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
    hideMenu() {
      this.isMenu = false;
    },
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.hideMenu()
      next()
    })
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