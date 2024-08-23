import axiosConfig from "../axios";
export const apiGetLotteryById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/evaluate/lottery/" + id,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiGetAllLottery = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/evaluate/lottery",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
export const apiCreateLottery = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/evaluate/lottery/create",
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiUpdateLottery = (id, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/evaluate/lottery/" + id,
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
