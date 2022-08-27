import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi"
import { logo } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { userSignOut } from '../../features/Auth/AuthSlice'

export const Header = () => {

    const { authToken } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(userSignOut());
        navigate("/");
    }

    return (
		<nav className="main-header flex justify-between items-center fixed left-0 top-0 w-full py-4 px-4 md:px-8 border-b-2 bg-inherit z-10">
			<Link to={authToken ? "/home" : "/"} className="flex items-center ">
				<img src={logo} alt="logo" className="w-10" />
				<h1 className="font-primary text-2xl text-left  mx-2 text-primary font-bold">
					चौपाल
				</h1>
			</Link>
			<div className="hidden">
				{authToken && (
					<form
						action=""
						onSubmit={(event) => event.preventDefault()}
						className="justify-center items-center border-2 rounded hidden sm:flex"
					>
						<FaSearch className="mx-2" />
						<input
							type="text"
							placeholder="Search here"
							className="p-2 outline-none bg-inherit"
						/>
					</form>
				)}
			</div>
			<div>
				{authToken ? (
					<button
						className="flex justify-center items-center p-2 rounded btn-secondary-outline font-bold"
						onClick={logoutHandler}
					>
						<BiLogOutCircle className="mx-1" />
						Logout
					</button>
				) : (
					<Link
						to={"/login"}
						className="flex justify-center items-center p-2 rounded btn-primary text-lg font-bold text-center"
					>
						<BiLogInCircle className="mx-1" />{" "}
						<p className="mx-1">Login</p>
					</Link>
				)}
			</div>
		</nav>
	);
}
