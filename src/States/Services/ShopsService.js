import axiosClient from "Helpers/client";
import {
  addShopEndPoint,
  deleteShopEndPoint,
  getShopEndPoint,
  getShopsEndPoint,
  updateShopEndPoint,
} from "Helpers/Constants";
import handleError from "Helpers/handelError";
import { getToken } from "Helpers/token_helper";

const ShopService = {
  getShops: async () => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getShopsEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.shops;
    } catch (error) {
      handleError(error);
    }
  },
  getShop: async (id) => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getShopEndPoint(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.shop;
    } catch (error) {
      handleError(error);
    }
  },
  addShop: async (data) => {
    try {
      const token = getToken();
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("manager", data.manager);
      formData.append("address", data.address);
      formData.append("type", data.type);
      formData.append("region", data.region);
      formData.append("image", data.image);
      const response = await axiosClient.post(addShopEndPoint, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.shop;
    } catch (error) {
      handleError(error);
    }
  },
  deleteShop: async (id) => {
    try {
      const token = getToken();
      await axiosClient.delete(deleteShopEndPoint(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      handleError(error);
    }
  },
  updateShop: async (id, data) => {
    try {
      const token = getToken();
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("manager", data.manager);
      formData.append("address", data.address);
      formData.append("type", data.type);
      formData.append("region", data.region);
      formData.append("image", data.image);
      const response = await axiosClient.put(updateShopEndPoint(id), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.shop;
    } catch (error) {
      handleError(error);
    }
  },
};

export default ShopService;
