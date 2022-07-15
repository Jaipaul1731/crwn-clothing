import React from "react";
// import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import "./index.scss";
import App from "./App";
import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from "./context/categories.context";
import { CartProvieder } from "./context/cart-dropdown.context";

import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvieder>
          <App />
          </CartProvieder>
         
        </CategoriesProvider>
        
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
 
);
