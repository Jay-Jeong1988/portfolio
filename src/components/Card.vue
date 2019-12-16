<template>
  <div class="gear">
    <router-link :to="`/gears/${item.name}`">
      <b-card
        style="
            max-height: 180px;
            border-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            overflow: hidden;
             "
        no-body
        :bg-variant="displayCardBg"
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
        class="card-header"
        :class="{'bg-dark': this.item.default, 'bg-secondary': !this.item.default}"
      >
        <div class="headerIcons">
          <span class="categoryIcon">
            <img :src="iconSource" />
          </span>
          <span class="checkIcon">
            <button @click="toggleCheckIcon">
              <img :src="`/img/icons/${displayCheckIcon}.svg`" />
            </button>
          </span>
        </div>
        <div class="buffer"></div>
        <h1>{{item.name[0].toUpperCase() + item.name.slice(1)}}</h1>
      </div>
    </router-link>
  </div>
</template>
<script>
// import {api} from '../api'
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      iconSource: `/production-sub-path/img/icons/${this.item.category}.svg`
    };
  },
  created() {},
  computed: {
    displayCheckIcon() {
      return this.item.checked ? "checked" : "unchecked";
    },
    displayCardBg() {
      return this.item.default ? "dark" : "secondary";
    }
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
@import url("https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap");
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
  font-family: "Fredericka the Great";
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
  min-width: 4em;
}
.headerIcons button {
  background-color: transparent;
  border: none;
}
@media only screen and (min-width: 450px) and (max-width: 600px){
  .card > img {
    max-height: 200px;
  }
}
</style>