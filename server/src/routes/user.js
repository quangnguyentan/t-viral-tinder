const {
  getAllUsers,
  getCurrent,
  updatedUser,
} = require("../controllers/userController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
const router = require("express").Router();
router.get("/", [verifyToken], getAllUsers);
router.get("/get-current", verifyToken, getCurrent);
router.put("/update", verifyToken, updatedUser);

module.exports = router;
