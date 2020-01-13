<template>
  <tr :class="{crossed: crossed}">
    <td>
      <div>
      <button class="removeBtn" @click="toggleCross">
        <img src="../assets/images/error.svg" alt="close icon"/>
      </button>
      </div>
    </td>
    <td>
      <div>{{item.name}}</div>
    </td>
    <td>
      <div>{{item.phone}}</div>
    </td>
    <td>
      <div>
        {{createdAtInPST}}
      </div>
    </td>
    <td>
      <div>{{item.note}}</div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ReservationListItem",
  data() {
    return {
      crossed: false
    }
  },
  methods: {
    toggleCross(){
      this.crossed = !this.crossed
      const productionUrl =
        "http://jayjeong.xyz:8081/api/v1/reservations/updateCrossed";
      const devUrl = "http://localhost:8081/api/v1/reservations/updateCrossed";
      let myUrl =
        process.env.NODE_ENV === "production" ? productionUrl : devUrl;
      fetch(`${myUrl}?reservationId=${this.item._id}&crossed=${this.crossed}`)
        .then(response => response.status)
        .catch(error => {
          alert(error)
        });
    },
  },
  props: ["item"],
  computed:{
    createdAtInPST(){
      // let createdAt = new Date(this.item.createdAt).toLocaleString("en-CA", {timeZone: "pacific/Vancouver"})
      const createdAt = new Date(this.item.createdAt)
      return createdAt;
    },
  },
  created() {
    this.crossed = this.item.crossed
  }
};
</script>

<style>
.removeBtn {
  padding: 0;
}
.removeBtn img {
  width: 1rem;
}
.crossed * {
  text-decoration: line-through;
}
</style>