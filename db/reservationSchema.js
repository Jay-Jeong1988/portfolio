let mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
        customerName: {
                type: String,
        },
        dateAndTime: {
                type: Date,
                required: true
        },
        phone: {
                type: String,
        },
        numberOfPeople: {
                type: Date,
        },
        duration: {
                type: Number,
        },
        thumbnailUrl: {
                type: String
        },
        status: {
                type: String,
                default: "scheduled"
        },
        createdAt: {
                type: Date,
                default: Date.now
        },
}, {
        timestamps: true
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;