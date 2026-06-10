import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CartLogo from "../../assests/shopping-bag.svg";
import "./cart-icon.styles.scss";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const CartToggler = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <img
        src={CartLogo}
        alt="cart logo"
        className="shopping-icon"
        onClick={CartToggler}
      />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
