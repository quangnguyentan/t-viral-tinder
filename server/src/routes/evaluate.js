const {
  getLotteryById,
  createLottery,
  getAllLottery,
  updateLottery,
} = require("../controllers/evaluateController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
const router = require("express").Router();

router.get("/lottery", getAllLottery);
router.put("/lottery/:id", [verifyToken], updateLottery);

router.get("/lottery/:roomId", [verifyToken, isAdmin], getLotteryById);
router.post("/lottery/create", [verifyToken, isAdmin], createLottery);

module.exports = router;
