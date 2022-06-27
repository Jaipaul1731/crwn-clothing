import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../context/cart-dropdown.context'
import Button from "../button/button.component"
const CartDropdown =()=>{
    const navigate=useNavigate();
    const NavigateHandler =()=>navigate('/checkout');
    const {cartItems} = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=><CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick={NavigateHandler}>Go To Checkout</Button>
        </div>
    )
}
export default CartDropdown;