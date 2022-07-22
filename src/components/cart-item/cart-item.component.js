import {CartItemContainer,ItemDetails,Image,Name,Price} from'./cart-item.styles.jsx'

const CartItem =({cartItem})=>{
    const{name,quantity,imageUrl,price}=cartItem;
    return(
        <CartItemContainer>
            <Image src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Name>{name}</Name>
                <Price>{quantity} * ${price}</Price>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;