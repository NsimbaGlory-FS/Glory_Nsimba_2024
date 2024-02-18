const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  car: {
    type: String,
    required: true,
  },

  year: {
    type: String,
    required: true,
  },

  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
