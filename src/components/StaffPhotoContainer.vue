<template>
  <div
    class="staffPhotoContainer" :class="staff.uid"
    @mouseover="onHover = true"
    @mouseleave="onHover = false"
  >
    <div class="overlay" :class="{show: onHover}">
      <div>
        <p style="margin-bottom: 0"></p>
        <p>
          <small>{{staff.title}}</small>
        </p>
        <p>{{staff.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      onHover: false
    }
  },
  props: ["staff"]
};
</script>

<style>
.staffPhotoContainer {
  background-size: cover;
  width: 100%;
  height: 100%;
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
  position: absolute;
  z-index: 949;
  font-size: 1.5em;
  background-color: rgba(0, 0, 0, 0.5);
  width: 25%;
  height: 25vw;
  font-family: "Do Hyeon", sans-serif;
}
.staffPhotoContainer .overlay.show {
  display: flex;
  justify-content: center;
  align-items: center;
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