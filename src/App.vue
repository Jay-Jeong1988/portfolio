<template>
  <div id="app">
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
export default {
  name: "App",
  components: { },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  mounted() {
    this.$store.state.isMobile = window.innerWidth <= 924
    window.addEventListener("resize", ()=>{
      this.$store.state.isMobile = window.innerWidth <= 924
    })
  }
};
</script>

<style lang="sass">
a:hover
  text-decoration-line: none
</style>