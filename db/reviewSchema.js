let mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  customerName: {
    type: String,
  },
  phoneLast4Digits: {
    type: String
  },
  content: {
    type: String,
    maxlength: 200,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  showAsInitials: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
}, {
  timestamps: true
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;