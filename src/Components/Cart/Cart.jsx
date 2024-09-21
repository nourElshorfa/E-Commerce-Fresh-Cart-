import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { CartContext } from '../../Context/CartContext'
import { InfinitySpin } from 'react-loader-spinner'
import Style from "./Cart.module.css"
import { Link } from 'react-router-dom'


export default function Cart() {



   let {getLoggedUserCart , removeCartItem , updateProductQuantity , deleteAllCart , numOfCartItems , setNumOfCartItems} = useContext(CartContext)


    const [cart , setCart] = useState([])
    const [isLoading , setIsLoading] = useState(false)

 

    async function deleteCart(){

      let {data} = await deleteAllCart()
      setCart(data)
      setNumOfCartItems(data.numOfCartItems)
    }

   async function updateItem(id , count){

     let {data} = await updateProductQuantity(id , count)
     setCart(data)
   
    }
   async function removeItem(id) {
      let {data} = await removeCartItem(id)
      setCart(data)
      setNumOfCartItems(data.numOfCartItems)
    }
  async function getCart(){
    setIsLoading(true)
    let {data} = await getLoggedUserCart()
    setCart(data)
    setNumOfCartItems(data.numOfCartItems)
    setIsLoading(false)
    console.log(data);
   }

 
    useEffect( ()=> {
      getCart()
    }  , [])
 
  return <>
  <Helmet>
  <title>Cart Page</title>
   </Helmet>
     

     {isLoading ? <div  className='mt-5 d-flex justify-content-center align-items-center'>

      <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
     
     </div> 
      :     <div className="w-75 mx-auto bg-main-light my-5 py-5">
      <div className="row bg-secondary-subtle p-5 g-3">
       <h1 className='fw-bolder'>Shop Cart </h1>

      
       
          <h2 className='main-color'>Total Price is : {cart?.data?.totalCartPrice}</h2>
          <h2 className='main-color'>Total Items : {cart?.numOfCartItems}</h2>
          <hr />
           
        {cart?.data?.products?.map( (product)=> <>
        
        
          <div  key={product._id} className="col-md-1"  >
            <img src={product.product.imageCover} alt=""  className='w-100 h-100'/>
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">

            <h3 >{product.product.title.split(" ").slice(0, 2).join(" ")}</h3>
            <p className='main-color h4'>{product.price} EGP</p>
            <p className='h4'> {product.count} Items</p>
            <button onClick={() => removeItem(product.product._id)} className={`btn btn-danger ${Style.remove} rounded-4`}><i className="fa-solid fa-trash-can"></i> <span className='ms-2'>Remove</span></button>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center p-4">
           <button onClick={ ()=> updateItem(product.product._id , product.count + 1)  } className='btn btn-success rounded-4'> <i className="fa-solid fa-plus "></i> </button>
          <h3 className='mx-3'>{product.count}</h3>
          <button onClick={ ()=> updateItem(product.product._id , product.count - 1  )} className='btn btn-danger rounded-4'><i className="fa-solid fa-minus"></i></button>
          

            
          </div>
          <hr className='bg-dark'/>
        </>    )}
           <div className='d-flex flex-column'>

        <button  onClick={deleteCart} className='btn btn-danger w-25'>Clear Cart</button>
       <Link to={"/checkout"}><button className='btn btn-success w-25 my-2'>Checkout</button></Link>
           </div>
     
      </div>
    </div>}
   

  
  </>
}
