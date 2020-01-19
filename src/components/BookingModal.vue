<template>
  <div class="BookingModal">
    <button @click="openBookingModal">
      <p>Direct Message</p>
    </button>
    <b-modal
      v-if="$store.state.bookingModalShow"
      centered
      hide-footer
      dialog-class=""
      content-class="shadow-lg bookingPage"
      body-class="bookingPage"
      header-class="border-0"
      id="bookingModal"
    >
      <template v-slot:modal-header="{close}">
        <b-button size="sm" variant @click="$bvModal.hide('bookingModal')" style="background-color: transparent; border: none; margin-left: auto;">
          <img :src="`img/icons/cancel-black.svg`" alt="close icon" style="width:2em"/>
        </b-button>
      </template>
      <Booking/>
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
  props: [],
  computed: {
  },
  methods: {
    openBookingModal() {
      this.$store.state.targetModalId = "bookingModal"
      window.location.hash += this.$store.state.openBookingModalHashStateId
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
.BookingModal {
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