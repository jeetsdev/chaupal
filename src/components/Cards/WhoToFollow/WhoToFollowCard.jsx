import { useSelector } from "react-redux"
import { FollowCard } from "./FollowCard"

export const WhoToFollowCard = () => {

    const { allUsers } = useSelector(state => state.user);
    const { userData: { username } } = useSelector(state => state.auth);
    const currentUser = allUsers.find(user => user?.username === username);

    // Filtering users to follow here by current user and already followed ones
    const userFilterFun = (user) => {
        const isAlreayFollowed = currentUser?.following.some(following => following.username === user.username);
        if (isAlreayFollowed || user.username === username) {
            return false
        }
        else {
            return true;
        }
    }

    const whoToFollowUsers = allUsers.filter(userFilterFun);

    return (
        <main className="px-8 pb-8 mt-6 mr-8 rounded bg-white overflow-auto follow-card">
            <section>
                <h2 className="text-2xl font-black mb-6 pt-6 font-primary">Who to follow</h2>
            </section>
            {whoToFollowUsers?.length === 0 ?
                <div className="flex py-2">
                    <p>No suggestion for now.</p>
                </div>
                :
                <section className="flex flex-col gap-6" >
                    {whoToFollowUsers?.map(user => {
                        return <FollowCard user={user} key={user._id} />
                    })}

                </section>}
        </main>
    )
}
