import {Routes,Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getCategoriesAndDocuments} from '../../utils/firebase/firebase'
import CatergoriesPreview from '../categories-preview/categories-preview.component';
import { setCategoriesMap } from '../../store/category/category.action';
import Category from '../category/category.component';




const Shop = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    const getCategories=async ()=>{
        const categoryMap=await getCategoriesAndDocuments();
        
        dispatch(setCategoriesMap(categoryMap))
    }
    getCategories();
},[dispatch])
  return(
    <Routes>
      <Route index element={<CatergoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  )
};
export default Shop;
