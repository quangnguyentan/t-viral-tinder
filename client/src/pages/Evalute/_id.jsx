import { ChevronDown, ChevronLeft, ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import danhgia1 from "@/assets/danhgia1.jpg";
import { useEffect, useState } from "react";
import { apiGetLotteryById } from "@/services/evaluateService";
import { CountDown } from "@/components/custom ui/countDown";
import io from "socket.io-client";
var connectOptions = {
  transports: ["websocket"],
};
const DetailEvalute = () => {
  // const [seconds, setSeconds] = useState(180);
  const [active, setActive] = useState(false);
  const [lottery, setLottery] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const apiGetDetailsLottery = async (id) => {
    const data = await apiGetLotteryById(id);
    if (data?.success) setLottery(data?.evaluates);
  };
  const { roomId } = useParams();
  console.log(lottery);
  useEffect(() => {
    apiGetDetailsLottery(roomId);
  }, []);

  const socket = io.connect("http://localhost:8080", connectOptions);

  // Messages States
  socket.on("receive_time", (data) => {
    const lastLi = document.querySelector(".timer span:last-child");
    if (lastLi) {
      lastLi.remove();
    }

    // Tạo và thêm thẻ li mới
    const newLi = document.createElement("span");
    newLi.textContent = `${data.hours} : ${data.minutes} : ${data.remainingSeconds}`;
    document.querySelector(".timer").appendChild(newLi);
    if (data.hours === 0 && data.minutes === 0 && data.remainingSeconds === 0)
      location.reload();
  });
  return (
    <div className="w-[50%] mx-auto bg-gray-100 h-screen relative">
      <div className="sticky w-full top-0">
        <ChevronLeft
          onClick={() => {
            localStorage.setItem("page", 1);
            navigate("/");
          }}
          className="absolute top-2 z-30 left-4 text-white cursor-pointer"
          size={30}
        />
        <div className="w-full h-[50px] bg-profileColor">
          <span className=" text-xl text-white absolute top-2 left-[40%]">
            Đánh giá {id}
          </span>
        </div>
      </div>
      <div className="shadow-xl">
        <div className="flex items-center justify-between px-4 pt-4 pb-10">
          <div className="flex gap-4 items-center">
            <div className="w-[60px] h-[60px]">
              <img src={danhgia1} alt="" className="w-full h-full" />
            </div>
            <span className="font-semibold text-xl">
              {lottery?.periodNumber?.length + 1}{" "}
            </span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <span className="text-pink-700">Lịch sử đánh giá</span>
            <span className="timer text-xl text-red-500"></span>
          </div>
        </div>
        <div className="w-[90%] mx-auto rounded-full h-[2px] bg-borderColor"></div>
        <div className="relative">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-12 ">
              <span className="flex items-center gap-2">
                Kỳ trước
                <span className="font-semibold">
                  {lottery?.periodNumber?.at(-1)} :
                </span>
              </span>
              <span className="text-blue-500 font-medium">D</span>
              <span className="text-pink-800 font-medium">B</span>
            </div>
            <ChevronDown
              className={`transition cursor-pointer duration-150 ease-in-out ${
                active ? "rotate-180" : ""
              }`}
              onClick={() => setActive(!active)}
            />
          </div>
          {active && (
            <div
              className={`  overflow-y-scroll absolute top-10 w-full h-[220px] bg-white ${
                active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[-100%]"
              } transition-all duration-1000 ease-in-out delay-1000`}
            >
              <div className="flex items-center justify-around w-full">
                <span className="text-red-500 font-semibold">Phiên </span>
                <span className="text-red-500 font-semibold">Kết quả</span>
              </div>
              <div className="flex items-center justify-around ">
                <div className="flex flex-col gap-4">
                  {lottery?.periodNumber
                    ?.slice()
                    ?.reverse()
                    ?.map((lot) => (
                      <span className="font-semibold " key={lot}>
                        {lot}
                      </span>
                    ))}
                </div>

                <div className="font-semibold">
                  <div className="flex flex-col gap-4">
                    {lottery?.result
                      ?.slice()
                      ?.reverse()
                      ?.map((lot) => (
                        <span
                          className="font-semibold items-center flex gap-6"
                          key={lot}
                        >
                          {lot?.map((el, index) => (
                            <span key={index}>{el}</span>
                          ))}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[70px] bg-white absolute bottom-0">
        <div className="flex items-center py-2 justify-between px-4 ">
          <div className="flex items-center gap-12">
            <div className="flex flex-col gap-2 items-center ">
              <ShoppingCart size={22} />
              <span className="text-gray-500">Lựa chọn</span>
            </div>
            <span className="w-[2px] h-[40px] bg-gray-500"></span>
          </div>
          <div className="flex items-center gap-4">
            <span>
              Số điểm hiện có: <span className="text-red-500">0</span>
            </span>
            <button className="rounded-2xl bg-profileColor px-4 py-2 ">
              Đánh giá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailEvalute;
