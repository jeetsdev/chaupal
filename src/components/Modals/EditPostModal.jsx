import { FaRegImages } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { BsEmojiSmile, BsEmojiNeutral } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import "./NewPostModal.css";
import toast from "react-hot-toast";
import { updateUserPost } from "../../features/Post/PostSlice";
import { EmojiPicker } from "../EmojiPicker/EmojiPicker";

export const EditPostModal = ({ editModal, post, setEditModal }) => {
	const { authToken } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [postData, setPostData] = useState({
		content: post?.content,
		postImg: post?.postImg,
	});
	const [showEmojiPicker, setShowEomjiPicker] = useState(false);
	const inputRef = useRef(null);

	// Image click handler here
	const editImageHandler = (event) => {
		const reader = new FileReader();
		reader.onload = () => {
			setPostData({ ...postData, postImg: reader.result });
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	const updatePostHandler = (event) => {
		event.preventDefault();
		if (postData.content !== "") {
			dispatch(updateUserPost({ postID: post._id, postData, authToken }));
			setEditModal((prev) => !prev);
			setShowEomjiPicker((prev) => false);
		} else {
			toast.error("Post can't be empty");
		}
	};

	return (
		<main
			className={
				`fixed flex justify-center left-0 right-0 bottom-0 top-0 bg-transparent z-50` +
				(editModal ? " post-modal-active" : " post-modal-hide")
			}
			onClick={() => setEditModal((prev) => !prev)}>
			<div
				className={
					`new-post-modal bg-white flex flex-col fixed rounded z-20 mt-32 px-4` +
					(editModal ? " post-modal-active" : " post-modal-hide")
				}
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<section className="flex justify-end items-center">
					<p className="mr-auto text-primary font-bold text-xl font-primary">
						Update post
					</p>
					<MdCancel
						className="btn-secondary-outline text-xl rounded w-6 h-6 my-4 flex justify-center items-center hover:cursor-pointer"
						onClick={() => setEditModal((prev) => !prev)}
					/>
				</section>
				<section className="w-full flex h-full  g-red-200">
					<div className="flex-grow-0">
						<img
							src={post?.avatar}
							alt=""
							className="w-10 h-10 rounded-full p-px border-2 object-cover mr-4"
						/>
					</div>
					<form
						className="w-full min-h-full"
						onSubmit={updatePostHandler}>
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
						<div className="flex items-center py-4">
							<div className="flex text-xl relative">
								<div className="flex">
									<label htmlFor="edit-post-img">
										<FaRegImages className="cursor-pointer" />
									</label>
									<input
										type="file"
										id="edit-post-img"
										accept="image/png, image/jpeg, image/jpg"
										className="hidden"
										onInput={editImageHandler}
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
								className="ml-auto px-2 rounded btn-primary text-lg font-bold text-center ">
								Update
							</button>
						</div>
					</form>
				</section>
			</div>
		</main>
	);
};
