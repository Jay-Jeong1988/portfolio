<template>
  <div class="AdminPage">
    <small style="color: red;" v-if="responseError">responseError</small>
    <div v-if="$store.state.isAdmin" class="createCardForm">
      <div>
        <label>pickup address</label>
        <vue-google-autocomplete
          id="map"
          types=""
          :country="['ca', 'us']"
          class="form-control"
          v-on:placechanged="getPickupAddress"
        ></vue-google-autocomplete>
      </div>
      <div>
        <label>destination address</label>
        <vue-google-autocomplete
          id="map2"
          types=""
          :country="['ca', 'us']"
          class="form-control"
          v-on:placechanged="getDestinationAddress"
        ></vue-google-autocomplete>
      </div>
      <div>
        <label>pickup time</label>
        <input class="form-control date" v-model="data.pickupTime" type="datetime-local" />
      </div>
      <div>
        <label>duration</label>
        <input class="form-control" v-model="data.duration" type="number" />
      </div>
      <div>
        <label>distance</label>
        <input class="form-control" v-model="data.distance" type="number" />
      </div>
      <div>
        <label>price</label>
        <input class="form-control" v-model="data.price" type="number" />
      </div>
      <div>
        <label>client name</label>
        <input class="form-control" v-model="data.customerName" />
      </div>
      <div>
        <label>contact</label>
        <input class="form-control" v-model="data.phone" type="number" />
      </div>
      <button class="btn btn-block btn-success done" @click="makeReservation">Submit</button>
    </div>
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  name: "AdminPage",
  data() {
    return {
      data: {
        from: "",
        to: "",
        pickupTime: "",
        duration: 0,
        customerName: "",
        pickupAddress: "",
        destinationAddress: "",
        phone: "",
        price: 0,
        distance: 0
      },
      responseError: null,
    };
  },
  methods: {
    getPickupAddress(addressData) {
      var streetNumber = addressData.street_number || ""
      var route = addressData.route || ""
      var locality = addressData.locality || ""
      this.data.from = locality
      this.data.pickupAddress = `${streetNumber} ${route}, ${locality}`
    },
    getDestinationAddress(addressData) {
      var streetNumber = addressData.street_number || ""
      var route = addressData.route || ""
      var locality = addressData.locality || ""
      this.data.to = locality
      this.data.destinationAddress = `${streetNumber} ${route}, ${locality}`
    },
    makeReservation() {
      const productionUrl =
        "https://survivalstack.herokuapp.com/api/v1/trips/create";
      const devUrl = "http://localhost:8081/api/v1/trips/create";
      let myUrl =
        process.env.NODE_ENV === "production" ? productionUrl : devUrl;

      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(this.data)
      };

      fetch(myUrl, options)
        .then(response => {
          if(response.status == 200) this.$router.push("/");
        })
        .catch(error => {
          this.responseError = error;
        });
    }
  },
  mounted() {
    var now = new Date().toISOString().split(".")[0];
    document.getElementsByClassName("date")[0].setAttribute('min', now);
  },
  components: { VueGoogleAutocomplete },
  props: []
};
</script>

<style scoped>
.AdminPage {
  margin-top: 4.5em;
  padding: 1.7em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.AdminPage div {
  text-align: center;
}
.createCardForm {
  height: 80vh;
  overflow: scroll;
  margin-bottom: 5em;
}
.createCardForm > div {
  margin-bottom: 0.5em;
}
.createCardForm input,
.createCardForm label {
  display: inline;
}
.done {
  margin-top: 1em;
}
</style>
