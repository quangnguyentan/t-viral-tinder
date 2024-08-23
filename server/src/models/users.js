const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: String,
    avatar: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "male",
    },
    nameOfBank: {
      type: String,
    },
    nameOfUser: {
      type: String,
    },
    creditCartOfBank: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    password: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
