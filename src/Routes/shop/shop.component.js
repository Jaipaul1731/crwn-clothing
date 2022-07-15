import {Routes,Route} from 'react-router-dom'
import CatergoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import "./shop.component.style.scss";


const Shop = () => {
  return(
    <Routes>
      <Route index element={<CatergoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  )
};
export default Shop;
