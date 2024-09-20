// Auth
export const loginEndPoint = "/users/login";
export const refreshTokenEndPoint = "/refresh-token";
// User
export const getUserEndPoint = "/users/me/get-details";
export const updateUserEndPoint = "/users/me/update-details";
export const generateOTPEndPoint = "/users/generate-otp";
export const verifyOTPEndPoint = "/users//verify-otp";
export const resetPasswordEndPoint = "/users/reset-password";
export const updatePasswordEndPoint = "/users/me/update-password";
// Shops
export const getShopsEndPoint = "/shops/get-details";
export const getShopEndPoint = (shopId) => `/shops/${shopId}/get-details`;
export const addShopEndPoint = "/shops/create-shop";
export const deleteShopEndPoint = (shopId) => `/shops/${shopId}/delete-shop`;
export const updateShopEndPoint = (shopId) => `/shops/${shopId}/update-details`;
// Managers
export const getManagersEndPoint = "/users/manager/get-details";
export const getManagerEndPoint = (managerId) =>
  `/users/manager/${managerId}/get-details`;
export const addManagerEndPoint = "/users/manager/register";
export const deleteManagerEndPoint = (managerId) =>
  `/users/${managerId}/delete-user`;
export const updateManagerEndPoint = (managerId) =>
  `/users/${managerId}/update-details`;
// Home
export const getSuperAdminHomeDataEndPoint = "/home/get-super-admin-details";
// Categories
export const getCategoriesEndPoint = "product-categories/get-details";
export const getCategoryEndPoint = (categoryId) =>
  `product-categories/${categoryId}/get-details`;
export const addCategoryEndPoint = "product-categories/create-product-category";
export const deleteCategoryEndPoint = (categoryId) =>
  `product-categories/${categoryId}/delete-product-category`;
export const updateCategoryEndPoint = (categoryId) =>
  `product-categories/${categoryId}/update-details`;
// Alerts
export const addAlertEndPoint = "/alerts/create-alert";
export const deleteAlertEndPoint = (alertId) =>
  `/alerts/${alertId}/delete-alert`;
export const getAlertEndPoint = (alertId) => `/alerts/${alertId}/get-alert`;
export const getAlertsEndPoint = "/alerts/get-details";
export const updateAlertEndPoint = "/alerts/update-details";
