import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaderImg } from "../../assets";
import { Footer, Header, NewPostCard, PostCard, Sidebar, WhoToFollowCard } from "../../components"
import { getAllPost } from "../../features/Post/PostSlice";
import "./Home.css";

export const Home = () => {

    const { allPosts, loading } = useSelector(state => state.post);


    return (
        <main className="main-container">
            <Header />
            <section className="content-container grid">
                <div className="left-container fixed ">
                    <Sidebar />
                </div>
                <div className="mid-container flex flex-col gap-4 relative min-h-screen">

                    {/* Loader here */}
                    {loading && <div className="absolute w-full h-full top-10 z-10 rounded right-0 left-0 flex justify-center items-center ">
                        <img src={loaderImg} alt="loader here" />
                    </div>}
                    <div>
                        <NewPostCard />
                    </div>
                    <div>
                        <div className="flex py-1 mx-8 justify-end">
                            <button className="mr-4 underline text-primary hover:no-underline hover:cursor-pointer">Trending</button>
                            <button className="underline text-primary hover:no-underline hover:cursor-pointer">Sort by Date</button>
                        </div>
                        {allPosts?.map(post => {
                            return <PostCard post={post} key={post._id} />
                        })}
                    </div>
                </div>
                <section className="right-container fixed">
                    <WhoToFollowCard />
                </section>
            </section>
            <Footer />
        </main>
    )
}
