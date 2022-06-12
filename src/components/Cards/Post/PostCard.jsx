import { BsHeart, BsHeartFill, BsBookmarkPlusFill, BsThreeDotsVertical, BsChatDots } from "react-icons/bs"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import "./PostCard.css"
import { useState } from "react"
import { EditPostModal } from "../../Modals/EditPostModal"
import { deleteUserPost, dislikePost, likePost } from "../../../features/Post/PostSlice"

export const PostCard = ({ post }) => {

    const { userData: { username }, authToken } = useSelector(state => state.auth);
    console.log('username: ', username);
    console.log(post?.likes?.likedBy);
    const [postMenu, setPostMenu] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const dispatch = useDispatch();

    const editHandler = () => {
        setEditModal(prev => !prev);
        setPostMenu(prev => !prev);
    }

    const deleteHandler = () => {
        dispatch(deleteUserPost({ postID: post._id, authToken }));
        setPostMenu(prev => !prev);
    }

    const likeHandler = () => {
        dispatch(likePost({ postID: post._id, authToken }));
    }

    const dislikeHandler = () => {
        dispatch(dislikePost({ postID: post._id, authToken }));
    }

    const isAlreadyLikedByUser = post?.likes?.likedBy.some(user => user.username === username);

    return (
        <main className="flex g-secondary p-4 mx-8 bg-white my-2 rounded z-10">
            <EditPostModal editModal={editModal} post={post} setEditModal={setEditModal} />
            <section>
                <img src={post?.avatar} alt="" className="w-10 h-10 mr-4 rounded-full object-cover border-2 p-px" />
            </section>
            <section className="w-full">
                <div className="flex items-center mb-2">
                    <p className="font-bold">{post?.fullName}</p>
                    <p className="text-xs text-gray-600 mx-2">@{post?.username}</p>
                </div>
                <p className="my-4">
                    {post?.content}
                </p>
                <div className="flex justify-between text-xl mt-6">
                    <div className="flex justify-center items-center gap-4">
                        <div className="flex justify-center items-center">

                            {/* Checking if already liked */}
                            {
                                isAlreadyLikedByUser ?
                                    <BsHeartFill className="text-primary btn-icon hover:cursor-pointer" onClick={dislikeHandler} />
                                    :
                                    <BsHeart className="text-primary btn-icon hover:cursor-pointer" onClick={likeHandler} />
                            }
                            <span className="mx-1 text-sm">{post?.likes?.likeCount}</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <BsChatDots className="text-primary btn-icon hover:cursor-pointer" />
                            <span className="mx-1 text-sm">{post?.comments?.length}</span>
                        </div>
                    </div>
                    <div className="relative">

                        {/* Menu button here */}
                        <BsThreeDotsVertical className="w-5 h-5 ml-auto rounded-full text-xl p-px  hover:cursor-pointer hover:text-blue-500 transition-colors" onClick={() => setPostMenu(prev => !prev)} />

                        {/* Post menu here */}
                        <div className={"post-menu absolute z-0 flex justify-center items-center gap-1 bg--200 -top-1 right-6 rounded bg- " + (postMenu ? "show-menu" : "hide-menu")}>

                            {/* Checking if this is the user post */}
                            {username === post?.username && <div className="flex gap-1">
                                <AiFillEdit className="text-3xl rounded hover:cursor-pointer hover:text-blue-500 btn-icon transition-colors p-1" onClick={editHandler} />
                                <AiFillDelete className="text-3xl rounded hover:cursor-pointer hover:text-blue-500 btn-icon transition-colors p-1" onClick={deleteHandler} />
                            </div>}
                            <BsBookmarkPlusFill className="text-3xl rounded btn-icon hover:cursor-pointer hover:text-blue-500 transition-colors p-1" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
