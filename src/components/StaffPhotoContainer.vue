<template>
  <div
    :name="staff.uid"
    class="staffPhotoContainer"
    :style="`background-image: url(${staff.photoUrl})`"
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

<style lang="sass">
.staffPhotoContainer 
  background-size: cover
  width: 100%
  height: 26vw
  +flexAllCenter
  color: white
  text-align: center

  .overlay 
    display: none
    border: solid white 1px
    font-size: 1.5em
    background-color: rgba(0, 0, 0, 0.5)
    width: 100%
    height: 26vw
    font-family: "Do Hyeon", sans-serif
    white-space: pre-wrap

  .overlay.show 
    +flexAllCenter

@media only screen and (max-width: 924px) 
  .staffPhotoContainer 
    height: 33vw
  
  .staffPhotoContainer .overlay 
    height: 33vw
  

@media only screen and (max-width: 740px) 
  .staffPhotoContainer 
    height: 48vw
  
  .staffPhotoContainer .overlay 
    height: 48vw
  

@media only screen and (max-width: 600px) 
  .staffPhotoContainer 
    min-height: 100vw
  
  .staffPhotoContainer .overlay.show 
    width: 100%
    height: 100vw
  

</style>