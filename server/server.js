const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./src/configs/connectDB");
const initRoutes = require("./src/routes");
const http = require("http");
global.__basedir = __dirname;
var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
const { Server } = require("socket.io");
const evaluate = require("./src/models/evaluate");
const getRandomTwo = require("./src/utils/randomLottery");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

let time = 180;
if (typeof window !== "undefined") {
  window.addEventListener("unload", () => {
    localStorage.setItem("remainingTime", time);
  });

  // Khôi phục trạng thái khi trang được load
  window.addEventListener("load", () => {
    const storedTime = localStorage.getItem("remainingTime");
    if (storedTime) {
      time = parseInt(storedTime);
    }
  });
}
require("dotenv").config();
const PORT = process.env.PORT || 8000;
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.io = io;
  next();
});
connectDB();
initRoutes(app);
const array = ["a", "b", "c", "d"];

io.on("connection", async (socket) => {
  let lottery = await evaluate.findOne({ room: 1 });
  console.log(lottery);
  if (!lottery) throw new Error("no lottery found");
  let hours = Math.floor(lottery?.period / 3600);
  let minutes = Math.floor((lottery?.period % 3600) / 60);
  let remainingSeconds = lottery?.period % 60;
  let newLottery;

  let intervalId = setInterval(async () => {
    remainingSeconds--;
    if (remainingSeconds < 0) {
      minutes--;
      remainingSeconds = 59;
    }

    if (minutes < 0) {
      clearInterval(intervalId);
      return;
    }
    lottery.period--;

    if (lottery.period === 0) {
      lottery.period = 180;
      newLottery = await evaluate.findByIdAndUpdate(lottery?._id, {
        period: lottery.period,
        periodNumber: [
          ...lottery.periodNumber,
          lottery.periodNumber.length + 1,
        ],
        result: [...lottery.result, getRandomTwo(array)],
      });
      await newLottery.save();
    }
    newLottery = await evaluate.findByIdAndUpdate(lottery?._id, {
      period: lottery.period,
    });
    await newLottery.save();
    socket.emit("receive_time", { hours, minutes, remainingSeconds });
  }, 1000);
});
server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
