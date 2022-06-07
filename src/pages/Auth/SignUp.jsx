import { Footer, Header, NewPostCard } from '../../components'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./Auth.css"

export const SignUp = () => {

  const [loginFormData, setloginFormData] = useState({
    username:"",
    email: "",
    password: "",
    passType: "password"
  })

  return (
    <main className="main-container flex flex-col min-h-screen">
      <Header />
      <section className="content-container flex flex-col justify-center items-center  min-h-screen ">
        <form action="" className='auth-form flex flex-col h-full rounded p-6 bg-white'>
          <p className='text-4xl font-bold font-primary p-2'>Sign Up</p>
          <div className='flex items-center border-2 rounded px-2 my-4'>
            <FaUserCircle className='text-xl ' />
            <input type="text" className='bg-inherit w-full outline-none p-2' placeholder='Username here' />
          </div>
          <div className='flex items-center border-2 rounded px-2 my-4'>
            <MdEmail className='text-xl ' />
            <input type="text" className='bg-inherit w-full outline-none p-2' placeholder='Email here' />
          </div>
          <div className='flex items-center border-2 rounded px-2 my-4'>
            <RiLockPasswordFill className='text-xl' />
            <input type="text" className='bg-inherit w-full outline-none p-2' placeholder='Password here' />
            <AiFillEyeInvisible className='text-xl hover:cursor-pointer' />
          </div>
          <div className="flex items-center my-2">
            <input type="checkbox" id="remember-me" required className='mr-2 outline-none' />
            <label htmlFor="remember-me" className=" margin__lr-8px">I agree to all the Terms & Conditions</label>
          </div>
          <button className="btn-primary my-4 p-2 rounded text-lg font-bold">Sign Up</button>
        </form>
        <div className="flex flex-col my-4">
          <p>Already have an account? <Link to={"/login"} className="underline text-primary hover:cursor-pointer text-center hover:no-underline mx-2">Login here</Link></p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
