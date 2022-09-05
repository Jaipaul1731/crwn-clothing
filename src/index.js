import React from "react";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";


import { CartProvieder } from "./context/cart-dropdown.context";
import {store} from './store/store'

import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
    
        
            <CartProvieder>
              <App />
            </CartProvieder>
         
        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
