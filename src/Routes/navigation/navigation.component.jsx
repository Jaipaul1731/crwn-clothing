import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import './navigation.style.scss' 
import {ReactComponent as CrwnSwg} from '../../assests/crown.svg'

const Navigation=()=>{
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnSwg/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/signin'>
                        SING IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )

}

export default Navigation;