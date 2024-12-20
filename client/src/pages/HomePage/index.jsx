import { ChevronRight, Megaphone } from "lucide-react";
import SlickSlider from "../SlickSlider";
import danhgia1 from "@/assets/danhgia1.jpg";
import danhgia2 from "@/assets/danhgia2.jpg";
import danhgia3 from "@/assets/danhgia3.jpg";
import danhgia4 from "@/assets/danhgia4.jpeg";
import danhgia5 from "@/assets/danhgia5.jpg";
import danhgia6 from "@/assets/danhgia6.png";
import { apiGetCollection } from "@/services/collectionService";
import { useEffect, useState } from "react";
import CustomSlide from "../SlickSlider/cinema";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [collection, setCollection] = useState(null);
  const getCollection = async () => {
    const data = await apiGetCollection();
    if (data.success) setCollection(data.collections);
  };
  useEffect(() => {
    getCollection();
  }, []);
  return (
    <div className="w-full h-screen ">
      <SlickSlider />
      <div className="w-full bg-[#fffbe8] flex gap-4 px-4 text-red-500">
        <Megaphone />
        <span>Thông báo</span>
      </div>
      <div className="flex items-center px-4 py-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[3px] h-[22px] bg-[#775fd9]"></div>
          <span className="text-[#c24491] text-sm font-semibold">
            GÓI Đánh giá TÌNH 1 ĐÊM CHO QUÝ ÔNG
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span
            className="text-xs
          "
          >
            Xem thêm
          </span>
          <ChevronRight />
        </div>
      </div>
      <div className="flex items-center justify-between px-16">
        <div className="flex flex-col items-center  gap-2">
          <img
            className="w-[60px] h-[60px] rounded-xl"
            src={danhgia1}
            alt="evalute"
          />
          <span>Đánh giá 1</span>
        </div>
        <div className="flex flex-col items-center  gap-2">
          <img
            className="w-[60px] h-[60px] rounded-xl"
            src={danhgia2}
            alt="evalute"
          />
          <span>Đánh giá 2</span>
        </div>
        <div className="flex flex-col items-center  gap-2">
          <img
            className="w-[60px] h-[60px] rounded-xl"
            src={danhgia3}
            alt="evalute"
          />
          <span>Đánh giá 3</span>
        </div>
      </div>
      <div className="flex items-center px-4 py-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[3px] h-[22px] bg-[#775fd9]"></div>
          <span className="text-[#c24491] text-sm font-semibold">
            GÓI Đánh giá TÌNH 1 ĐÊM CHO QUÝ ÔNG
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span
            className="text-xs
          "
          >
            Xem thêm
          </span>
          <ChevronRight />
        </div>
      </div>
      <div className="flex items-center justify-between px-16">
        <div className="flex flex-col items-center  gap-2">
          <img
            className="w-[60px] h-[60px] rounded-xl"
            src={danhgia4}
            alt="evalute"
          />
          <span>Đánh giá 1</span>
        </div>
        <div className="flex flex-col items-center  gap-2">
          <img
            className="w-[60px] h-[60px] rounded-xl"
            src={danhgia5}
            alt="evalute"
          />
          <span>Đánh giá 2</span>
        </div>
        <div className="flex flex-col items-center  gap-2">
          <img
            className="w-[60px] h-[60px] rounded-xl"
            src={danhgia6}
            alt="evalute"
          />
          <span>Đánh giá 3</span>
        </div>
      </div>
      <div className="flex items-center px-4 py-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[3px] h-[22px] bg-[#775fd9]"></div>
          <span className="text-[#c24491] text-base font-semibold">
            Phổ biến
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span
            className="text-xs
          "
          >
            Xem thêm
          </span>
          <ChevronRight />
        </div>
      </div>
      <CustomSlide collection={collection} />
      <div className="flex items-center px-4 py-2 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[3px] h-[22px] bg-[#775fd9]"></div>
          <span className="text-[#c24491] text-base font-semibold">
            Đề xuất
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span
            className="text-xs
          "
          >
            Xem thêm
          </span>
          <ChevronRight />
        </div>
      </div>
      <div className="grid grid-cols-2 px-8 gap-4">
        {collection?.map((col) => (
          <Link key={col?._id} to={`/video/${col?.title}/${col?._id}`}>
            <img
              className="w-[286px] h-[287px] rounded-xl bg-gray-100 "
              src={`http://localhost:8080/images/${col?.image}`}
              alt=""
            />
          </Link>
        ))}
      </div>
      <span className="w-full h-20 py-28 flex justify-center">Xem thêm</span>
    </div>
  );
};

export default HomePage;
