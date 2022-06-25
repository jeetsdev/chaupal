import { BsFillBookmarkDashFill, BsThreeDotsVertical } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { removeFromBookmark } from "../../../features/Post/PostSlice"

export const BookmarkCard = ({ post }) => {

    const { authToken } = useSelector(state => state.auth);
    const { allUsers } = useSelector(state => state.user);
    const [postMenu, setPostMenu] = useState(false);
    const dispatch = useDispatch();
    const currentPostUser = allUsers.find(user => user.username === post.username);


    const bookmarkHandler = () => {
        dispatch(removeFromBookmark({ postID: post._id, authToken }));
        setPostMenu(prev => !prev);
    }

    return (
        <main className="flex g-secondary p-4 mx-8 bg-white my-2 rounded z-10">
            <section>
                <img src={currentPostUser?.avatar} alt="" className="w-10 h-10 mr-4 rounded-full object-cover border-2 p-px" />
            </section>
            <section className="w-full">
                <div className="flex items-center mb-2">
                    <p className="font-bold">{currentPostUser?.fullName}</p>
                    <p className="text-xs text-gray-600 mx-2">@{currentPostUser?.username}</p>
                </div>
                <p className="my-4">
                    {post?.content}
                </p>
                <div className="flex justify-between text-xl mt-6 relative">
                    {/* Menu button here */}
                    <BsThreeDotsVertical className="w-5 h-5 ml-auto rounded-full text-xl p-px  hover:cursor-pointer hover:text-blue-500 transition-colors" onClick={() => setPostMenu(prev => !prev)} />

                    {/* Post menu here */}
                    <div className={"post-menu absolute z-0 flex justify-center items-center gap-1 bg--200 -top-1 right-6 rounded bg- " + (postMenu ? "show-menu" : "hide-menu")}>
                        <BsFillBookmarkDashFill className="text-3xl rounded btn-icon hover:cursor-pointer  transition-colors p-1" onClick={bookmarkHandler} />
                    </div>
                </div>
            </section>
        </main>
    )
}
