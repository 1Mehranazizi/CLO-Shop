import axios from "axios";

const BASE_URL = "https://testapi.io/api/mehranazizi79/products";

const productsAPI = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export { productsAPI };
