import { Footer, Header } from '../../components'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./Auth.css"

export const Login = () => {

    const [loginFormData, setloginFormData] = useState({
        email: "",
        password: "",
        passType: "password"
    })

    const [rememberMe, setRememberMe] = useState(false);

    return (
        <main className="main-container flex flex-col min-h-screen">
            <Header />
            <section className="content-container flex flex-col justify-center items-center  min-h-screen ">
                <form action="" className='auth-form flex flex-col h-full rounded p-6 bg-white'>
                    <p className='text-4xl font-bold font-primary p-2'>Login</p>
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
                        <label htmlFor="remember-me" className=" margin__lr-8px">Remember me</label>
                    </div>
                    <button className="btn-primary my-4 p-2 rounded text-lg font-bold">Login</button>
                    <p className="underline text-primary hover:cursor-pointer text-center hover:no-underline" onClick={() => { }}>Use test credentials</p>
                </form>
                <div className="flex flex-col my-4">
                    <p>Don't have an account? <Link to={"/signup"} className="underline text-primary hover:cursor-pointer text-center hover:no-underline mx-2">Sign up</Link></p>
                    <Link to={"/forgot"} className="underline text-primary m-auto hover:no-underline hover:cursor-pointer">Forgot password?</Link>
                </div>
            </section>
            <Footer />
        </main>
    )
}
