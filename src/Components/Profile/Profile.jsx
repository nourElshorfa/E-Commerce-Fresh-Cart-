import React from 'react'
import { jwtDecode } from 'jwt-decode';
import Style from "./Profile.module.css"

export default function Profile() {

  let encodedToken = localStorage.getItem("userToken")
  let decodedToken = jwtDecode(encodedToken)
  console.log(decodedToken);
  


  return <>
  <section>

    <div className='bg-dark py-3 ps-3'>
    


  <h1 className='text-warning'>Account</h1>
  <h2 className='text-warning'>Welcome {decodedToken.name}!</h2>

    
    <i className="fa-solid fa-wallet text-info"></i> <span className='text-info lead'>Fresh Cart Credit Balance: EGP 0.00</span>
    
      </div>
 

    <div className='bg-secondary-subtle'>
      <p className='h4 ms-3 ps-3 py-3'>My Fresh Cart Account</p>
    </div>

 
    
    <div className='ms-3 d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i className="fa-solid fa-box"><span className='ms-3'>My Orders</span></i> 
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    
    </div>

    <div className='ms-3 my-2  d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i class="fa-regular fa-envelope"><span className='ms-3 fw-bold'>Inbox</span></i>
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    </div>
    <div className='ms-3 my-2 d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i class="fa-regular fa-comment"><span className='ms-3 fw-bold'>Ratings & Reviews</span></i>
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    </div>
    <div className='ms-3 my-2 d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i className="fa-solid fa-ticket"><span className='ms-3'>Vouchers</span></i> 
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    </div>
    <div className='ms-3 my-2 d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i className="fa-solid fa-heart"><span className='ms-3'>Saved Items</span></i> 
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    </div>
    <div className='ms-3 my-2 d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i className="fa-solid fa-industry"><span className='ms-3'>Follow Seller</span></i> 
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    </div>
    <div className='ms-3 my-2 d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i className="fa-solid fa-clock-rotate-left"><span className='ms-3'>Recently Viewed</span></i> 
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    </div>
    <div className='ms-3 my-2 d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i className="fa-solid fa-folder-tree"><span className='ms-3'>Recently Searched</span></i> 
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    </div>

    <div className='bg-secondary-subtle'>
    <p className='h4 ms-3 ps-3 py-3'>My Settings</p>
    </div>

    <div className='ms-3 my-2 d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i className="fa-solid fa-book-open"><span className='ms-3'>Address Book</span></i> 
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    </div>
    <div className='ms-3 my-2 d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i className="fa-solid fa-receipt"><span className='ms-3'>Account Managment</span></i> 
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    </div>
    <div className='ms-3 my-2 d-flex align-items-center justify-content-between py-2 border-bottom'>
    <i className="fa-solid fa-xmark "><span className='ms-3'>Close Account</span></i> 
    <i className={`${Style.arrow} fa-solid fa-arrow-right fs-3 me-5`}></i>
    </div>
    

  </section>

  </>
}
