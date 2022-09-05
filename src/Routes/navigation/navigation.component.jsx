import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnSwg } from "../../assests/crown.svg";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CartContext } from "../../context/cart-dropdown.context";

import { signOutUser } from "../../utils/firebase/firebase.js";
import {
  NavigationContainer,
  Navlinks,
  Navlink,
  LogoContainer,
} from "./navigation.style";

const Navigation = () => {
  const currentUser=useSelector(selectCurrentUser)
  
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnSwg />
        </LogoContainer>
        <Navlinks>
          <Navlink to="/shop">SHOP</Navlink>
          {currentUser ? (
            <Navlink as='span' onClick={signOutUser}>SIGN OUT</Navlink>
          ) : (
            <Navlink to="/auth">SING IN</Navlink>
          )}
          <CartIcon />
        </Navlinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
