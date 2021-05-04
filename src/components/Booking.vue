<template>
  <div class="Booking">
    <div class="createCardForm">
      <h1 style="margin-bottom: 1em;">Direct Message</h1>
      <div class="errors" v-if="responseErrors.length > 0">
        <small v-for="(e, i) in responseErrors" :key="i" style="color: red;">
          {{ e.split(":")[1].includes("Cast to Date") ? (i+1)+ "." + "Please make sure if date is correct." : (i+1)+ "." + e.split(":")[1] }}
          <br />

        </small>
      </div>
      <div>
        <label>Name</label>
        <input class="form-control" v-model="data.name" type="text" placeholder="eg) John Doe" />
      </div>
      <div>
        <label>Phone Number</label>
        <input class="form-control" v-model="data.phone" type="number" placeholder="eg) 6047773333" />
      </div>
      <div>
        <label>Message</label>
        <textarea class="form-control" rows="8" v-model="data.note" type="text" placeholder="Please leave me a message if anything :)"/>
      </div>
      <button class="btn btn-block btn-lg btn-success done" @click="makeReservation">Send</button>
    </div>
    <b-modal
      centered
      v-model="succeeded"
      hide-header
      hide-footer
      dialog-class=""
      content-class="border-0 bg-transparent succeeded align-items-center"
      body-class="bookingPage succeeded"
      id="successModal"
    >
      <b-button size="sm" variant @click="closeBookingModal()" style="background-color: transparent; border: none; margin-left: auto;">
        <img class="successIcon" src="../assets/images/checked.svg" alt="success icon"/>
        <h2>Message sent. Thank you!</h2>
      </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Booking",
  data() {
    return {
      data: {
        name: "",
        phone: "",
        note: ""
      },
      responseErrors: [],
      succeeded: false,
    };
  },
  computed: {
  },
  methods: {
    closeBookingModal() {
      this.$bvModal.hide("successModal")
    },
    makeReservation() {
      this.responseErrors = [];
      const productionUrl =
        "http://jayjeong.xyz:8081/api/v1/reservations/create";
      const devUrl = "http://localhost:8081/api/v1/reservations/create";
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
        .then(response => response.json())
        .then(data => {
          let errors = [];
          if (data.error) {
            errors = data.error.split(",");
            for (let error of errors) {
              this.responseErrors.push(error);
            }
          }
          if(data.ok) this.succeeded = true
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
  },
  components: {},
  props: []
};
</script>

<style lang="sass">

.Booking 
  padding: 1.7em
  padding-top: 0
  +flexAllCenter

.Booking div 
  text-align: center

.createCardForm > div 
  margin-bottom: 0.5em

.createCardForm input,
.createCardForm label 
  display: inline

.done 
  margin-top: 1em

.successIcon 
  width: 17em

@media only screen and (max-width: 600px) 
  .successIcon 
    width: 12em
  

</style>
