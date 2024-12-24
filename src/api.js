import axios from 'axios';
// Products API
export const getAllProducts = async () => {
  const res = await axios.get('http://127.0.0.1:8000/products/');
  return res.data;
};

// Carts API
// const addToCart = async() =>{
//   const res = await axios.get('http://127.0.0.1:8000/products/')
// }

// Login And Token API
export const login = async (username, password) => {
  const userDetails = { username: username, password: password };
  try {
    const res = await axios.post('http://127.0.0.1:8000/login/', userDetails);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getUserName = async (accessToken) => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/user/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    return 'Error';
  }
};
