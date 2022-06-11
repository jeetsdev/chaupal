import { BsHeart, BsBookmarkPlus } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa"

export const PostCard = ({ post }) => {

    return (
        <main className="flex g-secondary p-4 mx-8 bg-white  my-2 rounded">
            <section>
                <img src={post.avatar} alt="" className="w-10 h-10 mr-4 rounded-full object-cover border-2 p-px" />
            </section>
            <section className="w-full">
                <div className="flex items-center mb-2">
                    <p className="font-bold">{post.fullName}</p>
                    <p className="text-xs text-gray-600 mx-2">@{post.username}</p>
                    <p></p>
                </div>
                <p className="my-4">
                    {post.content}
                </p>
                <div className="flex justify-between px-10 text-xl">
                    <div className="flex justify-center items-center">
                        <BsHeart className="hover:cursor-pointer" />
                        <span className="mx-1 text-sm">{post.likes.likeCount}</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <FaRegComment className="hover:cursor-pointer" />
                        <span className="mx-1 text-sm">{post?.comments?.length}</span>
                    </div>
                    <BsBookmarkPlus className="hover:cursor-pointer" />
                </div>
            </section>
        </main>
    )
}
