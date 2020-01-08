<template>
  <div class="ReservationList">
    <div class="integration">
      <section class="header">
        <h1 class="title">예약 현황</h1>
        <DigitalClock />
      </section>
      <section class="mainContainer">
        <table>
          <tr>
            <th></th>
            <th>예약명</th>
            <th>연락처</th>
            <th>예약시간</th>
            <th>인원 수</th>
            <th>이용시간</th>
            <th>예약받은날짜</th>
            <th>비고</th>
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
    fetchReservations() {
      let self = this;
      const productionRequest = new Request(
        "https://vippingpong.com:8081/api/v1/reservations/getAll"
      );
      const devRequest = new Request(
        "http://localhost:8081/api/v1/reservations/getAll"
      );
      let myRequest =
        process.env.NODE_ENV === "production" ? productionRequest : devRequest;

      fetch(myRequest)
        .then(response => {
          return response.json();
        })
        .then(data => {
          self.reservations = data;
        })
        .catch(error => alert(error));
    }
  },
  computed: {},
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
  width: 10px;
}
td:nth-child(2) > div {
  width: 58px;
}
td:nth-child(3) > div {
  width: 105px;
}
td:nth-child(4) > div {
  width: 58px;
}
td:nth-child(5) > div {
  width: 30px;
}
td:nth-child(6) > div {
  width: 58px;
}
td:nth-child(7) > div {
  width: 90px;
}
@media only screen and (max-width: 800px){
  .ReservationList {
    padding: 3rem 0;
    overflow: scroll;
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