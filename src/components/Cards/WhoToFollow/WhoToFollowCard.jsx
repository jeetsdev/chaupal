import { FollowCard } from "./FollowCard"

export const WhoToFollowCard = () => {
    return (
        <main className="px-8 pb-8 mt-6 mr-8 rounded bg-white">
            <section>
                <h2 className="text-2xl font-black mb-6 pt-6 font-primary">Who to follow</h2>
            </section>
            <section className="flex flex-col gap-6">
                <FollowCard />
                <FollowCard />
                <FollowCard />
            </section>
        </main>
    )
}
