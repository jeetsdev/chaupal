import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loaderImg, noPostImg } from "../../assets";
import { Footer, Header, Sidebar, SinglePostCard, WhoToFollowCard } from "../../components"

export const Post = () => {

    const { allPosts, loading } = useSelector(state => state.post);
    const { postID } = useParams();
    const currentPost = allPosts.find(post => post._id === postID);

    // Scrolling to top here
    useEffect(() => {
        window.scrollTo(0, 0);
    })

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
                    {
                        currentPost ?
                            <div>
                                {
                                    <SinglePostCard post={currentPost} />
                                }
                            </div>
                            :
                            <div className="flex justify-center items-center flex-col mt-10">
                                <img src={noPostImg} alt="no post here" className="w-1/2" />
                                <p className="text-xl font-bold mt-10">Post Not Found.</p>
                            </div>
                    }
                </div>
                <section className="right-container fixed hidden text-xs lg:block xl:text-base">
                    <WhoToFollowCard />
                </section>
            </section>
            <Footer />
        </main>
    )
}
