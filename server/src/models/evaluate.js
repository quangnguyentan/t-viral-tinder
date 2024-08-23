const mongoose = require("mongoose");
const evaluateSchema = new mongoose.Schema(
  {
    period: {
      type: Number,
      default: 180,
    },
    periodNumber: {
      type: Array,
    },
    formatTime: Array,
    result: Array,
    room: String,
    UserData: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Evaluate", evaluateSchema);
