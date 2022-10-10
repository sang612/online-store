import axiosClient from "./axiosClient";

const productAPI = {
  getAllProduct: () => {
    return axiosClient.get("products");
  },

  getDetailProduct: (id) => {
    return axiosClient.get(`products/${id}`);
  },

  getProductByCategory: (categoryName) => {
    return axiosClient.get(`products/category/${categoryName}`);
  },
};

export default productAPI;
