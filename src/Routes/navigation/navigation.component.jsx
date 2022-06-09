import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";
import { ReactComponent as CrwnSwg } from "../../assests/crown.svg";
import { UserContext } from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.js"

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnSwg />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SING IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
