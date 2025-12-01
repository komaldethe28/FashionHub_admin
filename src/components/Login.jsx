import React, { useState } from 'react'
import axios from 'axios'
import { backendURL } from '../App';

const Login = ({setToken}) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    try{
      e.preventDefault();
      // console.log(email,password);
      const response = await axios.post(backendURL + '/api/user/admin', {email, password})
      // console.log(response);

      if(response.data.success){
        // console.log("Login Successful");
        setToken(response.data.token)

      }else{
        toast.error(response.data.message);
      }

    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }


  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">

          <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Admin Panel
          </h1>

          <form onSubmit={onSubmitHandler} className="space-y-5">

            <div>
              <p className="mb-1 text-gray-600">Email Address</p>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} 
                className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <p className="mb-1 text-gray-600">Password</p>
              <input onChange={(e)=>setPassword(e.target.value)} value={password}
                className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Login
            </button>

          </form>

        </div>
      </div>

    </div>
  )
}

export default Login