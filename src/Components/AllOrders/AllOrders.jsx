import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function AllOrders() {

   const [orders , setOrders] = useState([])
   const [isLoading, setIsLoading] = useState(true);

  let headers = {
    token:localStorage.getItem("userToken")
  }

   async function getOrders() {
        let {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders" , {headers: headers})
        // console.log(data.data);
        setOrders(data.data)
        setIsLoading(false)
        
    }

    useEffect(() => {
        getOrders()
    }, [])
    
    return (
      <>
        <div className="container">
          {isLoading ? (
            <div className="bg-info p-5 my-5 text-center text-white">
              <h2>Loading Orders...</h2>
            </div>
          ) : (
            <div className="bg-success p-5 my-5 text-center text-white">
              <h2 className="mb-3">Congrats!</h2>
              {orders.length > 0 ? ( // Check if orders exist before mapping
                orders.map((order) =>  <div key={order.id} className='text-center align-items-center d-flex justify-content-between my-2 bg-secondary-subtle text-black p-3'>
                    { console.log(order)}
                     
                    <h4>Order Id: {order.id}</h4>
                    <h4>User: <span className='main-color'> {order.user.name.split(" ").slice(0, 1).join(" ")}</span></h4>
                    <h4>Total Price: {order.totalOrderPrice}</h4>
                    <h4>Payment Method:{order.paymentMethodType}</h4>
                    <hr />

                  </div>
                   
                 
                )
              ) : (
                <p>No orders found.</p> // Display message if no orders
              )}
            </div>
          )}
        </div>
      </>
    );
  }