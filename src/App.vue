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
  created() {
  }
};
</script>

<style>
a:hover {
  text-decoration-line: none;
}
#app {
}
#main {
}
@media only screen and (max-width: 600px) {
}
@media only screen and (max-width: 924px) {
}
</style>