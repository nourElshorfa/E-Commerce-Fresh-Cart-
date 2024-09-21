import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Grid } from 'react-loader-spinner'
import { CartContext } from '../../Context/CartContext'



export default function Details() {

  let params = useParams()

  let {addToCart} = useContext(CartContext)




// use Query
function getDetails(id) {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

let {data , isLoading} = useQuery("details" , () => getDetails(params.id) , {
  cacheTime: 5000
})

// console.log(data?.data.data);

  
  return <>

  
  {isLoading ? <div className='d-flex justify-content-center mt-5  align-items-center'>
    <Grid
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />
   </div>
  
   : <div className='container py-5 my-4'> 
    <div className="row my-4 py-4 align-items-center">
      <div className="col-md-4">
    <img src={data?.data.data.imageCover} alt={data?.data.data.title} className='w-100' />
      </div>

      <div className="col-md-8">
      <h2 className='h5'>{data?.data.data.title}</h2>
      <p >{data?.data.data.description}</p>
      <h5 className='main-color'>{data?.data.data.category.name}</h5>
      <div className="d-flex justify-content-between">

      <h3 className='h5 main-color'>Price: ${data?.data.data.price}</h3>
      <i className={`fa-solid fa-star rating-color`}><span className='text-black fw-light mx-2'>{data?.data.data.ratingsAverage}</span></i>

      </div>
      <button onClick={() => addToCart(data?.data.data._id)} className={`btn btn-success w-100 my-3 `}>Add to Cart</button>
      </div>
    </div>

  </div>}

  </>
}
