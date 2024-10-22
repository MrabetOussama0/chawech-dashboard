import axiosClient from "Helpers/client";
import {
  addRegionEndPoint,
  deleteRegionEndPoint,
  getRegionEndPoint,
  getRegionsEndPoint,
  updateRegionEndPoint,
} from "Helpers/Constants";
import handleError from "Helpers/handelError";
import { getToken } from "Helpers/token_helper";

const RegionService = {
  getRegions: async () => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getRegionsEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.regions;
    } catch (error) {
      handleError(error);
    }
  },
  getRegion: async (id) => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getRegionEndPoint(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.region;
    } catch (error) {
      handleError(error);
    }
  },
  addRegion: async (data) => {
    try {
      const token = getToken();
      const response = await axiosClient.post(addRegionEndPoint, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.region;
    } catch (error) {
      handleError(error);
    }
  },
  deleteRegion: async (id) => {
    try {
      const token = getToken();
      await axiosClient.delete(deleteRegionEndPoint(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      handleError(error);
    }
  },
  updateRegion: async (id, data) => {
    try {
      const token = getToken();
      const response = await axiosClient.put(updateRegionEndPoint(id), data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.region;
    } catch (error) {
      handleError(error);
    }
  },
};

export default RegionService;
