import React from 'react'
import MainSlider from '../MainSlider/MainSlider'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import { Helmet } from 'react-helmet'
import Products from '../Products/Products'
// import { CartContext } from '../../Context/CartContext'


export default function Home() {

  // let {addToCart} = useContext(CartContext)

  // async function addProduct(){
  //   let x = await addToCart()
  // }

  return <>
  <Helmet>
  <title>Home Page</title>
   </Helmet>
   {/* <button onClick={ ()=> addProduct() }></button> */}
 
   <MainSlider/>
   <CategoriesSlider/>
   <Products/>
  
  </>
}
