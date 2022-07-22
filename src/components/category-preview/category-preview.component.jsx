import ProductCard from "../product-card/porduct.card.component";
import { LinkTitle,CategoryPreviewContainer,Preview } from "./category-preview.styles";

const CatergoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <LinkTitle to={title} className="title">{title.toUpperCase()}</LinkTitle>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CatergoryPreview;
