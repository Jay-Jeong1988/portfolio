<template>
  <div class="ReservationList">
    <div class="integration">
      <section class="header">
        <h1 class="title">Messages</h1>
        <DigitalClock :date="date"/>
      </section>
      <section class="mainContainer">
        <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Sent At</th>
            <th>Message</th>
          </tr>
          <ReservationListItem :item="item" v-for="(item, index) in reservations" :key="index" />
        </table>
      </section>
    </div>
  </div>
</template>

<script>
import DigitalClock from "./DigitalClock";
import ReservationListItem from "./ReservationListItem";
export default {
  name: "ReservationList",
  data() {
    return {
      date: "",
      reservations: [],
    };
  },
  methods: {
    fetchDate() {
      this.fetchReservations()
    },
    fetchReservations() {
      let self = this;
      const productionRequestUrl = "http://jayjeong.xyz:8081/api/v1/reservations/getAll"
      const devRequestUrl = "http://localhost:8081/api/v1/reservations/getAll"
      const myRequestUrl = process.env.NODE_ENV === "production" ? productionRequestUrl : devRequestUrl;

      fetch(myRequestUrl)
        .then(response => {
          return response.json();
        })
        .then(data => {
          self.reservations = data;
        })
        .catch(error => alert(error));
    }
  },
  computed: {
  },
  components: {
    DigitalClock, ReservationListItem
  },
  created() {
    this.fetchReservations()
    const watchInterval=300000
    setInterval(()=>{this.fetchReservations()}, watchInterval)
  }
};
</script>

<style>
.ReservationList {
  background-color: rgb(249, 245, 255);
  padding: 3rem;
  min-height: 100vh;
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 3rem;
}
.header h1 {
  font-size: 52px;
  margin: 0;
  font-weight: bold;
  white-space: nowrap;
  margin-right: 2rem;
}
.mainContainer {
  margin-top: 2rem;
}
table {
  width: 100%;
}
th, td {
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid black;
  padding: 0 .8rem;
  text-align: center;
  overflow: hidden;
  overflow-wrap: break-word;
}
td:nth-child(1) > div {
  min-width: 10px;
}
td:nth-child(2) > div {
  min-width: 58px;
}
td:nth-child(3) > div {
  min-width: 105px;
}
td:nth-child(4) > div {
  min-width: 58px;
}
td:nth-child(5) > div {
  min-width: 30px;
}
td:nth-child(6) > div {
  min-width: 58px;
}
td:nth-child(7) > div {
  min-width: 90px;
}
.pageControllers {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 800px){
  .ReservationList {
    padding: 3rem 0;
    overflow: scroll;
  }
  .integration {
    width: fit-content;
  }
  .header {
    position: initial;
  }
  td:nth-child(8) > div {
    min-width: 300px;
    max-width: 500px;
  }
}
</style>