import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { backendURL, currency } from '../App'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    if (!token) {
      console.log('No token available')
      return null
    }
    try {
      console.log('Fetching orders from:', backendURL + '/api/order/list')
      const response = await axios.post(backendURL + '/api/order/list', {}, { headers: { token } })

      if (response.data.success) {
        setOrders(response.data.orders)
      } else {
        console.error('Failed to fetch orders:', response.data.message)
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendURL + '/api/order/status', { orderId, status: event.target.value }, { headers: { token } })
      if (response.data.success) {
        toast.success('Order status updated')
        await fetchOrders()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(() => {
    if (token) {
      fetchOrders()
    }
  }, [token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order, index) => (
            <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-4 border p-4 rounded'>
              <div className='flex items-start gap-4'>
                <img src={assets.parcel_icon} alt="parcel" className='w-12' />
                <div className='flex-1'>
                  <div>
                    {order.items.map((item, itemIndex) => (
                      <p key={itemIndex}>
                        {item.name} x {item.quantity} <span className='text-gray-600'>{item.size}</span>
                      </p>
                    ))}
                  </div>
                  <p className='mt-2'>{order.address.firstName + " " + order.address.lastName}</p>
                  <div className='text-sm text-gray-600 mt-1'>
                    <p>{order.address.street + ", "}</p>
                    <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipCode}</p>
                  </div>
                  <p className='text-sm'>{order.address.phoneNumber}</p>
                </div>
              </div>
              <div className='grid grid-cols-4 gap-4 mt-4 text-sm'>
                <div>
                  <p className='text-gray-600'>Items</p>
                  <p>{order.items.length}</p>
                </div>
                <div>
                  <p className='text-gray-600'>Method</p>
                  <p>{order.paymentMethod}</p>
                </div>
                <div>
                  <p className='text-gray-600'>Payment</p>
                  <p>{order.payment ? 'Done' : 'Pending'}</p>
                </div>
                <div>
                  <p className='text-gray-600'>Date</p>
                  <p>{new Date(order.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <p className='text-lg font-semibold'>{currency} {order.amount}</p>
                
                <select onChange={(event)=>statusHandler(event, order._id)} value={order.status} className='border px-3 py-1 rounded'>
                  <option value="OrderPlaced">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders