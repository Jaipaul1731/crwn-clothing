import { useContext } from 'react';
import {ReactComponent as ShopingIcon} from '../../assests/shopping-bag.svg';
import { CartContext } from '../../context/cart-dropdown.context';

import './cart-icon.styles.scss';

const CartIcon = ()=>{
    const {isCartOpen,setIsCartOpen}=useContext(CartContext)
    const {cartCount}=useContext(CartContext);
   
    const toggleIsCartOpen =()=>setIsCartOpen(!isCartOpen)
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShopingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;