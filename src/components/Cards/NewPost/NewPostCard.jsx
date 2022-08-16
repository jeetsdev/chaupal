import { FaRegImages } from "react-icons/fa";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { BsEmojiSmile, BsEmojiNeutral } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { createNewPost } from "../../../features/Post/PostSlice";
import toast from "react-hot-toast";
import { EmojiPicker } from "../../EmojiPicker/EmojiPicker";

export const NewPostCard = () => {
	const { userData, authToken } = useSelector((state) => state.auth);
	const { allUsers } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [postData, setPostData] = useState({
		content: "",
		postImg: "",
	});
	const [showEmojiPicker, setShowEomjiPicker] = useState(false);

	// Getting refrence of input box
	const inputRef = useRef(null);

	// Getting current post user details
	const currentPostUser = allUsers.find(
		(user) => user.username === userData.username,
	);

	// Image click handler here
	const postImageHandler = (event) => {
		const reader = new FileReader();
		reader.onload = () => {
			setPostData({ ...postData, postImg: reader.result });
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	const postSubmitHandler = (event) => {
		event.preventDefault();
		setShowEomjiPicker((prev) => false);
		if (postData.content !== "") {
			dispatch(createNewPost({ postData, authToken }));
			setPostData({ ...postData, content: "", postImg: "" });
		} else {
			toast.error("Post can't be empty");
		}
	};

	useEffect(() => {});

	return (
		<main className="flex rounded bg-white p-4 mx-4 md:mx-8 my-6 relative">
			<section>
				<img
					src={currentPostUser?.avatar}
					alt=""
					className="w-10 h-10 rounded-full p-px border-2 object-cover mr-4"
				/>
			</section>
			<form className="w-full" onSubmit={postSubmitHandler}>
				<div className="w-full min-w-full p-2 bg-inherit border-2 rounded">
					<textarea
						type="text"
						className="w-full min-w-full p-2 bg-inherit  rounded outline-none resize-none"
						placeholder="What's happening...?"
						value={postData.content}
						ref={inputRef}
						onChange={(event) =>
							setPostData({
								...postData,
								content: event.target.value,
							})
						}
					/>
					<div className="relative ">
						{postData?.postImg && (
							<div>
								<img
									src={postData?.postImg}
									alt=""
									className="w-full max-h-200p rounded"
								/>
								<span
									className="absolute bottom-2 left-2 cursor-pointer"
									onClick={() =>
										setPostData({
											...postData,
											postImg: "",
										})
									}>
									<IoRemoveCircleSharp className="text-red-500 text-2xl" />
								</span>
							</div>
						)}
					</div>
				</div>
				<div className="flex py-4">
					<div className="flex text-xl relative">
						<div className="flex">
							<label htmlFor="new-post-img">
								<FaRegImages className="cursor-pointer" />
							</label>
							<input
								type="file"
								id="new-post-img"
								accept="image/png, image/jpeg, image/jpg"
								className="hidden"
								onInput={postImageHandler}
							/>
						</div>
						{showEmojiPicker ? (
							<BsEmojiSmile
								className="hover:cursor-pointer ml-4"
								onClick={() =>
									setShowEomjiPicker((prev) => !prev)
								}
							/>
						) : (
							<BsEmojiNeutral
								className="hover:cursor-pointer ml-4"
								onClick={() =>
									setShowEomjiPicker((prev) => !prev)
								}
							/>
						)}
						{showEmojiPicker && (
							<div className="absolute top-8 emoji-picker-sec">
								<EmojiPicker
									inputSetter={setPostData}
									inputRef={inputRef}
								/>
							</div>
						)}
					</div>
					<button
						type="submit"
						className="ml-auto  px-2 rounded btn-primary text-lg font-bold text-center ">
						Post
					</button>
				</div>
			</form>
		</main>
	);
};
