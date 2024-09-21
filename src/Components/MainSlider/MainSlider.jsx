import React from 'react'
import Slider from "react-slick";
import img1 from "../../Assets/Images/slider-image-1.jpeg"
import img2 from "../../Assets/Images/slider-image-2.jpeg"
import img3 from "../../Assets/Images/slider-image-3.jpeg"


export default function MainSlider() {
  
    let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    draggable:true,
    autoplay:true,
    autoplaySpeed:2000

  };

  
  return <>
 

 <div className="container my-5">
  <div className="row g-0">
    <div className="col-md-8">
    <Slider {...settings} >
   
        <img src={img3} alt="" height={500} />
        <img src={img1} alt="" height={500}/>
        <img src={img2} alt="" height={500} />
  
    </Slider>
    </div>
    <div className="col-md-4">
      <img src={img1} className='w-100' alt="" height={250} />
      <img src={img2} className='w-100' alt="" height={250}/>

    </div>
  </div>
 </div>
  
  </>
}
