import { useContext } from "react";
import "./checkout.styles.scss";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
const CheckOut = () => {
  const { cartItems, addItemToCart, removeCartItem } = useContext(CartContext);
  const total = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckOutItem
          key={cartItem.id}
          cartItem={cartItem}
          addItemToCart={addItemToCart}
          removeCartItem={removeCartItem}
        />
      ))}
      <span className="total">Total: ${total}</span>
    </div>
  );
};
export default CheckOut;
