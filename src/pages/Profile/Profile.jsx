import { useSelector } from "react-redux";
import { Footer, Header, PostCard, UserProfileCard, Sidebar, WhoToFollowCard, ScrollToTop } from "../../components"


export const Profile = () => {

    const { allPosts } = useSelector(state => state.post);
    const { userData: { username, fullName } } = useSelector(state => state.auth);


    const currentUserPost = allPosts?.filter(post => post.username === username);

    return (
        <main className="main-container">
            <ScrollToTop />
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
                        <p className="mx-8 my-6 text-xl font-bold">Your Posts : </p>
                        {
                            currentUserPost.length === 0 ?
                                <p className="text-xl mt-10 text-center">No post.</p>
                                :
                                currentUserPost?.map(post => {
                                    return <PostCard post={post} key={post._id} />
                                })
                        }
                    </div>
                </section>
                <section className="right-container fixed hidden text-xs lg:block xl:text-base">
                    <WhoToFollowCard />
                </section>
            </section>
            <Footer />
        </main>
    )
}
