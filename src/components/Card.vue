<template>
  <div class="gear">
      <b-card
        style="
            max-height: 180px;
            border-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            overflow: hidden;
             "
        no-body
        bg-variant="bg-dark"
      >
        <b-card-img
          style="
            filter: contrast(0.8) brightness(1.2);
            border-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            "
          :src="`${item.thumbnailUrl}`"
          alt="item image"
          fluid="true"
        ></b-card-img>
      </b-card>
      <div
        class="card-header bg-dark"
      >
        <div class="headerIcons">
          <span class="categoryIcon">
            <img :src="`/img/icons/${item.status}.svg`"/>
          </span>
        </div>
        <h3>{{item.pickupTime + "-" + item.eta}}</h3>
      </div>
  </div>
</template>
<script>
// import {api} from '../api'
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
    };
  },
  created() {},
  computed: {
  },
  methods: {
    toggleCheckIcon(e) {
      e.preventDefault();
      this.item.checked = !this.item.checked;
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
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
  margin-right:1em;
}
.headerIcons button {
  background-color: transparent;
  border: none;
}
.headerIcons img {
  width: 2.1em;
}
@media only screen and (min-width: 450px) and (max-width: 600px){
  .card > img {
    max-height: 200px;
  }
}
</style>