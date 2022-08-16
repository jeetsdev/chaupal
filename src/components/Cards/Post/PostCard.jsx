import {
	BsHeart,
	BsHeartFill,
	BsBookmarkPlusFill,
	BsBookmarkCheckFill,
	BsThreeDotsVertical,
	BsChatDots,
} from "react-icons/bs";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./PostCard.css";
import { useState } from "react";
import { EditPostModal } from "../../Modals/EditPostModal";
import {
	addToBookmark,
	deleteUserPost,
	dislikePost,
	likePost,
} from "../../../features/Post/PostSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const PostCard = ({ post }) => {
	const {
		userData: { username },
		authToken,
	} = useSelector((state) => state.auth);
	const { allUsers } = useSelector((state) => state.user);
	const { bookmarkedPost } = useSelector((state) => state.post);
	const navigate = useNavigate();
	const [postMenu, setPostMenu] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const dispatch = useDispatch();
	const isAlreadyLikedByUser = post?.likes?.likedBy.some(
		(user) => user.username === username,
	);
	const isAlreadyBookmarkedByUser = bookmarkedPost.some(
		(eachPost) => eachPost._id === post._id,
	);

	const currentPostUser = allUsers.find(
		(user) => user.username === post.username,
	);
	const editHandler = (event) => {
		event.stopPropagation();
		setEditModal((prev) => !prev);
		setPostMenu((prev) => !prev);
	};

	const deleteHandler = (event) => {
		event.stopPropagation();
		dispatch(deleteUserPost({ postID: post._id, authToken }));
		setPostMenu((prev) => !prev);
	};

	const bookmarkHandler = (event) => {
		event.stopPropagation();
		if (isAlreadyBookmarkedByUser) {
			toast.error("Already in bookmarked.");
		} else {
			dispatch(addToBookmark({ postID: post._id, authToken }));
		}
		setPostMenu((prev) => !prev);
	};

	const likeHandler = (event) => {
		event.stopPropagation();
		dispatch(likePost({ postID: post._id, authToken }));
	};

	const dislikeHandler = (event) => {
		event.stopPropagation();
		dispatch(dislikePost({ postID: post._id, authToken }));
	};

	const postClickHandler = (postId) => {
		navigate(`/post/${postId}`);
	};

	const usernameClickHandler = (event) => {
		event.stopPropagation();
		if (post.username === username) {
			navigate("/profile");
		} else {
			navigate(`/profile/${post.username}`);
		}
	};

	return (
		<main
			className="hover:cursor-pointer post-card flex g-secondary p-4 mx-4 md:mx-8 bg-white my-2 rounded z-10"
			onClick={() => postClickHandler(post._id)}>
			<EditPostModal
				editModal={editModal}
				post={post}
				setEditModal={setEditModal}
			/>
			<section>
				<img
					src={currentPostUser?.avatar}
					alt=""
					className="w-10 h-10 mr-4 rounded-full object-cover border-2 p-px"
				/>
			</section>
			<section className="w-full">
				<div
					className="flex items-center w-max mb-2"
					onClick={usernameClickHandler}>
					<p className="font-bold hover:underline">
						{currentPostUser?.fullName}
					</p>
					<span className="text-xs text-gray-600 mx-2 hover:underline">
						@{currentPostUser?.username}
					</span>
				</div>
				<p className="my-4">
					{post?.content}
					<img
						src={post?.postImg}
						alt=""
						className="w-full max-h-200p rounded mt-2"
					/>
				</p>

				<div className="flex justify-between text-xl mt-6">
					<div className="flex justify-center items-center gap-4">
						<div className="flex justify-center items-center">
							{/* Checking if already liked */}
							{isAlreadyLikedByUser ? (
								<BsHeartFill
									className="text-primary btn-icon bg-inherit hover:cursor-pointer"
									onClick={dislikeHandler}
								/>
							) : (
								<BsHeart
									className="text-primary btn-icon bg-inherit hover:cursor-pointer"
									onClick={likeHandler}
								/>
							)}
							<span className="mx-1 text-sm">
								{post?.likes?.likeCount}
							</span>
						</div>
						<div className="flex justify-center items-center">
							<BsChatDots className="text-primary btn-icon hover:cursor-pointer" />
							<span className="mx-1 text-sm">
								{post?.comments?.length}
							</span>
						</div>
					</div>
					<div className="relative">
						{/* Menu button here */}
						<BsThreeDotsVertical
							className="w-5 h-5 ml-auto rounded-full text-xl p-px  hover:cursor-pointer hover:text-blue-500 transition-colors"
							onClick={(event) => {
								event.stopPropagation();
								setPostMenu((prev) => !prev);
							}}
						/>

						{/* Post menu here */}
						<div
							className={
								"post-menu absolute z-0 flex justify-center items-center gap-1 bg--200 -top-1 right-6 rounded " +
								(postMenu ? "show-menu" : "hide-menu")
							}>
							{/* Checking if this is the user post */}
							{username === post?.username && (
								<div className="flex gap-1">
									<AiFillEdit
										className="text-3xl bg-primary rounded hover:cursor-pointer hover:text-blue-500 btn-icon transition-colors p-1"
										onClick={editHandler}
									/>
									<AiFillDelete
										className="text-3xl bg-primary rounded hover:cursor-pointer hover:text-blue-500 btn-icon transition-colors p-1"
										onClick={deleteHandler}
									/>
								</div>
							)}

							{/* Checking of already bookmarked by user */}
							{isAlreadyBookmarkedByUser ? (
								<BsBookmarkCheckFill
									className="text-3xl bg-primary rounded btn-icon hover:cursor-pointer hover:text-blue-500 transition-colors p-1"
									onClick={bookmarkHandler}
								/>
							) : (
								<BsBookmarkPlusFill
									className="text-3xl bg-primary rounded btn-icon hover:cursor-pointer hover:text-blue-500 transition-colors p-1"
									onClick={bookmarkHandler}
								/>
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
