import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import { BiLogInCircle } from "react-icons/bi"
import { logo } from '../../assets'

export const Header = () => {
    return (
        <nav className="main-header flex justify-between items-center fixed top-0 w-full py-4 px-8 border-b-2 bg-inherit z-10">
            <Link to={"/home"} className="flex items-center ">
                <img src={logo} alt="logo" className="w-10 mx-2" />
                <h1 className="font-primary text-2xl text-left  mx-2 text-primary font-bold">चौपाल</h1>
            </Link>
            <div>
                <form action="" onSubmit={(event) => event.preventDefault()} className="flex justify-center items-center border-2 rounded">
                    <FaSearch className="mx-2" />
                    <input type="text" placeholder="Search here" className='p-2 outline-none bg-inherit' />
                </form> 
            </div>
            <div>
                <Link to={"/login"} className="flex justify-center items-center p-2 rounded btn-primary text-lg font-bold text-center">
                    <BiLogInCircle className="mx-1" /> <p className="mx-1">Login</p>
                </Link>
            </div>
        </nav>

    )
}
