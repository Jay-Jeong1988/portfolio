let mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
        name: {
                type: String,
                validate: {
                        validator: function(s) {
                          return s.length <= 30
                        },
                        message: props => `Name must be less than 30 characters`
                      },
                required: [true, "Please check if you left your name."]
        },
        phone: {
                type: String,
                validate: {
                        validator: function(s) {
                          return `${s}`.length >= 10 && `${s}`.length <= 13
                        },
                        message: props => `Please check if phone number is correct.`
                      },
                required: [true, "Please check if you left your phone number."]
        },
        note: {
                type: String,
                validate: {
                        validator: function(s) {
                          return s.length <= 1000
                        },
                        message: props => `Max length is 1000.`
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