
import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Brands from './Components/Brands/Brands'
import NotFound from './Components/NotFound/NotFound'
import Categories from './Components/Categories/Categories'
import Cart from './Components/Cart/Cart'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Details from './Components/Details/Details'
import Profile from './Components/Profile/Profile'
import Checkout from './Components/Checkout/Checkout'
import { Toaster } from 'react-hot-toast';
import AllOrders from './Components/AllOrders/AllOrders'

 

export default function App() {

    let routers = createHashRouter([{
        path:"" , element: <Layout/> , children: [
            {index:true , element: <ProtectedRoute><Home/></ProtectedRoute>},
            {path:"/products", element: <ProtectedRoute><Products/></ProtectedRoute>},
            {path:"/register", element: <Register/>},
            {path:"/login", element: <Login/>},
            {path:"/Brands", element:<ProtectedRoute><Brands/></ProtectedRoute>},
            {path:"/cart", element: <ProtectedRoute><Cart/></ProtectedRoute>},
            {path:"/categories", element: <ProtectedRoute><Categories/></ProtectedRoute>},
            {path:"/profile", element: <ProtectedRoute><Profile/></ProtectedRoute>},
            {path:"/details/:id", element: <ProtectedRoute><Details/></ProtectedRoute>},
            {path:"/checkout", element: <ProtectedRoute><Checkout/></ProtectedRoute>},
            {path:"/allorders", element: <ProtectedRoute><AllOrders/></ProtectedRoute>},
            {path:"*", element: <NotFound/>}
        ]
    }])


  return <> 
  {/* <CartContextProvider> */}

   <RouterProvider router={routers}></RouterProvider>
   <Toaster/>
  {/* </CartContextProvider> */}

  </>
}


