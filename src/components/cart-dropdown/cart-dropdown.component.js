import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart-dropdown.context";
import Button  from "../button/button.component";
import {
  CartDropdownContainer,
  CartItemContainer,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const navigate = useNavigate();
  const NavigateHandler = () => navigate("/checkout");
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropdownContainer>
      <CartItemContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>Your cart is Empty.</span>
        )}
      </CartItemContainer>
      <Button onClick={NavigateHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
