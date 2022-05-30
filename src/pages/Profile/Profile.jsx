import { Footer, Header, PostCard, UserProfileCard, Sidebar, WhoToFollowCard, OtherProfileCard } from "../../components"

export const Profile = () => {
    return (
        <main className="main-container">
            <Header />
            <section className="content-container grid">
                <div className="left-container fixed ">
                    <Sidebar />
                </div>
                <section className="mid-container flex flex-col gap-4 min-h-screen">
                    <div className="flex mx-8 mt-6 items-center">
                        <h1 className="text-2xl font-bold font-primary">Chaupal</h1>
                        <p className="text-sm mx-2 text-gray-600 font-semibold font-primary"> (4 posts )</p>
                    </div>
                    <div>
                        <UserProfileCard />
                        <OtherProfileCard />
                        <p className="mx-8 my-6 text-xl font-bold">Your Posts</p>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
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
