import { Link } from 'react-router-dom';

function Cart({ cart }) {
  return (
    <div className="container bg-light mb-3">
      <div className="container-fluid text-center mt-3 ">
        <Link to="/">
          <button className="btn btn-warning ">Continue Shopping</button>
        </Link>
      </div>

      <h3 className="text-center">Your Cart:</h3>
      <ul className="cart-list">
        <li className="cart-item"></li>
      </ul>
    </div>
  );
}

export default Cart;
