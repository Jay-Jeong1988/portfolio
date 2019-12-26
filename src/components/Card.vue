<template>
  <div class="gear" @click="openModal">
    <b-card
      style="
            max-height: 180px;
            border: none;
            border-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            overflow: hidden;
             "
      no-body
      bg-variant="bg-dark"
    >
    <div class="overlay-text">
      <p>{{ item.from + " - " + item.to }}</p>
      <p>{{ `예상소요시간: ${item.duration} mins` }}</p>
      <p>{{ getDate }}</p>
      <p>{{ item.customerName.split("-")[1] }}</p>
    </div>
      <b-card-img
        style="
            filter: brightness(.8);
            border-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            "
        :src="`${item.thumbnailUrl}`"
        alt="item image"
        fluid="true"
      ></b-card-img>
    </b-card>
    <div class="card-header bg-dark">
      <div class="headerIcons">
        <span class="categoryIcon">
          <img :src="`/img/icons/${item.status}.svg`" alt="driving status icon" />
        </span>
      </div>
      <h3 :class="item.status"><small style="font-size: .7rem;">예약&nbsp;</small>{{ `${pickupTime}` }}</h3>
    </div>
    <Modal v-if="modalShow" :item="item"></Modal>
  </div>
</template>
<script>
import Modal from "../components/Modal.vue";
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      pst: new Date(this.item.pickupTime),
      modalShow: false
    };
  },
  created() {},
  computed: {
    pickupTime() {
      let hr = this.item.pickupTime.split("T")[1].split(":")[0]
      let min = this.item.pickupTime.split("T")[1].split(":")[1]
      return hr + " : " + min;
    },
    getDate(){
      let y = this.item.pickupTime.split("T")[0].split("-")[0]
      let m = this.item.pickupTime.split("T")[0].split("-")[1]
      let d = this.item.pickupTime.split("T")[0].split("-")[2]
      return y + "/" + m + "/" + d + " " + `${this.pst}`.split(" ")[0]
    }
  },
  methods: {
    toggleCheckIcon(e) {
      e.preventDefault();
      this.item.checked = !this.item.checked;
    },
    openModal() {
      if(this.$store.state.isAdmin) this.modalShow = !this.modalShow;
    }
  },
  mounted() {
    this.$root.$on('bv::modal::hide', () => {
      this.modalShow = false;
    })
  },
  components: { Modal }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
.gear a {
  cursor: initial;
}
.headerIcons img {
  width: 1.8em;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;
  padding: 0.5rem 1.25rem;
  font-family: "Raleway", sans-serif;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.35);
  white-space: nowrap;
  color: white;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.card-header h1 {
  margin-bottom: 0;
}
.buffer {
  min-width: 1em;
}
.headerIcons {
  display: flex;
  justify-content: space-between;
  margin-right: 1em;
}
.headerIcons button {
  background-color: transparent;
  border: none;
}
.headerIcons img {
  width: 2.1em;
}
.overlay-text {
  position: absolute;
  z-index: 900;
  width: 100%;
  padding: 1em;
  overflow: scroll;
  height: 100%;
}
.overlay-text p {
  font-size: 1em;
  color: white;
  line-height: 1;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.35);
  font-weight: bold;
  margin: 0;
  margin-bottom: 5px;
}
.overlay-text p:nth-child(1){
  font-size: 1.5em;
}
@media only screen and (min-width: 450px) and (max-width: 600px) {
  .card > img {
    max-height: 200px;
  }
}
.scheduled {
  color: rgb(200,200,200);
}
.done {
  color: red;
}
.driving {
  color: #91ED90
}
</style>