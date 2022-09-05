import {  Fragment } from "react";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";
import CatergoryPreview from "../../components/category-preview/category-preview.component";

const CatergoriesPreview = () => {
  const categoriesMap=useSelector(selectCategoriesMap)
  return (
    <Fragment>
      
      { categoriesMap && Object.keys(categoriesMap).map((title) => {
        const products=categoriesMap[title]
        return (
          <CatergoryPreview key={title} title={title} products={products}/>
        )
      })}
    </Fragment>
  );
};
export default CatergoriesPreview;
