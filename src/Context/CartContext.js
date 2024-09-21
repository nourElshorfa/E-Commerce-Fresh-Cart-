import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from 'react-hot-toast'

export let  CartContext = createContext()





let headers = {
  token:localStorage.getItem("userToken")
}

async function addToCart(id){

  let {data} = await  axios.post(
    `https://ecommerce.routemisr.com/api/v1/cart`,
    {
  productId:id
  } ,
  {
  headers:headers
  })
  //  setNumOfCartItems(data.data.numOfCartItems)
  console.log(data);
  
  if (data.status === "success"){
    
        toast.success("Item Added To Cart")
        // setNumOfCartItems(data.data.numOfCartItems)
       }
       else {
        toast.error("Item Not Added To Cart")
       }
       
  
  }



 function getLoggedUserCart(){

 return axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
    headers:headers
  }).then(res => {
    // console.log(res.data.numOfCartItems);
    // setNumOfCartItems(res.data.numOfCartItems)
    return res
  }).catch(err => err)

 
  
  
}
 
function deleteAllCart(){
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart` , {headers}).then(res => res).catch(err => err)
}

function removeCartItem(productId){
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
    headers:headers
    
  }).then(res => res).catch(err => err)
}

function updateProductQuantity(productId , count){
  return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {count} , {headers}).then(res => res).catch(err => err)
}




export default function CartContextProvider (props){

  const [numOfCartItems , setNumOfCartItems] = useState(0)  
  // const [cartId , setCartId] = useState("")
  
  function onlinePayment(shippingAddress){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/66ed635a945e017d6e60655a?url=http://localhost:3000`, {shippingAddress},
      {headers:headers}).then(res => res).catch(err => err)
    }
    
    
    // async function getCart(){
    //   let {data} = await getLoggedUserCart()
    //   console.log(data.cartId);
    //   setCartId(data.cartId)
      
    // }
    
      useEffect( ()=> {
        getLoggedUserCart()
    
      } , []  )

    
    return <CartContext.Provider value={{addToCart , getLoggedUserCart , removeCartItem , updateProductQuantity , deleteAllCart , onlinePayment , numOfCartItems , setNumOfCartItems}}>

      {props.children}
    </CartContext.Provider>
}