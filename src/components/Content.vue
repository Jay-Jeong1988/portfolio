<template>
  <div class="content">
    <div class="defaultCards">
      <Card v-for="(item, i) in trips" :key="i" :item="item" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Content",
  data() {
    return {
      trips: []
    };
  },
  methods: {
    fetchTrips() {
      let self = this
      const productionRequest = new Request('https://survivalstack.herokuapp.com/api/v1/trips/getAll')
      const devRequest = new Request('http://localhost:8081/api/v1/trips/getAll')
      let myRequest = process.env.NODE_ENV === 'production' ? productionRequest : devRequest

      fetch(myRequest)
        .then((response) => { return response.json() })
        .then((data) => {
          self.trips = data
        }).catch( error => error );
    },
  },
  created(){
    this.fetchTrips()
  },
  components: {
    Card
  },
  props: [
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
  padding-top: 1.7em;
  padding-left: 1.3em;
  padding-bottom: 3.3em;
  padding-right: 0;
}

.content > div {
  display: contents;
}
.content > div > * {
  display: inline-block;
  width: calc((100vw - 16em - 6.5em) * .25);
  margin-right: 1.3em;
  margin-bottom: 1.7em;
}

@media only screen and (max-width: 924px) {
  .content > div > * {
    width: calc((100vw - 5em) * .33);
  }
}
@media only screen and (max-width: 600px) {
  .content > div > * {
    width: calc((100vw - 2.8em));
  }
}
</style>
