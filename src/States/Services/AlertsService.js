import axiosClient from "Helpers/client";
import {
  addAlertEndPoint,
  deleteAlertEndPoint,
  getAlertEndPoint,
  getAlertsEndPoint,
  updateAlertEndPoint,
} from "Helpers/Constants";
import handleError from "Helpers/handelError";
import { getToken } from "Helpers/token_helper";

const AlertService = {
  getAlerts: async () => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getAlertsEndPoint,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.alerts;
    } catch (error) {
      handleError(error);
    }
  },
  getAlert: async (id) => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getAlertEndPoint(id),{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.alert;
    } catch (error) {
      handleError(error);
    }
  },
  addAlert: async (data) => {
    try {
      const token = getToken();
      const response = await axiosClient.post(addAlertEndPoint, data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.alert;
    } catch (error) {
      handleError(error);
    }
  },
  deleteAlert: async (id) => {
    try {
      const token = getToken();
      await axiosClient.delete(deleteAlertEndPoint(id),{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      handleError(error);
    }
  },
  updateAlert: async (id, data) => {
    try {
      const token = getToken();
      const response = await axiosClient.put(updateAlertEndPoint(id), data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.alert;
    } catch (error) {
      handleError(error);
    }
  },
};

export default AlertService;
