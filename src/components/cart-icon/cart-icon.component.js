import { useContext } from 'react';
// import {ReactComponent as ShopingIcon} from '../../assests/shopping-bag.svg';
import { CartContext } from '../../context/cart-dropdown.context';

import {CartIconContainer,ItemCount ,ShopingIcon} from'./cart-icon.styles.jsx';

const CartIcon = ()=>{
    const {isCartOpen,setIsCartOpen}=useContext(CartContext)
    const {cartCount}=useContext(CartContext);
   
    const toggleIsCartOpen =()=>setIsCartOpen(!isCartOpen)
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShopingIcon className='shopping-icon'/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;