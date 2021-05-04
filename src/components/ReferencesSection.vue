<template>
  <section class="staffs" id="references">
    <div>
      <h2>REFERENCES</h2>
    </div>
    <StaffPhotoContainer :staff="references.tam" @selectStaff="selectReference"/>
    <b-modal
      v-if="$store.state.staffModalShow"
      centered
      hide-footer
      hide-header
      content-class="shadow-lg staffPage"
      body-class="staffPage"
      header-class="border-0"
      id="referenceModal"
    >
      <div class="modalContents">
        <img :src="selectedReference.modalContentsUrl" alt="reference letter" />
        <a class="downloadLink" :href="selectedReference.pdfDownloadUrl" target="_blank">
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
      selectedReference: {},
      references: {
        tam: {
          uid: "tam",
          title: "Founder of CodeCore College\nDeveloper",
          name: "Tam Kbeili",
          photoUrl: "https://miro.medium.com/max/3150/2*g4Ro-pJaZ72AS4eK1kpE_A.jpeg",
          modalContentsUrl: "http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Jay Jeong - Reference Letter.png",
          pdfDownloadUrl: "https://s3-us-west-2.amazonaws.com/jayjeong.xyz/portfolio/Jay+Jeong+-+Reference+Letter.pdf",
        },
      },
    };
  },
  computed: {
  },
  methods: {
    selectReference(referenceName){
      this.$store.state.targetModalId = "referenceModal"
      this.selectedReference = this.references[referenceName]
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