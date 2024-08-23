const users = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));
const getCurrent = async (req, res) => {
  try {
    const { id } = req.currentUser;
    if (!id) {
      res.status(400).json({
        err: 1,
        msg: "missing input",
      });
    }
    const response = await users.findById(id);
    return res.status(200).json({
      success: response ? true : false,
      response,
    });
  } catch (error) {
    res.status(500).json({
      err: -1,
      msg: "Failed at auth controller" + error,
    });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const user = await users.find();
    return res.status(200).json({
      success: user ? true : false,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updatedUser = async (req, res) => {
  try {
    const { id, username, gender, nameOfBank, nameOfUser, creditCartOfBank } =
      req.body;
    const user = await users.findByIdAndUpdate(
      id,
      { username, gender, nameOfBank, nameOfUser, creditCartOfBank },
      { new: true }
    );
    return res.status(200).json({
      success: user ? true : false,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getAllUsers,
  getCurrent,
  updatedUser,
};
