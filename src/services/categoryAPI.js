import axiosClient from "./axiosClient";

const categoryAPI = {
    getAllCategory: () => {
      return axiosClient.get("products/categories");
    },
  
   
  };
  
  export default categoryAPI;