<template>
  <section class="staffs" id="members">
    <div>
      <h2>MEMBERS</h2>
    </div>
    <StaffPhotoContainer :staff="staffs.owner" @selectStaff="selectStaff"/>
    <StaffPhotoContainer :staff="staffs.rick" @selectStaff="selectStaff"/>
    <StaffPhotoContainer :staff="staffs.morty" @selectStaff="selectStaff"/>
    <b-modal
      v-if="$store.state.staffModalShow"
      centered
      hide-footer
      hide-header
      content-class="shadow-lg staffPage"
      body-class="staffPage"
      header-class="border-0"
      id="staffModal"
    >
      <div class="modalContents">
        <img :src="selectedStaff.modalContentsUrl" alt="resume" />
        <a class="downloadLink" :href="selectedStaff.pdfDownloadUrl" target="_blank">
          <img src="../assets/images/download.svg" alt="download icon"/>
          <p>Download</p>
        </a>
      </div>
    </b-modal>
  </section>
</template>

<script>
import StaffPhotoContainer from "./StaffPhotoContainer"
export default {
  data() {
    return {
      selectedStaff: {},
      staffs: {
        owner: {
          uid: "owner",
          title: "Web Developer",
          name: "Jay Jeong",
          photoUrl: "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/image.png",
          modalContentsUrl: "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jayjeong_new-resume.png",
          pdfDownloadUrl: "http://s3-us-west-2.amazonaws.com/jayjeong.xyz/portfolio/jayjeong_resume.pdf",
        },
        rick: {
          uid: "rick",
          title: "Mad Scientist",
          name: "Rick",
          photoUrl: "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/rick.jpg",
          modalContentsUrl: "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/rick-resume.png",
          pdfDownloadUrl: "https://s3-us-west-2.amazonaws.com/jayjeong.xyz/portfolio/rick-resume.pdf",
        },
        morty: {
          uid: "morty",
          title: "Rick's Grandson",
          name: "Morty",
          photoUrl: "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/morty.jpg",
          modalContentsUrl: "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/morty-missing.png",
          pdfDownloadUrl: "https://s3-us-west-2.amazonaws.com/jayjeong.xyz/portfolio/image.png",
        }
      },
    }
  },
  computed: {
  },
  methods: {
    selectStaff(staffName){
      this.$store.state.targetModalId = "staffModal"
      this.selectedStaff = this.staffs[staffName]
    },
  },
  props: [],
  components: {StaffPhotoContainer}
};
</script>

<style lang="sass">
.staffs 
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  +concreteBg

  > div 
    +flexAllCenter
    color: white
    text-align: center

    > h2 
      font-family: "Raleway", sans-serif

.modal-content.staffPage 
  border-radius: 0

  > .modal-body
    +flexAllCenter
    padding: 0

    > .modalContents 
      > img 
        width: 100%

      > .downloadLink 
        right: 15px
        top: 15px
        position: absolute
        +flexAllCenter
        flex-direction: column
        color: #028FA3

        > img 
          width: 1.7em

        > p 
          font-size: .6em

@media only screen and (max-width: 924px) 
  .staffs 
    grid-template-columns: 1fr 1fr 1fr
  
    > div:first-child 
      grid-column: 1 / span 3
      min-height: 35vh
  

@media only screen and (max-width: 740px) 
  .staffs 
    grid-template-columns: 1fr 1fr
  
    > div:first-child 
      grid-column: 1 / span 2
  

@media only screen and (max-width: 600px) 
  .staffs 
    display: block
  
    > div:first-child 
      min-height: 60vw
    

</style>