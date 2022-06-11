import { FaRegImages } from "react-icons/fa"
import { AiOutlineFileGif } from "react-icons/ai"
import { VscSmiley } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { createNewPost, toggleNewPostModal } from "../../features/Post/PostSlice"
import "./NewPostModal.css"

export const NewPostModal = () => {

    const { userData, authToken } = useSelector(state => state.auth);
    const { postModal } = useSelector(state => state.post);
    console.log('postModal: ', postModal);
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        content: "",
    })

    const postSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(createNewPost({ postData, authToken }));
        setPostData({ ...postData, content: "" });
        // dispatch(toggleNewPostModal())
    }


    return (
        <main className={`fixed flex justify-center items-center left-0 right-0 bottom-0 top-0 bg-transparent z-20` + (postModal ? " post-modal-active" : " post-modal-hide")} onClick={() => dispatch(toggleNewPostModal())}>
            <div className={`new-post-modal bg-white flex flex-col fixed rounded z-20 px-4` + (postModal ? " post-modal-active" : " post-modal-hide")} onClick={(e) => { e.stopPropagation() }}>
                <section className="flex justify-end items-center">
                    <button className="btn-secondary-outline text-xl rounded w-6 h-6 my-4 flex justify-center items-center" onClick={() => dispatch(toggleNewPostModal())}>🗙</button>
                </section>
                <section className="w-full flex h-full  g-red-200">
                    <div className="flex-grow-0">
                        <img src={userData.avatar} alt="" className="w-10 h-10 rounded-full p-px border-2 object-cover mr-4" />
                    </div>
                    <form className="w-full  min-h-full" onSubmit={postSubmitHandler}>
                        <div className="min-h-full">
                            <textarea type="text" className=" w-full min-w-full min-h-full p-2 bg-inherit border-2 rounded outline-none resize-none" placeholder="What's happening...?" rows={4} value={postData.content} onChange={(event) => setPostData({ ...postData, content: event.target.value })} />
                        </div>
                        <div className="flex items-center">
                            <div className="flex text-xl">
                                <FaRegImages className="hover:cursor-pointer" />
                                <AiOutlineFileGif className="mx-2 hover:cursor-pointer" />
                                <VscSmiley className="hover:cursor-pointer" />
                            </div>
                            <button type="submit" className="ml-auto px-2 rounded btn-primary text-lg font-bold text-center ">Post</button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    )
}