import { FaRegImages } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { BsEmojiSmile, BsEmojiNeutral } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import {
	createNewPost,
	toggleNewPostModal,
} from "../../features/Post/PostSlice";
import "./NewPostModal.css";
import toast from "react-hot-toast";
import { EmojiPicker } from "../EmojiPicker/EmojiPicker";

export const NewPostModal = () => {
	const { userData, authToken } = useSelector((state) => state.auth);
	const { allUsers } = useSelector((state) => state.user);
	const { postModal } = useSelector((state) => state.post);
	const dispatch = useDispatch();
	const [postData, setPostData] = useState({
		content: "",
		postImg: "",
	});
	const [showEmojiPicker, setShowEomjiPicker] = useState(false);
	const inputRef = useRef(null);

	const currentPostUser = allUsers.find(
		(user) => user?.username === userData?.username,
	);

	// Image click handler here
	const modalImageHandler = (event) => {
		const reader = new FileReader();
		reader.onload = () => {
			setPostData({ ...postData, postImg: reader.result });
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	const postSubmitHandler = (event) => {
		event.preventDefault();
		if (postData.content.trim() !== "") {
			dispatch(createNewPost({ postData, authToken }));
			setPostData({ ...postData, content: "", postImg: "" });
			setShowEomjiPicker((prev) => false);
			dispatch(toggleNewPostModal());
		} else {
			toast.error("Post can't be empty");
		}
	};

	return (
		<main
			className={
				`fixed flex justify-center left-0 right-0 top-0 bottom-0 bg-transparent z-20` +
				(postModal ? " post-modal-active" : " post-modal-hide")
			}
			onClick={() => dispatch(toggleNewPostModal())}>
			<div
				className={
					`new-post-modal bg-white flex flex-col fixed rounded z-20 px-4 mt-32` +
					(postModal ? " post-modal-active" : " post-modal-hide")
				}
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<section className="flex justify-end items-center">
					<p className="mr-auto text-primary font-bold text-xl font-primary">
						New post
					</p>
					<MdCancel
						className="btn-secondary-outline text-xl rounded w-6 h-6 my-4 flex justify-center items-center hover:cursor-pointer"
						onClick={() => dispatch(toggleNewPostModal())}
					/>
				</section>
				<section className="w-full flex h-full">
					<div className="flex-grow-0">
						<img
							src={currentPostUser?.avatar}
							alt=""
							className="w-10 h-10 rounded-full p-px border-2 object-cover mr-4"
						/>
					</div>
					<form className="w-full" onSubmit={postSubmitHandler}>
						<div className="w-full min-w-full p-2 bg-inherit border-2 rounded">
							<textarea
								type="text"
								className="w-full bg-inherit  rounded outline-none resize-none"
								placeholder="What's happening...?"
								rows={4}
								ref={inputRef}
								value={postData.content}
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
									<label htmlFor="post-modal-img">
										<FaRegImages className="cursor-pointer" />
									</label>
									<input
										type="file"
										id="post-modal-img"
										accept="image/png, image/jpeg, image/jpg"
										className="hidden"
										onInput={modalImageHandler}
									/>
								</div>
								{showEmojiPicker ? (
									<BsEmojiSmile
										className="hover:cursor-pointer ml-2"
										onClick={() =>
											setShowEomjiPicker((prev) => !prev)
										}
									/>
								) : (
									<BsEmojiNeutral
										className="hover:cursor-pointer ml-2"
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
				</section>
			</div>
		</main>
	);
};
