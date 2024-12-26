import axios from 'axios';
// --------------------------------------------------------------------
// Products API

export const getAllProducts = async () => {
  const res = await axios.get('http://127.0.0.1:8000/products/');
  return res.data;
};
// --------------------------------------------------------------------
// Carts API

export const getCart = async () => {
  const token = localStorage.getItem('access');
  if (token) {
    const res = await axios.get('http://127.0.0.1:8000/cart/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } else {
    return false;
  }
};

export const addToCart = async (product) => {
  const token = localStorage.getItem('access');
  if (token) {
    const res = await axios.post('http://127.0.0.1:8000/cart/add/', product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } else {
    return false;
  }
};
// --------------------------------------------------------------------

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

export const logout = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  localStorage.removeItem('name');
  alert('Thank you please come again!');
  window.location.reload();
};
// --------------------------------------------------------------------
