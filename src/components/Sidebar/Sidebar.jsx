import { AiFillHome } from "react-icons/ai"
import { MdExplore } from "react-icons/md"
import { BsFillBookmarkFill } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { Sidemenu } from "./Sidemenu"
import { useDispatch } from "react-redux"
import { toggleNewPostModal } from "../../features/Post/PostSlice"


export const Sidebar = () => {

    const dispatch = useDispatch();

    return (
        <main className=" px-8 my-6">

            {/* Sidebar links  */}
            <section className="flex flex-col gap-6 px-2">
                <Sidemenu route={"/home"} name="Home" icon={<AiFillHome className="text-3xl" />} />
                <Sidemenu route={"/explore"} name="Explore" icon={<MdExplore className="text-3xl" />} />
                <Sidemenu route={"/bookmark"} name="Bookmarks" icon={<BsFillBookmarkFill className="text-3xl" />} />
                <Sidemenu route={"/profile"} name="Profile" icon={<FaUserCircle className="text-3xl" />} />
            </section>

            {/* Sidebar buttons  */}
            <section className="flex justify-center items-center">
                <button className="py-1 px-4 w-full mt-8 rounded btn-primary text-lg font-bold text-center" onClick={() => dispatch(toggleNewPostModal())}>Create New Post</button>
            </section>
        </main>
    )
}
