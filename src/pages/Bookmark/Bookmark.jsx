import { useSelector } from "react-redux"
import { noPostImg } from "../../assets";
import { BookmarkCard, Footer, Header, ScrollToTop, Sidebar, WhoToFollowCard } from "../../components"

export const Bookmark = () => {

    const { bookmarkedPost } = useSelector(state => state.post);


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
                        <h1 className="text-2xl font-bold font-primary">Bookmark</h1>
                        <p className="text-sm mx-2 text-gray-600 font-semibold font-primary"> ({bookmarkedPost?.length} )</p>
                    </div>
                    {
                        bookmarkedPost?.length === 0 ?
                            <div className="flex justify-center items-center flex-col mt-10">
                                <img src={noPostImg} alt="no post here" className="w-1/2" />
                                <p className="text-xl font-bold mt-10">No post.</p>
                            </div>
                            :
                            <div>
                                {bookmarkedPost?.map(post => {
                                    return <BookmarkCard key={post._id} post={post} />
                                })}
                            </div>
                    }

                </section>
                <section className="right-container fixed hidden text-xs lg:block xl:text-base">
                    <WhoToFollowCard />
                </section>
            </section>
            <Footer />
        </main>
    )
}
