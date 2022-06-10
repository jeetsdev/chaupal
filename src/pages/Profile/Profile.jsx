import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Header, PostCard, UserProfileCard, Sidebar, WhoToFollowCard } from "../../components"
import { getAllPost } from "../../features/Post/PostSlice";

export const Profile = () => {


    const dispatch = useDispatch();
    const { allPosts } = useSelector(state => state.post);
    const { userData: { username, fullName } } = useSelector(state => state.auth);

    // Getting all posts here
    useEffect(() => {
        console.log("here in home");
        dispatch(getAllPost());
    }, [dispatch])

    const currentUserPost = allPosts?.filter(post => post.username === username);
    console.log('currentUserPost: ', currentUserPost);

    return (
        <main className="main-container">
            <Header />
            <section className="content-container grid">
                <div className="left-container fixed ">
                    <Sidebar />
                </div>
                <section className="mid-container flex flex-col gap-4 min-h-screen">
                    <div className="flex mx-8 mt-6 items-center">
                        <h1 className="text-2xl font-bold font-primary">{fullName}</h1>
                        <p className="text-sm mx-2 text-gray-600 font-semibold font-primary"> ({currentUserPost?.length} posts )</p>
                    </div>
                    <div>
                        {/* User details here */}
                        <UserProfileCard />
                        <p className="mx-8 my-6 text-xl font-bold">Your Posts</p>
                        {currentUserPost?.map(post => {
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
