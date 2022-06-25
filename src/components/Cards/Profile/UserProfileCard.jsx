import { useState } from "react";
import { useSelector } from "react-redux";
import { EditProfileModal } from "../../Modals/EditProfileModal";

export const UserProfileCard = () => {

    const { userData } = useSelector(state => state.auth);
    const { allUsers } = useSelector(state => state.user);
    const activeUser = allUsers.find(user => user.username === userData.username)
    const [editProfileModal, setEditProfileModal] = useState(false);

    const editProfileHandler = (event) => {
        event.stopPropagation();
        setEditProfileModal(prev => !prev);
    }

    return (
        <main className="flex flex-col mx-8 my-2 rounded bg-white p-4">
            <EditProfileModal editProfileModal={editProfileModal} userData={activeUser} setEditProfileModal={setEditProfileModal} />
            <section className="flex flex-col gap-2 items-center justify-center">
                <img src={activeUser?.avatar} alt="" className="w-20 h-20 rounded-full object-cover border-2 p-px" />
                <p className="text-2xl font-bold font-primary">{activeUser?.fullName}</p>
                <p className="text-sm text-gray-600 mx-2">@{activeUser?.username}</p>
                <p className="px-4 break-words text-sm max-w-3/5 text-center">{activeUser?.bio}</p>
                <a href="httpss://www.jeetsdev.netlify.app" className="text-primary">{activeUser?.website}</a>
                <button className="text-xs px-1 py-1 border-2 btn-secondary-outline rounded hover:cursor-pointer " onClick={editProfileHandler}>Edit Profile</button>
            </section>
            <section className="flex justify-center my-2">
                <p className="px-2 py-1 btn-primary-outline border-2 m-2 rounded hover:cursor-pointer">{activeUser?.followers?.length} Followers</p>
                <p className="px-2 py-1 btn-primary-outline border-2 m-2 rounded hover:cursor-pointer">{activeUser?.following?.length} Following</p>
            </section>
        </main>
    )
}
