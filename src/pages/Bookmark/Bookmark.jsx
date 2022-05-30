import { BookmarkCard, Footer, Header, Sidebar, WhoToFollowCard } from "../../components"

export const Bookmark = () => {
    return (
        <main className="main-container">
            <Header />
            <section className="content-container grid">
                <div className="left-container fixed ">
                    <Sidebar />
                </div>
                <section className="mid-container flex flex-col gap-4 min-h-screen">
                    <div className="flex mx-8 mt-6 items-center">
                        <h1 className="text-2xl font-bold font-primary">Bookmark</h1>
                        <p className="text-sm mx-2 text-gray-600 font-semibold font-primary"> (3 posts )</p>
                    </div>
                    <div>
                       <BookmarkCard />
                       <BookmarkCard />
                       <BookmarkCard />
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
