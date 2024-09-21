import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { UserContext } from '../../Context/UserContext'
import { Helmet } from 'react-helmet'


export default function Login() {
  let navigate = useNavigate()

  let {setUserToken} = useContext(UserContext)

  



  const [errMsg , setErrorMsg] = useState("")
  const [isLoading , setIsLoading] = useState(false)
  async function submitLogin(values){

    setIsLoading(true)
    
    let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values).catch(
      (err => {
        setIsLoading(false)
        setErrorMsg(err.response.data.message)})
    )
    
    if (data.message === "success"){
      localStorage.setItem("userToken",data.token)
      console.log(data.token);
      setUserToken(data.token)
      navigate("/")
    }
    
  }

  let validateSchema = yup.object({
   
    email: yup.string().required("Email is required").email("Email is not valid"),
    password: yup.string().required("Password is required").min(5,"Password must be more than 5 char").max(15,"Password must be less than 15 char"),
   
   })

  let formik = useFormik({
    initialValues: {
      email:"",
      password:""
    },validationSchema : validateSchema , onSubmit : submitLogin
    
  })



  return <>
  <Helmet>
  <title>Login Page</title>
   </Helmet>
  <div className='w-50 mx-auto'>
  <h1 className='my-3 '>Login ... </h1>
  {errMsg? <div className='alert alert-danger'>{errMsg}</div>:""}
  <form action="" onSubmit={formik.handleSubmit}>
  <label htmlFor="email"  className='h4'> Email:</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" className='form-control w-100 mx-auto p-2 my-2' name='email' id='email' />

    <label htmlFor="password"  className='h4'> Password:</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control w-100 mx-auto  p-2 my-2' name='password' id='password' />

      <button disabled={! (formik.isValid && formik.dirty)}  type='submit' className='btn main-colorBg text-white my-3 p-2 w-25'>
        {isLoading? <i className='fa fa-spinner fa-2x fa-spin'></i> : "Login Now"}
      </button>
      </form>
   </div>
  
  
  </>
}
