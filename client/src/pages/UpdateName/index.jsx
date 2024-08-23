import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiUpdatedUser } from "@/services/userService";
import { getCurrent } from "@/stores/actions/userAction";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const updateName = () => {
  const { currentData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, []);

  const [isLoadding, setIsLoadding] = useState(false);
  const [invisible, setInvisible] = useState(false);
  const { register, handleSubmit, watch, setValue, getValues, onChange } =
    useForm({
      name: "",
    });
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  console.log(watch("name"));
  const onSubmit = async (values) => {
    try {
      setIsLoadding(true);
      // const url = initialData
      //   ? `/api/collections/${initialData?._id}`
      //   : "/api/collections/new";

      const res = await apiUpdatedUser({
        id: currentData?._id,
        username: values.name,
      });
      console.log(res);
      if (res.success) {
        setIsLoadding(false);
        // toast.success(`Collection ${initialData ? "updated" : "created"} `);
        // window.location.href = "/collections";
        navigate("/collection");
      }
    } catch (error) {
      console.log("[collections_POST]", error);
      toast.error("Something went wrong! Please try again.");
    }
  };
  useEffect(() => {
    dispatch(getCurrent());
  }, []);
  return (
    <>
      <div className="h-screen">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="relative w-[50%] mx-auto">
            <div className="sticky w-full top-0">
              <div className="w-full h-[50px] bg-profileColor">
                <ChevronLeft
                  onClick={() => {
                    navigate(window.history.back());
                  }}
                  className="absolute top-2 z-30 left-4 text-white cursor-pointer"
                  size={30}
                />
                <span className=" text-xl text-white absolute top-2 left-[40%]">
                  Thông tin cá nhân
                </span>
                <Button
                  type="submit"
                  className=" text-white text-lg absolute top-1 right-0"
                >
                  Lưu
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-[90%] mx-auto h-[0.5px] bg-[#ebedf0]"></div>
              <div
                className="flex items-center gap-8 px-4 py-2"
                onClick={() => navigate("/setName")}
              >
                <span>Họ tên thật</span>
                <div className="">
                  <Input
                    {...register("name")}
                    placeholder="Họ và tên"
                    onKeyDown={handleKeyPress}
                    className="outline-none border-none"
                  />
                </div>
              </div>
              <div className="w-[90%] mx-auto h-[0.5px] bg-[#ebedf0]"></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default updateName;
