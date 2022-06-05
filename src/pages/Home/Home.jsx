import { Footer, Header, NewPostCard, PostCard, Sidebar, WhoToFollowCard } from "../../components"
import "./Home.css";

export const Home = () => {
    return (
        <main className="main-container">
            <Header />
            <section className="content-container grid">
                <div className="left-container fixed ">
                    <Sidebar />
                </div>
                <div className="mid-container flex flex-col gap-4">
                    <div>
                        <NewPostCard />
                    </div>
                    <div>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
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
