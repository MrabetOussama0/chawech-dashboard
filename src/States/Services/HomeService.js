import axiosClient from "Helpers/client";
import { getSuperAdminHomeDataEndPoint } from "Helpers/Constants";
import handleError from "Helpers/handelError";
import { getToken } from "Helpers/token_helper";

const HomeService = {
  getHomeData: async () => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getSuperAdminHomeDataEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      handleError(error);
    }
  },
};

export default HomeService;
