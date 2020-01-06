<template>
  <div id="login">
    <b-modal
      centered
      v-model="modalShow"
      hide-header
      hide-footer
      dialog-class
      content-class="modalContent shadow-lg border-0"
      body-class="p-0"
    >
      <section class="photoSection">
        <img :src="dynamicPhotoUrl" alt="inside gym" />
      </section>
      <section class="contentsContainer">
        <div class="logo">
          <img src="../assets/images/vippp_logo.png" />
        </div>
        <div class="modalTextContents">
        <h1></h1>
        </div>
      </section>
      <template v-slot:modal-backdrop></template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["modalShow", "modalContent"],
  methods: {},
  computed: {
    dynamicPhotoUrl() {
      const urls = {
        lesson:
          "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg",
        question:
          "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/table-tennies.jpg",
        membership:
          "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/tabletennis.jpg",
        community:
          "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg",
        newFeed:
          "http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg"
      };
      return urls[this.modalContent];
    }
  },
  created() {},
  mounted() {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Palanquin:100&display=swap");
#login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-dialog {
  margin: 0;
  align-items: start;
}
.modal-content {
  width: 100vw;
  height: 50vw;
  border-radius: 0;
}
.modal-body {
  width: 100vw;
  height: 50vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.modal-body section {
  width: 50%;
  height: 100%;
}
.modal-body * {
  font-family: "Palanquin", sans-serif;
}
.logo img {
  width: 10em;
}
.photoSection img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.contentsContainer {
  padding: 2em;
  overflow: scroll;
}
.modalTextContents {
  overflow-wrap: break-word;
}
@media only screen and (max-width: 767px){
  .modal-content {
    height: auto;
  }
  .modal-body {
    flex-direction: column;
    min-height: 100vh;
    height: auto;
  }
  .modal-body .contentsContainer {
    width: 100%;
    min-height: 50vh;
  }
  .modal-body .photoSection {
    width: 100%;
    height: 50vh !important;
  }
}
</style>