import { FaRegImages } from "react-icons/fa";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile, BsEmojiNeutral } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { createNewPost } from "../../../features/Post/PostSlice";
import toast from "react-hot-toast";
import { EmojiPicker } from "../../EmojiPicker/EmojiPicker";

export const NewPostCard = () => {
	const { userData, authToken } = useSelector((state) => state.auth);
	const { allUsers } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const [postData, setPostData] = useState({
		content: "",
	});
	const [showEmojiPicker, setShowEomjiPicker] = useState(false);
	// Getting refrence of input box
	const inputRef = useRef(null);

	// Getting current post user details
	const currentPostUser = allUsers.find(
		(user) => user.username === userData.username,
	);

	const postSubmitHandler = (event) => {
		event.preventDefault();
		setShowEomjiPicker((prev) => false);
		if (postData.content !== "") {
			dispatch(createNewPost({ postData, authToken }));
			setPostData({ ...postData, content: "" });
		} else {
			toast.error("Post can't be empty");
		}
	};

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
				<div>
					<textarea
						type="text"
						className="w-full min-w-full p-2 bg-inherit border-2 rounded outline-none resize-none"
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
				</div>
				<div className="flex items-center">
					<div className="flex text-xl relative">
						<FaRegImages className="hover:cursor-pointer" />
						<AiOutlineFileGif className="mx-2 hover:cursor-pointer" />
						{showEmojiPicker ? (
							<BsEmojiSmile
								className="hover:cursor-pointer"
								onClick={() =>
									setShowEomjiPicker((prev) => !prev)
								}
							/>
						) : (
							<BsEmojiNeutral
								className="hover:cursor-pointer"
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
						className="ml-auto px-2 rounded btn-primary text-lg font-bold text-center ">
						Post
					</button>
				</div>
			</form>
		</main>
	);
};
