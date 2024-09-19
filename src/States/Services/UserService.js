import axiosClient from "Helpers/client";
import {
  generateOTPEndPoint,
  getUserEndPoint,
  resetPasswordEndPoint,
  updateUserEndPoint,
  verifyOTPEndPoint,
} from "Helpers/Constants";
import handleError from "Helpers/handelError";
import { getToken } from "Helpers/token_helper";

const UserService = {
  getUser: async () => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getUserEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.user;
    } catch (error) {
      handleError(error);
    }
  },
  updateUser: async (user) => {
    try {
      const token = getToken();
      const response = await axiosClient.put(updateUserEndPoint, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.user;
    } catch (error) {
      handleError(error);
    }
  },
  generateOTP: async (email) => {
    try {
      await axiosClient.post(generateOTPEndPoint, { email });
    } catch (error) {
      handleError(error);
    }
  },
  verifyOTP: async (code) => {
    try {
      const response = await axiosClient.post(verifyOTPEndPoint, { code });
      return response.data.sessionId;
    } catch (error) {
      handleError(error);
    }
  },
  resetPassword: async (email, password, sessionId) => {
    try {
      await axiosClient.put(resetPasswordEndPoint, {
        email,
        password,
        sessionId,
      });
    } catch (error) {
      handleError(error);
    }
  },
};

export default UserService;
