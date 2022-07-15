import {  Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CatergoryPreview from "../../components/category-preview/category-preview.component";

const CatergoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products=categoriesMap[title]
        return (
          <CatergoryPreview key={title} title={title} products={products}/>
        )
      })}
    </Fragment>
  );
};
export default CatergoriesPreview;
