<template>
  <div id="modalview">
    <b-modal
      centered
      v-model="bookingModalShow"
      hide-footer
      dialog-class=""
      content-class="shadow-lg bookingPage"
      body-class="bookingPage"
      header-class="border-0"
    >
      <template v-slot:modal-header="{close}">
        <b-button size="sm" variant @click="close()" style="background-color: transparent; border: none; margin-left: auto;">
          <img :src="`img/icons/cancel.svg`" alt="close icon" style="width:2em"/>
        </b-button>
      </template>
      <Booking @closeAllModal="closeAllModal"/>
    </b-modal>
  </div>
</template>

<script>
import Booking from './Booking'
export default {
  data() {
    return {
    };
  },
  props: ["bookingModalShow"],
  computed: {
  },
  methods: {
    closeAllModal(){
      this.$emit("closeAllModal")
    }
  },
  created() {
  },
  mounted() {
  },
  components: {Booking}
};
</script>

<style>
#modalview {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content.bookingPage {
  border-radius: 0;
}
.modal-body.bookingPage {
    display: block;
    padding: 0;
    font-family: "Do Hyeon", sans-serif;
}
</style>