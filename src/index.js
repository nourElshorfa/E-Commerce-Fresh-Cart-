import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import UserContextProvider from './Context/UserContext.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {QueryClient , QueryClientProvider} from "react-query"
import CartContextProvider from './Context/CartContext.js';




const root = ReactDOM.createRoot(document.getElementById('root'));

let queryClient = new QueryClient()
root.render(
  
 <QueryClientProvider client={queryClient}>
  <CartContextProvider>

  <UserContextProvider>
    <App />
  </UserContextProvider>
  </CartContextProvider>

 </QueryClientProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
