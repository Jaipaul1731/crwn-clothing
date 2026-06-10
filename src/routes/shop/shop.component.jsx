import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product_card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      {products.map((products) => {
        return <ProductCard key={products.id} products={products} />;
      })}
    </div>
  );
};

export default Shop;
