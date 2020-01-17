<template>
  <div
    :name="staff.uid"
    class="staffPhotoContainer"
    :class="staff.uid"
    @mouseover="asyncHoverOn"
    @mouseleave="asyncHoverOff"
    @click="openStaffModal"
  >
    <div class="overlay" :class="{show: onHover}">
      <div>
        <small>{{staff.title}}</small>
        <p style="margin-bottom: 5em;">{{staff.name}}</p>
        <small style="font-family: sans-serif;">Click to see profile</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      onHover: false,
    }
  },
  methods: {
    openStaffModal(e) {
      if (this.onHover) {
        window.location.hash += this.$store.state.openStaffModalHashStateId;
        var selectedStaffName = e.currentTarget.getAttribute("name");
        this.$emit("selectStaff", selectedStaffName);
      }
    },
    asyncHoverOn(){
      setTimeout(()=>this.onHover=true, 0)
    },
    asyncHoverOff(){
      setTimeout(()=>this.onHover=false, 0)
    }
  },
  props: ["staff"]
};
</script>

<style>
.staffPhotoContainer {
  background-size: cover;
  width: 100%;
  height: 26vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}
.staffPhotoContainer.owner {
  background-image: url("http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/image.png");
}
.staffPhotoContainer.rick {
  background-image: url("http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/rick.jpg");
}
.staffPhotoContainer.morty {
  background-image: url("http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/morty.jpg");
}
.staffPhotoContainer .overlay {
  display: none;
  border: solid white 1px;
  font-size: 1.5em;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 26vw;
  font-family: "Do Hyeon", sans-serif;
}
.staffPhotoContainer .overlay.show {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 924px) {
  .staffPhotoContainer {
    height: 33vw;
  }
  .staffPhotoContainer .overlay {
    height: 33vw;
  }
}
@media only screen and (max-width: 740px) {
  .staffPhotoContainer {
    height: 48vw;
  }
  .staffPhotoContainer .overlay {
    height: 48vw;
  }
}
@media only screen and (max-width: 600px) {
  .staffPhotoContainer {
    min-height: 100vw;
  }
  .staffPhotoContainer .overlay.show {
    width: 100%;
    height: 100vw;
  }
}
</style>