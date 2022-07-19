import { FaRegImages } from "react-icons/fa"
import { AiOutlineFileGif } from "react-icons/ai"
import { VscSmiley } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { createNewPost } from "../../../features/Post/PostSlice"
import toast from "react-hot-toast"

export const NewPostCard = () => {

    const { userData, authToken } = useSelector(state => state.auth);
    const { allUsers } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        content: "",
    })
    const currentPostUser = allUsers.find(user => user.username === userData.username);

    const postSubmitHandler = (event) => {
        event.preventDefault();
        if (postData.content !== "") {
            dispatch(createNewPost({ postData, authToken }));
            setPostData({ ...postData, content: "" });
        }
        else {
            toast.error("Post can't be empty");
        }
    }

    return (
        <main className="flex rounded bg-white p-4 mx-4 md:mx-8 my-6 relative">
            <section>
                <img src={currentPostUser?.avatar} alt="" className="w-10 h-10 rounded-full p-px border-2 object-cover mr-4" />
            </section>
            <form className="w-full" onSubmit={postSubmitHandler}>
                <div>
                    <textarea type="text" className="w-full min-w-full p-2 bg-inherit border-2 rounded outline-none resize-none" placeholder="What's happening...?" value={postData.content} onChange={(event) => setPostData({ ...postData, content: event.target.value })} />
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
        </main>
    )
}
