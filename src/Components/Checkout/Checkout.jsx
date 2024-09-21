import { useFormik } from 'formik'
import React, { useContext } from 'react'
import * as yup from "yup"
import { CartContext } from '../../Context/CartContext'


export default function Checkout() {


   let {onlinePayment} = useContext(CartContext)


  let phoneRegex = /^(?:(?:\+?1\s*(?:[0-9]{3}\s*|[0-9]{3}-)[0-9]{3}\s*[0-9]{4})|\+(?:[0-9] {2,3}\s*|)[0-9]{2,3}\s*[0-9]{3,4}\s*[0-9]{3,4}\s*|([0-9]{2,3}\s*|[0-9]{2,3}-)[0-9]{2,3}\s*[0-9]{3,4}\s*|[0-9]{2,3}\s*[0-9]{3,4}\s*[0-9]{3,4})$/

  let validationSchema = yup.object({
    details: yup.string().required("Details is required").min(3,"Details must be more than 3 char").max(100,"Details must be less than 100 char"),
    phone:yup.string().required("Phone is required").matches(phoneRegex,"Phone is not valid"),
    city: yup.string().required("City is required").min(3,"City must be more than 3 char").max(15,"City must be less than 15 char"),

  })
  async function payment(values){
    console.log(values);
    let {data} = await onlinePayment(values)
    console.log(data.session.url);
    window.location.href = data.session.url
    
  }

   let formik = useFormik({

    initialValues:{ 
      details: "",
      phone: "",
      city: ""
      
    }, validationSchema:validationSchema,onSubmit: payment
   })

  return <>
      
      <div className="w-75 mx-auto bg-body-secondary my-4 p-4">
            <h2 className='main-color'>Shipping Address</h2>
            <form onSubmit={formik.handleSubmit}>

              <div className="form-group mb-3">
                <label htmlFor="details" className='mb-2'>Details:</label>
                <input type="text" className='form-control' id="details" name="details" onChange={formik.handleChange} value={formik.values.details} onBlur={formik.handleBlur} placeholder='Enter Details' />
                {formik.errors.details && formik.touched.details ? <div className="alert alert-danger p-3">{formik.errors.details}</div>:""}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone" className='mb-2'>Phone:</label>
                <input type="tel" className='form-control' id="phone" name="phone" onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} placeholder='Enter Your Mobile Number' />
                {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger p-3">{formik.errors.phone}</div>:""}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="city" className='mb-2'>City:</label>
                <input type="text" className='form-control' id="city" name="city" onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur} placeholder='Enter Your City' />
                {formik.errors.city && formik.touched.city ? <div className="alert alert-danger p-3">{formik.errors.city}</div>:""}
              </div>

              <button  disabled={! (formik.isValid && formik.dirty)}  type='submit' className='btn btn-success w-25' onClick={()=> formik.handleSubmit()}>Go To Payment</button>
            </form>

           
      </div>
  
  
  </>
}
