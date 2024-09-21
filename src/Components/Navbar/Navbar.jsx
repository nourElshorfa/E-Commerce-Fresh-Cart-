import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'





export default function Navbar() {

 

  let {userToken , setUserToken} =  useContext(UserContext)
 let {numOfCartItems } = useContext(CartContext)
 

  let navigate = useNavigate()

  function logOut(){
    localStorage.removeItem("userToken")
    setUserToken(null)
    navigate("/login")

  }

 

  return <>

  

  <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
   <div className="container-fluid">
   <Link className="navbar-brand" to="/"><i className="fa-solid fa-cart-shopping main-color"><span className='text-black text-capitalize'> Fresh Cart</span></i></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
     {userToken !== null ?  <>
     <li className="nav-item">
        <Link className="nav-link fw-bold" to="/products">Products</Link>
      </li>
   
      <li className="nav-item">
        <Link className="nav-link fw-bold" to="/brands">Brands</Link>
      </li>
  
      <li className="nav-item">
        <Link className="nav-link fw-bold" to="/profile">Profile</Link>
      </li>
  
     </>
       : "" }


    
     
    </ul>

    <ul className="navbar-nav ms-auto">
   
      <li className="nav-item d-flex align-items-center cursor-pointer">
        <i className='fab fa-facebook mx-2 h5 '></i>
        <i className='fab fa-twitter  mx-2 h5'></i>
        <i className='fab fa-tiktok  mx-2 h5'></i>
        <i className='fab fa-youtube  mx-2 h5'></i>
        <i className='fab fa-instagram  mx-2 h5'></i>
      </li>

      {userToken !== null ? <>
<li className="nav-item">
        <span className="nav-link h5 fw-bold cursor-pointer" onClick={ ()=> logOut()}>Logout</span>
      </li>
      
      <li className="nav-item position-relative">
        <Link className="nav-link fw-bold" to="/cart"> 
        <i className='fa fa-cart-shopping'></i>
        <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${numOfCartItems === 0 ? "d-none" : ""}`}>{numOfCartItems}</span>
        </Link>
      </li>
</> : 
    <>
    <li className="nav-item">
        <Link className="nav-link h5 fw-bold" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link h5 fw-bold" to="/register">Register</Link>
      </li>
    </>}


    
    
   
  
    </ul>
   
  </div>
   </div>
 
</nav>
  
  
  </>
}
