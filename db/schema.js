let mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
        from: {
                type: String,
        },
        to: {
                type: String,
        },
        distance: {
                type: Number
        },
        price: {
                type: Number
        },
        phone: {
                type: Number,
                required: true,
                validate: {
                        validator: function(phoneNo) {
                          return phoneNo.length === 10
                        },
                        message: props => `${props.value} is not a valid phone number!`
                      },
        },
        pickupAddress: {
                type: String,
                required: true
        },
        destinationAddress: {
                type: String,
                required: true
        },
        pickupTime: {
                type: Date,
                required: true
        },
        customerName: {
                type: String,
                required: true
        },
        duration: {
                type: Number,
                required: true
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