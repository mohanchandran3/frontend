import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getProducts = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, { params: query });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export default {
  getProducts,
  getProductById,
  createProduct, 
};