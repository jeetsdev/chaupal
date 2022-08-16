import { BsFillBookmarkDashFill, BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeFromBookmark } from "../../../features/Post/PostSlice";
import { useNavigate } from "react-router-dom";

export const BookmarkCard = ({ post }) => {
	const {
		authToken,
		userData: { username },
	} = useSelector((state) => state.auth);
	const { allUsers } = useSelector((state) => state.user);
	const [postMenu, setPostMenu] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const currentPostUser = allUsers.find(
		(user) => user.username === post.username,
	);

	const bookmarkHandler = (event) => {
		event.stopPropagation();
		dispatch(removeFromBookmark({ postID: post._id, authToken }));
		setPostMenu((prev) => !prev);
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
			className="flex post-card p-4 mx-4 md:mx-8 bg-white my-2 rounded z-10 hover:cursor-pointer"
			onClick={() => postClickHandler(post._id)}>
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
				<div className="flex justify-between text-xl mt-6 relative">
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
						<BsFillBookmarkDashFill
							className="text-3xl rounded btn-icon hover:cursor-pointer  transition-colors p-1 bg-primary"
							onClick={bookmarkHandler}
						/>
					</div>
				</div>
			</section>
		</main>
	);
};
