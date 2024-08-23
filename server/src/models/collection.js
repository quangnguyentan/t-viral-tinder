const mongoose = require("mongoose");
const collectionSchema = new mongoose.Schema({
  title: String,
  category: String,
  image: String,
  video: String,
  view: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Collection", collectionSchema);
