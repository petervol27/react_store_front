import { useContext, useEffect, useState } from 'react';
import CartContext from '../CartContext';
import { Link } from 'react-router-dom';
import { getUserName } from '../api';
function Nav() {
  const { cart, setCart } = useContext(CartContext);
  const [userName, setUserName] = useState('');
  const length = cart.length;
  const checkUser = () => {
    const token = localStorage.getItem('access');
    getUserName(token).then((username) => {
      if (username === 'Error') {
        setUserName('');
      } else {
        setUserName(username);
      }
    });
  };
  useEffect(() => {
    checkUser();
    const interval = setInterval(() => {
      checkUser();
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to={'/login'}>
                <span className="glyphicon glyphicon-user"></span> Your Account
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <span className="glyphicon glyphicon-shopping-cart"></span>
                Cart:({length})
              </Link>
            </li>
            <li className="user-greet">
              {userName === '' ? '' : `Welcome ${userName}!`}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
