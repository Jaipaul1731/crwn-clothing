import { createContext, useState, useEffect } from "react";

// import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});
  //adding Collection for once in firestore database
  //   useEffect(()=>{
  //     addCollectionAndDocuments('categories',SHOP_DATA)
  //   },[])
    useEffect(()=>{
        const getCategories=async ()=>{
            const categoryMap=await getCategoriesAndDocuments();
            console.log(categoryMap)
            setcategoriesMap(categoryMap)
        }
        getCategories();
    },[])
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
