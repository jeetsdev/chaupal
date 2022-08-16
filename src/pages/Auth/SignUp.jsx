import { Footer, Header } from "../../components";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsKeyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";
import { loaderImg } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validatePassword } from "../../utils";
import toast from "react-hot-toast";
import { userSignUp } from "../../features/Auth/AuthSlice";

export const SignUp = () => {
	const [signUpFormData, setSignUpFormData] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
		passType: "password",
		avatar: "https://res.cloudinary.com/dz7duml2h/image/upload/v1654790981/End-User-08_lsvghb.svg",
	});
	const dispatch = useDispatch();
	const { loading } = useSelector((store) => store.auth);

	// password visibilty handler here
	const passVisibiltyHandler = () => {
		return signUpFormData.passType === "password"
			? setSignUpFormData({ ...signUpFormData, passType: "text" })
			: setSignUpFormData({ ...signUpFormData, passType: "password" });
	};

	// Validating email and password
	const validateEmailAndPass = (email, password) => {
		if (validateEmail(email) && validatePassword(password)) {
			return true;
		} else if (!validateEmail(email)) {
			toast.error("Enter a valid email");
		} else if (!validatePassword(password)) {
			toast.error("Password must include a number, Minimum 6 char");
		}
	};

	// Submiting form here
	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (
			validateEmailAndPass(signUpFormData.email, signUpFormData.password)
		) {
			dispatch(userSignUp(signUpFormData));
		}
	};

	const testCredentialHandler = () => {
		setSignUpFormData({
			...signUpFormData,
			fullName: "Mr. Wayne",
			username: "wayne",
			email: "wayne@darkworld.none",
			password: "wayne@123",
		});
	};

	return (
		<main className="main-container flex flex-col min-h-screen">
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

					<p className="text-4xl font-bold font-primary p-2">
						Sign Up
					</p>

					{/*Full name here  */}
					<div className="flex items-center border-2 rounded px-2 my-4">
						<FaUserCircle className="text-xl " />
						<input
							type="text"
							className="bg-inherit w-full outline-none p-2"
							placeholder="Your name here"
							value={signUpFormData.fullName}
							onChange={(event) =>
								setSignUpFormData({
									...signUpFormData,
									fullName: event.target.value,
								})
							}
							required
						/>
					</div>

					{/* Username section here */}
					<div className="flex items-center border-2 rounded px-2 my-4">
						<BsKeyFill className="text-xl " />
						<input
							type="text"
							className="bg-inherit w-full outline-none p-2"
							placeholder="Username here"
							value={signUpFormData.username}
							onChange={(event) =>
								setSignUpFormData({
									...signUpFormData,
									username: event.target.value,
								})
							}
							required
						/>
					</div>

					{/* Email section here */}
					<div className="flex items-center border-2 rounded px-2 my-4">
						<MdEmail className="text-xl " />
						<input
							type="email"
							className="bg-inherit w-full outline-none p-2"
							placeholder="Email here"
							value={signUpFormData.email}
							onChange={(event) =>
								setSignUpFormData({
									...signUpFormData,
									email: event.target.value,
								})
							}
							required
						/>
					</div>

					{/* Password section here */}
					<div className="flex items-center border-2 rounded px-2 my-4">
						<RiLockPasswordFill className="text-xl" />
						<input
							type={signUpFormData.passType}
							className="bg-inherit w-full outline-none p-2"
							placeholder="Password here"
							value={signUpFormData.password}
							onChange={(event) =>
								setSignUpFormData({
									...signUpFormData,
									password: event.target.value,
								})
							}
							required
						/>
						{signUpFormData.passType === "password" ? (
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
					</div>

					<div className="flex items-center my-2">
						<input
							type="checkbox"
							id="remember-me"
							required
							className="mr-2 outline-none"
						/>
						<label
							htmlFor="remember-me"
							className=" margin__lr-8px">
							I agree to all the Terms & Conditions
						</label>
					</div>
					<button className="btn-primary my-4 p-2 rounded text-lg font-bold">
						Sign Up
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
						Already have an account?{" "}
						<Link
							to={"/login"}
							className="underline text-primary hover:cursor-pointer text-center hover:no-underline mx-2">
							Login
						</Link>
					</p>
				</div>
			</section>
			<Footer />
		</main>
	);
};
