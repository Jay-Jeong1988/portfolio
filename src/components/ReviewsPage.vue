<template>
  <div class="ReviewsPage">
    <div>
      <div class="intro">
        <h1>Let us know how we did...</h1>
        <p>
          JJ RIDE 에 연락 주셔서 감사합니다. 부족한 점이 있었다면
          후기를 남겨주세요. 개선 하도록 노력하겠습니다!
        </p>
        <small>
          *후기는 JJ RIDE를 이용해주셨던 고객께서만 작성이 가능 합니다.
          후기 작성 시 예약하셨던 성함과 전화번호 마지막 4자리를 입력 해주세요.
        </small>
      </div>
      <hr />
      <div class="createReview">
        <div class="options">
          <div>
            <p>작성자명 표시</p>
            <div class="displayingNameOptions">
              <div>
                <input
                  type="radio"
                  name="initials"
                  :value="false"
                  v-model="creating.showAsInitials"
                />이름
              </div>
              <div>
                <input type="radio" name="initials" :value="true" v-model="creating.showAsInitials" />이니셜
              </div>
            </div>
          </div>
          <div class="starRating">
            <p>만족도</p>
            <button
              data-id="1"
              @click="clickStar"
              class="star"
              :class="{checked: creating.stars > 0}"
            ></button>
            <button
              data-id="2"
              @click="clickStar"
              class="star"
              :class="{checked: creating.stars > 1}"
            ></button>
            <button
              data-id="3"
              @click="clickStar"
              class="star"
              :class="{checked: creating.stars > 2}"
            ></button>
            <button
              data-id="4"
              @click="clickStar"
              class="star"
              :class="{checked: creating.stars > 3}"
            ></button>
            <button
              data-id="5"
              @click="clickStar"
              class="star"
              :class="{checked: creating.stars > 4}"
            ></button>
          </div>
          <div class="auth">
            <input
              type="text"
              class="form-control"
              name="customerName"
              placeholder="예약자명"
              v-model="creating.customerNameWithoutInitials"
            />
            <input
              type="text"
              class="form-control"
              name="phoneLast4Digits"
              placeholder="전화번호 뒷 4자리"
              v-model="creating.phoneLast4Digits"
            />
          </div>
        </div>
        <div class="inputContent">
          <textarea
            class="form-control"
            type="text"
            placeholder="후기를 작성 해 주세요."
            v-model="creating.content"
          />
          <button class="submitBtn btn btn-block btn-outline-primary" @click="sendCreateRequest">작성</button>
          <small style="color: red">{{validationError}}</small>
        </div>
      </div>
      <hr />
      <div class="reviews">
        <h1>Reviews</h1>
        <Review
          @reviewRemoved="refreshAfterRemovingReview"
          v-for="(review, index) in reviews"
          :key="`${review._id}`"
          :item="review"
          :index="index"
        ></Review>
      </div>
    </div>
  </div>
</template>

<script>
import Review from "./Review";
export default {
  name: "ReviewsPage",
  data() {
    return {
      reviews: [],
      creating: {
        customerNameWithoutInitials: "",
        phoneLast4Digits: "",
        content: "",
        stars: 0,
        showAsInitials: false
      },
      validationError: ""
    };
  },
  components: {
    Review
  },
  methods: {
    refreshAfterRemovingReview() {
      this.reviews = [];
      this.fetchReviews();
    },
    sendCreateRequest() {
      if(!this.creating.customerNameWithoutInitials || !this.creating.phoneLast4Digits) this.validationError = "입력하신 정보를 다시 확인 해주세요."
      else {
        const productionUrl =
          "https://survivalstack.herokuapp.com/api/v1/reviews/create";
        const devUrl = "http://localhost:8081/api/v1/reviews/create";
        let myUrl =
          process.env.NODE_ENV === "production" ? productionUrl : devUrl;
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8"
          },
          body: JSON.stringify(this.creating)
        };

        fetch(myUrl, options)
          .then(response => response.json())
          .then((data) => {
            if(data.error) this.validationError = data.error
            else {
              this.reviews = [];
              this.validationError = "";
              this.fetchReviews();
              this.creating = {
                customerNameWithoutInitials: "",
                phoneLast4Digits: "",
                content: "",
                stars: 0,
                showAsInitials: false
              };
            }
          })
          .catch(error => {
            return error
          });
      }
    },
    clickStar(e) {
      var dataId = e.target.getAttribute("data-id");
      this.creating.stars = dataId;
    },
    fetchReviews() {
      let self = this;
      const productionRequest = new Request(
        "https://survivalstack.herokuapp.com/api/v1/reviews/getAll"
      );
      const devRequest = new Request(
        "http://localhost:8081/api/v1/reviews/getAll"
      );
      let myRequest =
        process.env.NODE_ENV === "production" ? productionRequest : devRequest;

      fetch(myRequest)
        .then(response => {
          return response.json();
        })
        .then(data => {
          self.reviews = data;
        })
        .catch(error => alert(error));
    }
  },
  created() {
    this.fetchReviews();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poor+Story|Raleway&display=swap");
.ReviewsPage {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 8em;
  padding: 1em;
  padding-bottom: 6em;
}
.intro {
  font-family: "Poor Story", sans-serif;
  padding: 1em;
}
@media only screen and (min-width: 600px) {
  .intro h1 {
    margin-bottom: 1em;
  }
}
.star {
  width: 2em;
  height: 2em;
  background-image: url("../assets/images/emptyStar.svg");
  background-size: cover;
  border: none;
  background-color: transparent;
}
.star.checked {
  background-image: url("../assets/images/star.svg");
}
.displayingNameOptions {
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  width: fit-content;
}
.displayingNameOptions div {
  padding: 0.5em 1em;
  display: inline-block;
}
.displayingNameOptions div:first-child {
  border-right: 1px solid rgb(200, 200, 200);
}
.options {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.options > div {
  margin: 1em;
}
.options > div > p {
  margin: 0;
}
.createReview {
  margin: 1.5em 0;
  margin-bottom: 3em;
}
.inputContent {
  padding: 0.5em;
}
.inputContent textarea {
  margin-bottom: 1em;
}
.reviews h1 {
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
@media only screen and (max-width: 600px) {
  .options {
    display: block;
  }
}
</style>