import { FaRegImages } from "react-icons/fa"
import { AiOutlineFileGif } from "react-icons/ai"
import { MdCancel } from "react-icons/md"
import { VscSmiley } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import "./NewPostModal.css"
import toast from "react-hot-toast"
import { updateUserPost } from "../../features/Post/PostSlice"

export const EditPostModal = ({ editModal, post, setEditModal }) => {

    const { authToken } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        content: post?.content,
    })

    const updatePostHandler = (event) => {
        event.preventDefault();
        if (postData.content !== "") {
            dispatch(updateUserPost({ postID: post._id, postData, authToken }));
            setEditModal(prev => !prev);
        }
        else {
            toast.error("Post can't be empty");
        }
    }


    return (
        <main className={`fixed flex justify-center items-center left-0 right-0 bottom-0 top-0 bg-transparent z-20` + (editModal ? " post-modal-active" : " post-modal-hide")} onClick={() => setEditModal(prev => !prev)}>
            <div className={`new-post-modal bg-white flex flex-col fixed rounded z-20 px-4` + (editModal ? " post-modal-active" : " post-modal-hide")} onClick={(e) => { e.stopPropagation() }}>
                <section className="flex justify-end items-center">
                    <p className="mr-auto text-primary font-bold text-xl font-primary">Update post</p>
                    <MdCancel className="btn-secondary-outline text-xl rounded w-6 h-6 my-4 flex justify-center items-center hover:cursor-pointer" onClick={() => setEditModal(prev => !prev)} />
                </section>
                <section className="w-full flex h-full  g-red-200">
                    <div className="flex-grow-0">
                        <img src={post?.avatar} alt="" className="w-10 h-10 rounded-full p-px border-2 object-cover mr-4" />
                    </div>
                    <form className="w-full  min-h-full" onSubmit={updatePostHandler}>
                        <div className="min-h-full">
                            <textarea type="text" className=" w-full min-w-full min-h-full p-2 bg-inherit border-2 rounded outline-none resize-none" placeholder="What's happening...?" rows={4} value={postData.content} onChange={(event) => setPostData({ ...postData, content: event.target.value })} />
                        </div>
                        <div className="flex items-center">
                            <div className="flex text-xl">
                                <FaRegImages className="hover:cursor-pointer" />
                                <AiOutlineFileGif className="mx-2 hover:cursor-pointer" />
                                <VscSmiley className="hover:cursor-pointer" />
                            </div>
                            <button type="submit" className="ml-auto px-2 rounded btn-primary text-lg font-bold text-center ">Update</button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    )
}