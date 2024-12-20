import axiosConfig from "../axios";

export const apiGetCollection = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/collections/",
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiGetCollectionById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/collections/" + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiGetCollectionDifferentById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/collections/different/" + id,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
export const apiCreateCollection = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/collections/create",
        data,
      });
      resolve(response);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  });
