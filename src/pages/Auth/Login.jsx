import { Footer, Header } from "../../components";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/Auth/AuthSlice";
import { loaderImg } from "../../assets";

export const Login = () => {
	const [loginFormData, setloginFormData] = useState({
		username: "",
		password: "",
		passType: "password",
		rememberMe: false,
	});
	const dispatch = useDispatch();
	const { error, loading } = useSelector((store) => store.auth);

	// password visibilty handler here
	const passVisibiltyHandler = () => {
		return loginFormData.passType === "password"
			? setloginFormData({ ...loginFormData, passType: "text" })
			: setloginFormData({ ...loginFormData, passType: "password" });
	};

	// Submiting form here
	const formSubmitHandler = (event) => {
		event.preventDefault();
		dispatch(userLogin(loginFormData));
	};

	// To fill test data
	const testCredentialHandler = () => {
		setloginFormData({
			...loginFormData,
			username: "chaupal",
			password: "chaupal@123",
		});
	};

	return (
		<main className="main-container flex flex-col min-h-screen mt-2">
			<Header />
			<section className="content-container flex flex-col justify-center items-center  min-h-screen ">
				<form
					action=""
					className="auth-form flex flex-col h-full rounded p-6 bg-white relative"
					onSubmit={formSubmitHandler}>
					{/* Loader here */}
					{loading && (
						<div className="absolute w-full h-full top-0 bottom-0 z-10 rounded right-0 left-0 flex justify-center items-center ">
							<img src={loaderImg} alt="loader here" />
						</div>
					)}

					<p className="text-4xl font-bold font-primary p-2">Login</p>

					{/* Username section here */}
					<div className="flex items-center border-2 rounded px-2 my-4 relative">
						<MdEmail className="text-xl " />
						<input
							type="text"
							className="bg-inherit w-full outline-none p-2"
							placeholder="Username here"
							value={loginFormData.username}
							onChange={(event) =>
								setloginFormData({
									...loginFormData,
									username: event.target.value,
								})
							}
							required
						/>
						{error.usernameError && (
							<p className="absolute -bottom-5 font-bold left-0 text-red-700 text-xs">
								{error.usernameError}.
							</p>
						)}
					</div>

					{/* Password section here */}
					<div className="flex items-center border-2 rounded px-2 my-4 relative">
						<RiLockPasswordFill className="text-xl" />
						<input
							type={loginFormData.passType}
							className="bg-inherit w-full outline-none p-2"
							placeholder="Password here"
							value={loginFormData.password}
							onChange={(event) =>
								setloginFormData({
									...loginFormData,
									password: event.target.value,
								})
							}
							required
						/>
						{loginFormData.passType === "password" ? (
							<AiFillEyeInvisible
								className="text-xl hover:cursor-pointer"
								onClick={passVisibiltyHandler}
							/>
						) : (
							<AiFillEye
								className="text-xl hover:cursor-pointer"
								onClick={passVisibiltyHandler}
							/>
						)}
						{error.passwordError && (
							<p className="absolute -bottom-5 font-bold left-0 text-red-700 text-xs">
								{error.passwordError}.
							</p>
						)}
					</div>
					<div className="flex items-center my-2">
						<input
							type="checkbox"
							id="remember-me"
							className="mr-2 outline-none"
							checked={loginFormData.rememberMe}
							onChange={() =>
								setloginFormData({
									...loginFormData,
									rememberMe: !loginFormData.rememberMe,
								})
							}
						/>
						<label
							htmlFor="remember-me"
							className=" margin__lr-8px">
							Remember me
						</label>
					</div>
					<button className="btn-primary my-4 p-2 rounded text-lg font-bold">
						Login
					</button>
					<p
						className="underline text-primary hover:cursor-pointer text-center hover:no-underline"
						onClick={() => {
							testCredentialHandler();
						}}>
						Use test credentials
					</p>
				</form>
				<div className="flex flex-col my-4">
					<p>
						Don't have an account?{" "}
						<Link
							to={"/signup"}
							className="underline text-primary hover:cursor-pointer text-center hover:no-underline mx-2">
							Sign up
						</Link>
					</p>
				</div>
			</section>
			<Footer />
		</main>
	);
};
