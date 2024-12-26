import { useContext, useState } from 'react';
import { login } from '../api';
import { useNavigate } from 'react-router-dom';
import CartContext from '../CartContext';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { cart, setCart } = useContext(CartContext);
  const { setUser } = useContext(CartContext);
  const getLogged = (e) => {
    e.preventDefault();
    login(userName, password).then((res) => {
      if (res.name === 'AxiosError') {
        setError('Invalid Username or password');
      } else {
        setUser(userName);
        localStorage.setItem('name', userName);
        localStorage.setItem('access', res.access);
        localStorage.setItem('refresh', res.refresh);
        alert('Login successful');
        navigate('/');
      }
    });
  };
  return (
    <div className="container text-center ">
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-danger">{error}</p>
        <button className="btn btn-primary" onClick={(e) => getLogged(e)}>
          Log-In
        </button>
      </form>
    </div>
  );
}

export default Login;
