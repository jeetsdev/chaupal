import { avatar } from "../../../assets"
import { BsHeart, BsBookmarkPlus } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa"

export const PostCard = () => {
    return (
        <main className="flex g-secondary p-4 mx-8 bg-white  my-2 rounded">
            <section className="">
                <img src={avatar} alt="" className="w-10 mr-4" />
            </section>
            <section className="w-full">
                <div className="flex items-center mb-2">
                    <p className="font-bold">Chaupal</p>
                    <p className="text-xs text-gray-600 mx-2">@username. 5 hour ago</p>
                    <p></p>
                </div>
                <p className="my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi repellat quos quia perspiciatis placeat vitae neque eius recusandae dolore eaque.
                </p>
                <div className="flex justify-between px-10 text-xl">
                    <BsHeart className="hover:cursor-pointer" />
                    <FaRegComment className="hover:cursor-pointer" />
                    <BsBookmarkPlus className="hover:cursor-pointer" />
                </div>
            </section>
        </main>
    )
}
