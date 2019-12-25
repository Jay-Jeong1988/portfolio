<template>
  <div id="modalview">
    <b-modal
      centered
      v-model="modalShow"
      dialog-class="bg-transparent"
      content-class="shadow-lg"
      footer-class="shadow-lg bg-dark footerr"
      body-class="bg-dark"
      header-class="bg-dark"
    >
      <template v-slot:modal-header="{close}">
        <div class="btn btn-outline-danger" @click="deleteTrip">
          <p>Delete</p>
        </div>
        <b-button size="sm" variant @click="close()">x</b-button>
      </template>
      <div id="loginContainer" v-if="!editing">
        <p>Pickup: {{ data.pickupAddress }}</p>
        <p>Destination: {{ data.destinationAddress }}</p>
        <p>When: {{ getDate + " " + pickupTime }}</p>
        <p>Name: {{ data.customerName.split("-")[0] }}</p>
        <p>PhoneNo: {{ data.phone }}</p>
        <p>Distance: {{ data.distance }} km</p>
        <p>Price: ${{ data.price }}</p>
        <p>ETE: {{ data.duration }} minutes</p>
      </div>
      <div id="loginContainer2" v-if="editing">
        <div class="control">
          <span>Pickup:</span>
          <input v-model="data.pickupAddress" />
        </div>
        <div class="control">
          <span>Destination:</span>
          <input v-model="data.destinationAddress" />
        </div>
        <div class="control">
          <span>When:</span>
          <input v-model="data.pickupTime" type="datetime-local" />
        </div>
        <div class="control">
          <span>Name:</span>
          <input v-model="data.customerName" />
        </div>
        <div class="control">
          <span>PhoneNo:</span>
          <input v-model="data.phone" type="number" />
        </div>
        <div class="control">
          <span>Distance:</span>
          <input v-model="data.distance" type="number" />
        </div>
        <div class="control">
          <span>Price:</span>
          <input v-model="data.price" type="number" />
        </div>
        <div class="control">
          <span>ETE:</span>
          <input v-model="data.duration" type="number" />
        </div>
      </div>
      <template v-slot:modal-footer="{login}">
        <div class="btn btn-outline-success" @click="edit">
          <p>Edit</p>
        </div>
        <div class="btn btn-outline-primary" @click="save">
          <p>Save</p>
        </div>
        <div class="statuses">
          <div class="status" @click="switchStatus">
            <img name="scheduled" :src="`/img/icons/scheduled.svg`" alt="white car"/>
          </div>
          <div class="status" @click="switchStatus">
            <img name="driving" :src="`/img/icons/driving.svg`" alt="green car"/>
          </div>
          <div class="status" @click="switchStatus">
            <img name="done" :src="`/img/icons/done.svg`" alt="red car"/>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false,
      editing: false,
      data: {}
    };
  },
  props: ["item"],
  computed: {
    pst() {
      return new Date(this.data.pickupTime)
    },
    pickupTime() {
      let hr = this.pst.getHours() == "0" ? "00" : this.pst.getHours();
      let min = this.pst.getMinutes() == "0" ? "00" : this.pst.getMinutes();
      return hr + " : " + min;
    },
    getDate() {
      let y = this.pst.getFullYear();
      let m = this.pst.getMonth() + 1;
      let d = this.pst.getDate();
      return y + "/" + m + "/" + d + " " + `${this.pst}`.split(" ")[0];
    }
  },
  methods: {
    switchStatus(e) {
      var clickedStatus = e.target.name;
      const productionUrl =
        "https://survivalstack.herokuapp.com/api/v1/trips/updateStatus";
      const devUrl = "http://localhost:8081/api/v1/trips/updateStatus";
      let myUrl =
        process.env.NODE_ENV === "production" ? productionUrl : devUrl;

      fetch(`${myUrl}?tripId=${this.data._id}&status=${clickedStatus}`)
        .then(response => response.json())
        .then(data => {
          this.item.status = data.status;
        })
        .catch(error => {
          alert(error)
        });
    },
    edit() {
      this.editing = !this.editing;
    },
    save() {
      const productionUrl =
        "https://survivalstack.herokuapp.com/api/v1/trips/update";
      const devUrl = "http://localhost:8081/api/v1/trips/update";
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

      fetch(`${myUrl}?tripId=${this.data._id}`, options)
        .then(response => response.json())
        .then(trip => {
          this.data = trip;
          this.item._id += 1;    //changing item's key makes ables to update the component in real time
          this.editing = false;
          setTimeout(()=>this.item._id = this.item._id.slice(0,-1), 0) //must change the key back to as it was, otherwise fetch fails due to unmatching _id
        })
        .catch(error => {
          alert(error)
        });
    },
    deleteTrip() {
      const productionUrl =
        "https://survivalstack.herokuapp.com/api/v1/trips/remove";
      const devUrl = "http://localhost:8081/api/v1/trips/remove";
      let myUrl =
        process.env.NODE_ENV === "production" ? productionUrl : devUrl;
        fetch(`${myUrl}?tripId=${this.data._id}`)
        .then(response => response.status)
        .catch(error => {
          alert(error)
        });
    }
  },
  created() {
    this.data = this.item;
  },
  mounted() {
    this.modalShow = true;
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Palanquin:100&display=swap");
#modalview {
  display: flex;
  justify-content: center;
  align-items: center;
}
#modalview * {
  font-family: "Palanquin", sans-serif;
}
.footerr {
  display: flex;
  justify-content: space-between !important;
}
#loginContainer p,
#loginContainer2 span {
  color: white;
  font-size: 1.5rem;
}
.status img {
  width: 3em;
  cursor: pointer;
}
#loginContainer2 input {
  color: white;
  font-size: 1.5em;
  background-color: transparent;
  flex-grow: 2;
  margin-bottom: 0.5em;
}
#loginContainer2 .control {
  width: 100%;
  display: flex;
}
.statuses {
  flex-grow: 2;
  display: flex;
  justify-content: space-around;
}
</style>