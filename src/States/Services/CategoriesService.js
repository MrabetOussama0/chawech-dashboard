import axiosClient from "Helpers/client";
import {
  addCategoryEndPoint,
  deleteCategoryEndPoint,
  getCategoryEndPoint,
  getCategoriesEndPoint,
  updateCategoryEndPoint,
} from "Helpers/Constants";
import handleError from "Helpers/handelError";
import { getToken } from "Helpers/token_helper";

const CategoryService = {
  getCategories: async () => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getCategoriesEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.product_categories;
    } catch (error) {
      handleError(error);
    }
  },
  getCategory: async (id) => {
    try {
      const token = getToken();
      const response = await axiosClient.get(getCategoryEndPoint(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.product_category;
    } catch (error) {
      handleError(error);
    }
  },
  addCategory: async (data) => {
    try {
      const token = getToken();
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.image);
      const response = await axiosClient.post(addCategoryEndPoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.product_category;
    } catch (error) {
      handleError(error);
    }
  },
  deleteCategory: async (id) => {
    try {
      const token = getToken();
      await axiosClient.delete(deleteCategoryEndPoint(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      handleError(error);
    }
  },
  updateCategory: async (id, data) => {
    try {
      const token = getToken();
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.image);
      const response = await axiosClient.put(
        updateCategoryEndPoint(id),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.product_category;
    } catch (error) {
      handleError(error);
    }
  },
};

export default CategoryService;
