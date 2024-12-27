import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import { getCart } from '../api';
function Cart() {
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    const token = localStorage.getItem('access');
    if (token) {
      getCart().then((items) => {
        const productsWithQuantities = items.products.map((product) => {
          const cartItem = items.cart_items.find(
            (item) => item.product === product.id
          );
          return {
            ...product,
            quantity: cartItem ? cartItem.quantity : 0,
          };
        });
        setCart(productsWithQuantities);
      });
    }
  }, []);
  return (
    <div className="container bg-light mb-3">
      <div className="container-fluid text-center mt-3 ">
        <Link to="/">
          <button className="btn btn-warning ">Continue Shopping</button>
        </Link>
      </div>

      <h3 className="text-center">Your Cart:</h3>
      <ul className="cart-list text-center ">
        {cart.map((product, index) => {
          return (
            <div key={index} className="cart-item text-center">
              <div className="panel-heading">{product.name}</div>
              <div className="panel-body">
                <img
                  src={product.image}
                  className="img-responsive"
                  style={{ width: '250px', height: '250px' }}
                  alt={product.name}
                />
              </div>
              <div className="panel-footer">
                <div className="fw-bold">{product.price}₪</div>
                <div className="fw-bold">Quantity: {product.quantity}</div>
                <button className="btn btn-danger text-center mt-3">
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
