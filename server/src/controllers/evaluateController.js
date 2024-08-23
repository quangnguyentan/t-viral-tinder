const evaluate = require("../models/evaluate");
var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
const createLottery = async (req, res) => {
  try {
    const { period, result, room } = req.body;

    const newEvaluate = await evaluate.create({
      period,
      result,
      room,
    });
    newEvaluate.save();
    return res.status(200).json({
      success: newEvaluate
        ? "Successfully created"
        : "Failed to create evaluate",
      newEvaluate,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const getAllLottery = async (req, res) => {
  const lotteries = await evaluate.find();
  console.log(lotteries);

  return res.status(200).json({
    success: lotteries ? true : false,
    lotteries,
  });
};
const updateLottery = async (req, res) => {
  try {
    // const { id } = req.params;
    // let data = await evaluate.findById(id);
    // cron.schedule("* * * * *", async () => {
    //   if (evaluates?.period) {
    //     evaluates.period -= 1000;
    //   } else {
    //     evaluates.period = Date.now() + 180000;
    //   }
    //   await evaluates.save();
    // });
    // console.log(data);
    // if (!data) throw new Error("Collection not found");
    // const { period, result, room } = req.body;
    // if (!period || !result || !room) throw new Error("Invalid");
    // data = await collection.findByIdAndUpdate(
    //   id,
    //   { period, result, room },
    //   { new: true }
    // );
    // data.save();
    // return res.status(200).json({
    //   success: data ? true : false,
    //   data,
    // });
  } catch (error) {
    console.log(error.message);
  }
};
const getLotteryById = async (req, res) => {
  try {
    const { roomId } = req.params;
    // Tìm bản ghi cần cập nhật
    const evaluates = await evaluate.findOne({ room: roomId });
    console.log(evaluates);

    // const updatePromise = new Promise(async (resolve, reject) => {
    //   cron.schedule("* * * * * *", async () => {
    //     if (evaluates?.period) {
    //       const hours = Math.floor(evaluates?.period / 3600);
    //       const minutes = Math.floor((evaluates?.period / 3600) * 60);
    //       const seconds = evaluates?.period % 60;
    //       evaluates.formatTime = [hours, minutes, seconds];
    //       evaluates.period -= 1;
    //     } else {
    //       evaluates.period = 180;
    //     }
    //     await evaluates.save();
    //     resolve(); // Resolve the promise after saving
    //   });
    // });
    // await updatePromise;
    return res.status(200).json({
      success: evaluates ? true : false,
      evaluates,
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật thời gian:", error);
  }
};
module.exports = {
  createLottery,
  getAllLottery,
  updateLottery,
  getLotteryById,
};
