let mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
        from: {
                type: String,
        },
        to: {
                type: String
        },
        pickupTime: {
                type: Date,
                required: true
        },
        eta: {
                type: Date,
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

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;