import { useContext } from 'react'
import { CartContext } from '../../context/cart-dropdown.context';
import  {CheckoutItemContainer,ImageContainer,Image,Name,Quantity,Price,RemoveButton,Arrow} from './checkout-item.styles.jsx'

const CheckoutItem =({cartItem})=>{
    const {clearItemFromCart,addItemToCart,removeItemFromCart}=useContext(CartContext);
    const ClearItemHandler =()=>clearItemFromCart(cartItem);
    const addItemHandler =()=>addItemToCart(cartItem);
    const removeItemHandler=()=>removeItemFromCart(cartItem);

    const {name,imageUrl,price,quantity}=cartItem;

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
            <Arrow onClick={removeItemHandler}>
                &#10094;
            </Arrow>
            <span className='value'>{quantity}</span>
            <Arrow onClick={addItemHandler}>
                &#10095;
            </Arrow>
            </Quantity>
            <Price>$ {price}</Price>
            <RemoveButton onClick={ClearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}
export default CheckoutItem;