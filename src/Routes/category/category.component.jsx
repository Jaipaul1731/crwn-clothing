import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/porduct.card.component";
import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setproducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setproducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
    {products &&
      products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
    
    </div>
  );
};
export default Category;
