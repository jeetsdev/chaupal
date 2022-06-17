import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExploreBar, Footer, Header, PostCard, Sidebar, WhoToFollowCard } from "../../components"
import { getAllPost } from "../../features/Post/PostSlice";
import "./Explore.css"

export const Explore = () => {

    const dispatch = useDispatch();
    const { allPosts } = useSelector(state => state.post);
    useEffect(() => {
        dispatch(getAllPost());
    }, [dispatch])


    return (
        <main className="main-container">
            <Header />
            <section className="content-container grid">
                <div className="left-container fixed ">
                    <Sidebar />
                </div>
                <section className="mid-container flex flex-col gap-4 min-h-screen">
                    <div>
                        <ExploreBar />
                    </div>
                    <div>
                        {allPosts?.map(post => {
                            return <PostCard post={post} key={post._id} />
                        })}
                    </div>
                </section>
                <section className="right-container fixed">
                    <WhoToFollowCard />
                </section>
            </section>
            <Footer />
        </main>
    )
}
