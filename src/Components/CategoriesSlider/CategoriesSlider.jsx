import React, { useEffect, useState } from 'react'
import axios from "axios"
import Slider from "react-slick";


export default function CategoriesSlider() {

  
  const [info , setInfo] = useState([])

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows:true,
    draggable:true,
    autoplay:true,
    autoplaySpeed:2000
 

  };
  async function getCategoriesSlider(){
    let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    setInfo(data.data)
   
  }
  
  useEffect(  ()=> {

    getCategoriesSlider()
  } ,[])
  return <>


 <div className="container">
  <h2>Shop Popular Categories</h2>
<Slider {...settings} >
{info.map( ele=> <div key={ele._id} className="item my-4 px-1">
    <img src={ele.image} height={200} alt="" className='w-100' />
    <h5 className='fw-bold mb-5 mt-2 text-center'>{ele.name}</h5>
  </div> )}

</Slider>
  
  
 </div>

  
  
  </>
}
