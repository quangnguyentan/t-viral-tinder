import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="relative w-[50%] mx-auto">
        <div className="sticky w-full top-0">
          <div className="w-full h-[50px] bg-profileColor">
            <ChevronLeft
              onClick={() => {
                localStorage.setItem("page", 4);
                navigate("/");
              }}
              className="absolute top-2 z-30 left-4 text-white cursor-pointer"
              size={30}
            />
            <span className=" text-xl text-white absolute top-2 left-[40%]">
              Cài Đặt
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="flex justify-between px-4 py-2"
            onClick={() => navigate("/information")}
          >
            <span>Cài đặt thông tin</span>
            <div className="flex items-center gap-2 ">
              <ChevronRight />
            </div>
          </div>
          <div className="w-[90%] mx-auto h-[0.5px] bg-[#ebedf0]"></div>
          <div className="flex justify-between px-4 py-2">
            <span>Đổi mật khẩu</span>
            <div className="flex items-center gap-2 ">
              <ChevronRight />
            </div>
          </div>
          <div className="w-[90%] mx-auto h-[0.5px] bg-[#ebedf0]"></div>
          <div className="flex justify-between px-4 py-2">
            <span>Ngôn ngữ</span>
            <div className="flex items-center gap-2 ">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
