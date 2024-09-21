import React from 'react'
import Style from "./Footer.module.css"

export default function Footer() {




  return  <>
    
  
  <footer className={`${Style.color} fixed-bottom` }> 

  <div className='d-flex justify-content-between bg-secondary-subtle p-3'>

    <div className="footerCaption ms-3  d-flex align-items-center">
     <p className='h6 text-dark fw-bold '> Get Connected With Us On Social Media <i className="fa-solid fa-cart-shopping"></i></p>
    </div>
    
    <div className="socialMediaLinks mx-2  me-3 cursor-pointer d-flex align-items-center">
    <i className="fa-brands fa-facebook mx-2 text-dark fs-5 "></i>
    <i className="fa-brands fa-twitter mx-2 text-dark fs-5"></i>
    <i className="fa-brands fa-google mx-2 text-dark fs-5"></i>
    <i className="fa-brands fa-instagram mx-2 text-dark fs-5"></i>
    <i className="fa-brands fa-linkedin mx-2 text-dark fs-5"></i>
    <i className="fa-brands fa-github mx-2 text-dark fs-5"></i>
    </div>
</div>
  {/* <div className="container-fluid bg-dark">

    <div className={`bg-dark row g-0  p-1`}>  
        <div className="col-md-3 text-warning py-2" >
            <h4>Fresh Cart</h4>
            <hr className={`${Style.hr}`}/>
            <p className='lead'>E-commerce is a powerful means to connect  the unconnected to global trade. My vision is to build   all aspects of business online.</p>
        </div>

        <div className="col-md-3 text-warning py-2">
            <h4>Products</h4>
            <hr className={`${Style.hr}`}/>
            <p>Bootstrap</p>
            <p>Tailwind</p>
            <p>React</p>
            <p>NodeJs</p>
        </div>

        <div className="col-md-3 text-warning py-2">
            <h4>Useful Links</h4>
            <hr className={`${Style.hr}`}/>
            <p>Your Account</p>
            <p>Shipping Rates</p>
            <p>Help</p>
           
        </div>

        <div className="col-md-3 text-warning py-2">
            <h4>Contact</h4>
            <hr className={`${Style.hr}`}/>
            <div className={`d-flex flex-column ${Style.text}`}>

            <i className="fa-solid fa-house my-2"><span className={`${ Style.text} ms-2 text-lowercase`}>Dubai</span></i>
            <i className="fa-solid fa-envelope my-2"><span className='ms-2'>FreshCart@gmail.com</span></i>
            <i className="fa-solid fa-phone my-2"><span className='ms-2'>+212 011 287 908</span></i>
            <i className="fa-solid fa-fax my-2"><span className='ms-2'>+212 011 287 908</span></i>
            </div>
        </div>
    </div>
</div> */}
  </footer>


   
 
  </>

 

}

