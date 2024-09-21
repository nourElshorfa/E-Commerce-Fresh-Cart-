import React from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'

export default function Brands() {


  async function getBrands(){

    return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    
    
  }

  let {data , isLoading} = useQuery("brands" , getBrands , {
    cacheTime: 3000
  })
  // console.log(data?.data.data);
  
  return <>
  <Helmet>
  <title>Brands Page</title>
   </Helmet>

   {isLoading ? <div className='d-flex justify-content-center mt-5'>
    <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
   </div> : <div className="container py-5">
   <h2 className='text-center fw-bolder bg-secondary-subtle p-3'>Brands</h2>
    <div className="row g-5 my-3">
          {data?.data.data.map( (card)=> 
      <div key={card._id} className="col-md-3 my-4 cursor-pointer">
        <div className="card">
    
          <img src={card.image} className='w-100' alt="" />

        </div>
      </div>
             )  }
    </div>
   </div>
  }

   
  
  </>
}
