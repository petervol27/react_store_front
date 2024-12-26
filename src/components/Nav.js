import { useContext, useEffect } from 'react';
import CartContext from '../CartContext';
import { Link } from 'react-router-dom';
import { logout, getCart } from '../api';
function Nav() {
  const { cart, setCart } = useContext(CartContext);
  const { user, setUser } = useContext(CartContext);
  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setUser(name);
    } else {
      return;
    }
    if (localStorage.getItem('access')) {
      getCart().then((fetchedCart) => {
        setCart(fetchedCart);
      });
    }
  }, []);
  const access = localStorage.getItem('access');

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
            {access ? (
              ''
            ) : (
              <li>
                <Link to={'/login'}>
                  <span className="glyphicon glyphicon-user"></span> Your
                  Account
                </Link>
              </li>
            )}
            <li>
              <Link to="/cart">
                <span className="glyphicon glyphicon-shopping-cart"></span>
                Cart:({cart.length})
              </Link>
            </li>
            <li className="user-greet">
              {user === '' ? (
                ''
              ) : (
                <>
                  Welcome {user}!
                  <button
                    className="btn btn-warning logout-btn"
                    onClick={() => logout()}
                  >
                    Logout
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
