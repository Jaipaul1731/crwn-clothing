import { useContext } from "react";

import { CartContext } from "../../context/cart-dropdown.context";
import Button , {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { ProductCardContainer,Name,Price,Footer,Image } from "./product-card.styles";


const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  const { name, price, imageUrl } =product;
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
