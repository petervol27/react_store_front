import axios from 'axios';

export const getAllProducts = async () => {
  const res = await axios.get('http://127.0.0.1:8000/products/');
  return res.data;
};
