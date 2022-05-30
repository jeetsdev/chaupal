import { avatar } from "../../../assets"
import { FaRegImages } from "react-icons/fa"
import { AiOutlineFileGif } from "react-icons/ai"
import { VscSmiley } from "react-icons/vsc"

export const NewPostCard = () => {
    return (
        <main className="flex rounded bg-white p-4 mx-8 my-6">
            <section>
                <img src={avatar} alt="" className="w-10 mr-4" />
            </section>
            <form className="w-full">
                <div>
                    <textarea type="text" className="w-full min-w-full p-2 bg-inherit border-2 rounded outline-none resize-none" placeholder="What's happening...?" />
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
