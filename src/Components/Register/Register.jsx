import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Register() {

  const [errMsg , setErrorMsg] = useState("")
  const [isLoading , setIsLoading] = useState(false)

  let navigate = useNavigate()
   
   let phoneRegex = /^(?:(?:\+?1\s*(?:[0-9]{3}\s*|[0-9]{3}-)[0-9]{3}\s*[0-9]{4})|\+(?:[0-9] {2,3}\s*|)[0-9]{2,3}\s*[0-9]{3,4}\s*[0-9]{3,4}\s*|([0-9]{2,3}\s*|[0-9]{2,3}-)[0-9]{2,3}\s*[0-9]{3,4}\s*|[0-9]{2,3}\s*[0-9]{3,4}\s*[0-9]{3,4})$/
    
   let validateSchema = yup.object({
    name: yup.string().required("Name is required").min(3,"Name must be more than 3 char").max(10,"Name must be less than 10 char"),
    email: yup.string().required("Email is required").email("Email is not valid"),
    phone:yup.string().required("Phone is required").matches(phoneRegex,"Phone is not valid"),
    password: yup.string().required("Password is required").min(5,"Password must be more than 5 char").max(15,"Password must be less than 15 char"),
    rePassword:yup.string().required("RePassword is required").oneOf([yup.ref("password")],"RePassword is not valid")
   })
  async function submitRegister(values){
    setIsLoading(true)
    let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values).catch(
      (err => {
        setIsLoading(false)
        setErrorMsg(err.response.data.message)
      console.log("not ok");
      })
    )
    if (data.message === "success"){
      console.log("ok");
      
      navigate("/login")
    }
    
    
  }

  // function validate(values){
    
  //   let phoneRegex = /^\+?\d{1,3}?[- ]?\(?(?:\d{2,3})\)?[- ]?\d\d\d[- ]?\d\d\d\d$/
  //   let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  //   let errors = {}

  //   if(!values.name){
  //     errors.name = "Name is required"
  //   }else if (values.name.length < 3){
  //     errors.name = "Name must be more than 3 char"
  //   } else if(values.name.length > 10){
  //     errors.name = "Name must be less than 10 char"
  //   }

  //   if(!values.email){
  //     errors.email = "Email is required"
  //   } else if (!emailRegex.test(values.email)) {
  //     errors.email = "Email is not valid"
  //   }

  //   if(!values.phone){
  //     errors.phone = "Phone is required"
  //   } else if(!phoneRegex.test(values.phone)){
  //     errors.phone = "Phone is not valid"
  //   }



  //   return errors
  // }

  let formik = useFormik({
    initialValues: {
      name:"",
      email:"",
      phone:"",
      password:"",
      rePassword:""
    } , validationSchema: validateSchema,
    onSubmit: submitRegister
    
    
    
  })


  return <>
  <Helmet>
  <title>Register Page</title>
   </Helmet>
  <div className='w-50 mx-auto mb-5 py-5'>
  <h1 className='my-3 '>Register ...</h1>
  {errMsg? <div className='alert alert-danger'>{errMsg}</div>:""}
  
  <form action="" onSubmit={formik.handleSubmit}>

  <label htmlFor="name"  className='h4'> Name:</label>
      <input value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className='form-control w-100 mx-auto p-2 my-2' name='name' id='name' />
      {formik.errors.name && formik.touched.name ? <div className="alert alert-danger p-3">{formik.errors.name}</div>:""}
      

    <label htmlFor="email"  className='h4'> Email:</label>
      <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" className='form-control w-100 mx-auto  p-2 my-2' name='email' id='email' />
      {formik.errors.email && formik.touched.email ? <div className="alert alert-danger p-3">{formik.errors.email}</div>:""}

    <label htmlFor="phone"  className='h4'> Phone:</label>
      <input value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" className='form-control w-100 mx-auto  p-2 my-2' name='phone' id='phone' />
      {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger p-3">{formik.errors.phone}</div>:""}

    <label htmlFor="password"  className='h4'> Password:</label>
      <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control w-100 mx-auto  p-2 my-2' name='password' id='password' />
      {formik.errors.password && formik.touched.password ? <div className="alert alert-danger p-3">{formik.errors.password}</div>:""}

    <label htmlFor="rePassword"  className='h4'> rePassword:</label>
      <input value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control w-100 mx-auto  p-2 my-2' name='rePassword' id='rePassword' />
      {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger p-3">{formik.errors.rePassword}</div>:""}

       <button disabled={! (formik.isValid && formik.dirty)}  type='submit' className='btn main-colorBg text-white my-3 p-2 w-25'>{isLoading ?  <i className='fa fa-spinner fa-2x fa-spin'></i> :  "Register"}</button>
       

      
  </form>
   
  </div>
  
  
  </>
}
