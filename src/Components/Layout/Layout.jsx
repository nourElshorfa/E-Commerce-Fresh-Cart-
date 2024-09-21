import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { UserContext } from '../../Context/UserContext'
import { Offline} from "react-detect-offline";
import Style from "./Layout.module.css"

export default function Layout() {

  let {setUserToken} = useContext(UserContext)

  useEffect( ()=> {
      if (localStorage.getItem("userToken") !== null)
      {
          setUserToken(localStorage.getItem("userToken"))
      }

  } , []);
  
  return <>
    
   <Navbar/>
   <Outlet></Outlet>
   <Footer/>
    {/* <Online>
    <div className={`${Style.online}`}>
   <i className='fas fa-wifi text-capitalize'> You Are Online </i> 
  </div>
    </Online> */}
    <Offline>
   <div className={`${Style.offline}`}>
   <i className='fas fa-wifi text-capitalize'> You Are Offline </i> 
  </div>
    </Offline>
  
  </>
}
