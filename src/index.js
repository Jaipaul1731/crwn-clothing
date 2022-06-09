import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./context/user.context";
import { ProductProvider } from "./context/products.context";

import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
        
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
