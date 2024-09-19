import axiosClient from "Helpers/client";
import {
  addManagerEndPoint,
  deleteManagerEndPoint,
  getManagerEndPoint,
  getManagersEndPoint,
  updateManagerEndPoint,
} from "Helpers/Constants";
import handleError from "Helpers/handelError";
import { getToken } from "Helpers/token_helper";

const ManagerService = {
  getManagers: async () => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getManagersEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.managers;
    } catch (error) {
      handleError(error);
    }
  },
  getManager: async (id) => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getManagerEndPoint(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.manager;
    } catch (error) {
      handleError(error);
    }
  },
  addManager: async (data) => {
    try {
      const token = getToken();
      const response = await axiosClient.post(addManagerEndPoint, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.manager;
    } catch (error) {
      handleError(error);
    }
  },
  deleteManager: async (id) => {
    try {
      const token = getToken();
      await axiosClient.delete(deleteManagerEndPoint(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      handleError(error);
    }
  },
  updateManager: async (id, data) => {
    try {
      const token = getToken();
      const response = await axiosClient.put(updateManagerEndPoint(id), data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.user;
    } catch (error) {
      handleError(error);
    }
  },
};

export default ManagerService;
