let mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
        customerName: {
                type: String,
                validate: {
                        validator: function(s) {
                          return s.length <= 10
                        },
                        message: props => `예약명-10글자 이하로 입력해주세요`
                      },
                required: [true, "예약명을 확인 해주세요."]
        },
        dateAndTime: {
                type: Date,
                required: [true, "예약 일자와 시간을 꼭 확인 해주세요."]
        },
        phone: {
                type: String,
                validate: {
                        validator: function(s) {
                          return `${s}`.length == 11
                        },
                        message: props => `전화번호가 정확 하지 않습니다.`
                      },
                required: [true, "연락처를 확인 해주세요."]
        },
        numberOfPeople: {
                type: Number,
                validate: {
                        validator: function(n) {
                          return n >= 1 && n <= 500
                        },
                        message: props => `인원수를 확인 해주세요.`
                      },
                required: [true, "몇분이 함께 오시나요?"]
        },
        duration: {
                type: String,
                validate: {
                        validator: function(s) {
                          return s.length <= 10
                        },
                        message: props => `이용시간-10글자 이하로 입력해주세요.`
                      },
        },
        note: {
                type: String,
                validate: {
                        validator: function(s) {
                          return s.length <= 200
                        },
                        message: props => `남기실 말씀-200글자 이하로 입력해주세요.`
                      },
        },
        crossed: {
                type: Boolean,
                default: false
        }
}, 
{
        timestamps: true
}
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;