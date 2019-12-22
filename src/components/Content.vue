<template>
  <div class="content">
    <div class="defaultCards">
      <Card v-for="(item, i) in defaultItems" :key="i" :item="item" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Content",
  data() {
    return {
    };
  },
  components: {
    Card
  },
  props: [
    "defaultItems", "currentPage"
  ]
};
</script>

<style scoped>
.createLink {
  width: fit-content;
  height: 242px;
  margin: 1em;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.createLink image {
  width: 10em;
  height: 7em;
}

.content {
  margin-top: 4em;
  padding: 1.7em;
  padding-right: 0;
}

.content > div {
  display: contents;
}
.content > div > * {
  display: inline-block;
  width: calc((100vw - 16em - 8.5em) * .25);
  margin-right: 1.7em;
  margin-bottom: 1.7em;
}

@media only screen and (max-width: 924px) {
  .content > div > * {
    width: calc((100vw - 6.8em) * .33);
  }
}
@media only screen and (max-width: 600px) {
  .content > div > * {
    width: calc((100vw - 3.4em));
  }
}
</style>
