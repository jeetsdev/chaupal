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
import { useState, useEffect } from "react";
import { EditPostModal } from "../../Modals/EditPostModal";
import {
	addToBookmark,
	deleteUserPost,
	dislikePost,
	getAllPost,
	likePost,
} from "../../../features/Post/PostSlice";
import toast from "react-hot-toast";
import { CommentCard } from "../Comment/CommentCard";
import {
	addComment,
	getAllComment,
} from "../../../features/Commnets/CommentSlice";
import { loaderImg } from "../../../assets";
import { useNavigate } from "react-router-dom";

export const SinglePostCard = ({ post }) => {
	const {
		userData: { username },
		authToken,
	} = useSelector((state) => state.auth);
	const { bookmarkedPost } = useSelector((state) => state.post);
	const { postComments, loading } = useSelector((state) => state.comment);
	const { allUsers } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [postMenu, setPostMenu] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [commentFormData, setCommentFormData] = useState({
		comment: "",
	});
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

	const commentSubmitHandler = (event) => {
		event.preventDefault();
		if (
			commentFormData.comment !== "" &&
			commentFormData.comment.trim() !== ""
		) {
			dispatch(
				addComment({
					postID: post?._id,
					commentData: commentFormData,
					authToken: authToken,
				}),
			);
			dispatch(getAllPost());
			setCommentFormData({ ...commentFormData, comment: "" });
		} else {
			toast.error("Enter some text first");
		}
	};

	const usernameClickHandler = (event) => {
		event.stopPropagation();
		if (post.username === username) {
			navigate("/profile");
		} else {
			navigate(`/profile/${post.username}`);
		}
	};

	// Fetching all comments here
	useEffect(() => {
		dispatch(getAllComment({ postID: post?._id }));
	}, [dispatch, post?._id]);

	return (
		<main className="flex flex-col g-secondary p-4 mx-4 md:mx-8 bg-white my-2 rounded z-10">
			<EditPostModal
				editModal={editModal}
				post={post}
				setEditModal={setEditModal}
			/>
			<section className="flex">
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
						<p className="text-xs text-gray-600 mx-2 hover:underline">
							@{currentPostUser?.username}
						</p>
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
									"post-menu absolute z-0 flex justify-center items-center gap-1 bg--200 -top-1 right-6 rounded bg- " +
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
			</section>
			<section className="mt-10 relative">
				{loading ? (
					<div className="absolute max-h-3/5  top-0 bottom-0 z-10 rounded right-0 left-0 flex justify-center items-center ">
						<img src={loaderImg} alt="loader here" />
					</div>
				) : (
					<div>
						<p className="font-bold">Comments : </p>
						<div className="mt-5">
							{postComments?.map((comment) => {
								return (
									<CommentCard
										comment={comment}
										postID={post?._id}
									/>
								);
							})}
						</div>
						<div className="mt-10">
							<form
								action=""
								className="flex w-full"
								onSubmit={commentSubmitHandler}>
								<input
									type="text"
									className="w-full border-2 p-1 outline-none rounded"
									placeholder="Add your comments here..."
									value={commentFormData.comment}
									onChange={(event) =>
										setCommentFormData({
											...commentFormData,
											comment: event.target.value,
										})
									}
								/>
								<button className="btn-primary rounded ml-2 p-2">
									Comment
								</button>
							</form>
						</div>
					</div>
				)}
			</section>
		</main>
	);
};
