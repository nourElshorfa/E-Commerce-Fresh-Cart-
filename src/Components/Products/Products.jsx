import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { useQuery } from 'react-query'
import { FallingLines } from 'react-loader-spinner'
import Style from "./Products.module.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
// import toast from 'react-hot-toast'


export default function Products() {


  let {addToCart} = useContext(CartContext)


 async function addProduct(id){
   let response = await  addToCart(id)
   console.log(response);
  //  if(response?.status === "success"){
  //   toast.success("Item Added To Cart")
  //  }else {
  //   toast.error("Item Not Added To Cart")
  //  }
   
  }

function getProducts(){
  return axios.get("https://ecommerce.routemisr.com/api/v1/products")
}

let {data , isLoading} = useQuery("products" , getProducts , {
  cacheTime: 5000
})





  return <>
 <Helmet>
  <title>Products Page</title>
   </Helmet>
   

   {isLoading ? <div className='d-flex justify-content-center mt-5'>
    <FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
   </div> :  <div className="container my-5 py-5">
<h2 className='text-center fw-bolder bg-secondary-subtle p-3'>Products</h2>

<div className="row my-4">
    
      {data?.data.data.map( product => 
      
  <div key={product._id} className={`col-md-2 p-4 ${Style.card} card border-0 my-3 overflow-hidden`}>
   
   <Link to={`/details/${product._id}`}>
   
      <div className="item my-4">
    <img src={product.imageCover} height={300}  className='w-100' alt="" /> 
    <h6 className='main-color fw-bold my-2'>{product.category.slug}</h6> 
    <p>{product.title.split(" ").slice(0, 2).join(" ")}</p>
    <div className="d-flex justify-content-between">
      <p className='fw-bold'>{product.price} EGP</p>
      <i className={`fa-solid fa-star rating-color`}><span className='text-black fw-light mx-2'>{product.ratingsAverage}</span></i>
    </div>
  </div>
   </Link>

 
  <button onClick={()=> addToCart(product._id) } className={`btn btn-success w-100 ${Style.cartBtn} `}>Add to Cart</button>
    </div>)}
    
</div>

</div>}
 
  </>
  }
