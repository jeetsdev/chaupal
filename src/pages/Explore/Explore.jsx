import { ExploreBar, Footer, Header, PostCard, Sidebar, WhoToFollowCard } from "../../components"
import "./Explore.css"

export const Explore = () => {
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
