import axiosClient from "Helpers/client";
import {
  addDelivererEndPoint,
  deleteDelivererEndPoint,
  getDelivererEndPoint,
  getDeliverersEndPoint,
  updateDelivererEndPoint,
} from "Helpers/Constants";
import handleError from "Helpers/handelError";
import { getToken } from "Helpers/token_helper";

const DelivererService = {
  getDeliverers: async () => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getDeliverersEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.deliverers;
    } catch (error) {
      handleError(error);
    }
  },
  getDeliverer: async (id) => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getDelivererEndPoint(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.deliverer;
    } catch (error) {
      handleError(error);
    }
  },
  addDeliverer: async (data) => {
    try {
      const token = getToken();
      const response = await axiosClient.post(addDelivererEndPoint, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.deliverer;
    } catch (error) {
      handleError(error);
    }
  },
  deleteDeliverer: async (id) => {
    try {
      const token = getToken();
      await axiosClient.delete(deleteDelivererEndPoint(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      handleError(error);
    }
  },
  updateDeliverer: async (id, data) => {
    try {
      const token = getToken();
      const response = await axiosClient.put(updateDelivererEndPoint(id), data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.deliverer;
    } catch (error) {
      handleError(error);
    }
  },
};

export default DelivererService;
