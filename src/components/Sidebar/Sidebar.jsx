import { AiFillHome } from "react-icons/ai"
import { MdExplore } from "react-icons/md"
import { BsFillBookmarkFill, BsFillPlusCircleFill } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import { Sidemenu } from "./Sidemenu"
import { useDispatch } from "react-redux"
import { toggleNewPostModal } from "../../features/Post/PostSlice"


export const Sidebar = () => {

    const dispatch = useDispatch();

    return (
        <main className="md:px-8 md:my-6">

            {/* Sidebar links  */}
            <section className="hidden flex-col gap-6 px-2 md:flex">
                <Sidemenu route={"/home"} name="Home" icon={<AiFillHome className="text-3xl" />} />
                <Sidemenu route={"/explore"} name="Explore" icon={<MdExplore className="text-3xl" />} />
                <Sidemenu route={"/bookmark"} name="Bookmarks" icon={<BsFillBookmarkFill className="text-3xl" />} />
                <Sidemenu route={"/profile"} name="Profile" icon={<FaUserCircle className="text-3xl" />} />
            </section>
            <section className="flex justify-around py-4 md:hidden bottom-0 bg-white">
                <Sidemenu route={"/home"} icon={<AiFillHome className="text-2xl" />} />
                <Sidemenu route={"/explore"} icon={<MdExplore className="text-2xl" />} />
                <BsFillPlusCircleFill className="text-2xl" onClick={() => dispatch(toggleNewPostModal())} />
                <Sidemenu route={"/bookmark"} icon={<BsFillBookmarkFill className="text-2xl" />} />
                <Sidemenu route={"/profile"} icon={<FaUserCircle className="text-2xl" />} />
            </section>

            {/* Sidebar buttons  */}
            <section className="justify-center items-center hidden md:flex">
                <button className="py-1 px-4 w-full mt-8 rounded btn-primary text-base md:text-lg font-bold text-center" onClick={() => dispatch(toggleNewPostModal())}>Create New Post</button>
            </section>
        </main>
    )
}
