import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../catergories-preview/categories-preview";
import Category from "../category/category";
const Shop = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </Fragment>
  );
};

export default Shop;
