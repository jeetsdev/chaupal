import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { followUser, unfollowUser } from "../../../features/User/UserSlice";
import { FollowersModal } from "../../Modals/FollowersModal";
import { FollowingModal } from "../../Modals/FollowingModal";

export const OtherProfileCard = ({ userData }) => {
    const { authToken, userData: { username } } = useSelector(state => state.auth);
    const { allUsers } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [followersModal, setFollowersModal] = useState(false);
    const [followingModal, setFollowingModal] = useState(false);
    const currentUser = allUsers.find(user => user?.username === username);
    const isAlreayFollowed = currentUser?.following.some(following => following?.username === userData?.username);

    const followUserHandler = () => {
        dispatch(followUser({ followUserID: userData._id, authToken: authToken }))
    }

    const unfollowUserHandler = () => {
        dispatch(unfollowUser({ unfollowUserID: userData._id, authToken: authToken }))
    }

    const followingModalHandler = (event) => {
        event.stopPropagation();
        setFollowingModal(prev => !prev);
    }

    const followersModalHandler = (event) => {
        event.stopPropagation();
        setFollowersModal(prev => !prev);
    }

    return (
        <main className="flex flex-col mx-4 md:mx-8 my-2 rounded bg-white p-4">

            {/* Modal here */}
            <FollowingModal followingModal={followingModal} userData={userData} setFollowingModal={setFollowingModal} />
            <FollowersModal followersModal={followersModal} setFollowersModal={setFollowersModal} userData={userData} />

            <section className="flex flex-col gap-2 items-center justify-center">
                <img src={userData?.avatar} alt="user avatar" className="w-20 h-20 rounded-full object-cover border-2 p-px" />
                <p className="text-2xl font-bold font-primary">{userData?.fullName}</p>
                <p className="text-sm text-gray-600 mx-2">@ {userData?.username}</p>
                <p className="px-4 break-words text-sm max-w-3/5 text-center">{userData?.bio}</p>
                <a href="httpss://www.jeetsdev.netlify.app" className="text-primary">{userData?.website}</a>
                {
                    isAlreayFollowed ? <button className="px-4 py-2 btn-secondary rounded hover:cursor-pointer " onClick={unfollowUserHandler}>Unfollow</button> : <button className="px-4 py-2 btn-primary rounded hover:cursor-pointer" onClick={followUserHandler}>Follow</button>
                }

            </section>
            <section className="flex justify-center my-2">
                <p className="px-2 py-1 btn-secondary-outline border-2 m-2 rounded hover:cursor-pointer" onClick={followersModalHandler}>{userData?.followers?.length} Followers</p>
                <p className="px-2 py-1 btn-secondary-outline border-2 m-2 rounded hover:cursor-pointer" onClick={followingModalHandler}>{userData?.following?.length} Following</p>
            </section>
        </main>
    )
}
