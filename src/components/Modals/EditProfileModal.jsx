import { ImUpload2 } from "react-icons/im"
import { MdCancel } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import "./NewPostModal.css"
import { updateUserData } from "../../features/User/UserSlice"

export const EditProfileModal = ({ editProfileModal, userData, setEditProfileModal }) => {

    const { authToken } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [newUserData, setNewUserData] = useState({
        fullName: "",
        bio: "",
        website: "",
        avatar: ""
    })

    const avatarHandler = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setNewUserData({ ...newUserData, avatar: reader.result });
            }

        }
        reader.readAsDataURL(event.target.files[0])
    }

    const editProfileSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(updateUserData({
            userData: newUserData,
            authToken: authToken
        }))
        setEditProfileModal(prev => !prev);
    }

    useEffect(() => {
        setNewUserData({
            fullName: userData?.fullName,
            bio: userData?.bio,
            website: userData?.website,
            avatar: userData?.avatar
        });
    }, [userData?.fullName, userData?.bio, userData?.website, userData?.avatar])


    return (
        <main className={`fixed flex justify-center items-center left-0 right-0 bottom-0 top-0 bg-transparent z-20 ` + (editProfileModal ? " post-modal-active" : " post-modal-hide")} onClick={() => setEditProfileModal(prev => !prev)}>
            <div className={`new-post-modal bg-white flex flex-col fixed rounded z-20 px-4` + (editProfileModal ? " post-modal-active" : " post-modal-hide")} onClick={(e) => { e.stopPropagation() }}>
                <section className="flex justify-end items-center">
                    <p className="mr-auto text-primary font-bold text-xl font-primary">Edit Profile</p>
                    <MdCancel className="btn-secondary-outline text-xl rounded w-6 h-6 my-4 flex justify-center items-center hover:cursor-pointer" onClick={() => setEditProfileModal(prev => !prev)} />
                </section>
                <section className="w-full flex flex-col gap-2 items-center justify-center h-full mb-6">
                    <form action="" onSubmit={editProfileSubmitHandler} className="flex flex-col justify-center items-center">
                        <img src={newUserData?.avatar} alt="" className="w-20 h-20 rounded-full object-cover border-2 p-px" />
                        <div className="flex items-center justify-center py-4">
                            <label htmlFor="user-avatar" className="btn-icon hover:cursor-pointer flex items-center justify-center flex-col">
                                <ImUpload2 className="" />
                                <p>
                                    Update avatar
                                </p>
                            </label>
                            <input type="file" id="user-avatar" accept="image/png, image/jpeg, image/jpg" className="hidden" onChange={avatarHandler} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <input type="text" className="border-2 outline-none rounded p-2 text-2xl font-bold font-primary text-center" value={newUserData?.fullName} onChange={(event) => setNewUserData({ ...newUserData, fullName: event.target.value })} />
                            <input type="text" className="border-2 outline-none rounded p-2 px-4 break-words text-sm w-full text-center" value={newUserData?.bio} onChange={(event) => setNewUserData({ ...newUserData, bio: event.target.value })} />
                            <input type="text" className="border-2 outline-none rounded p-2 text-primary text-center" value={newUserData?.website} onChange={(event) => setNewUserData({ ...newUserData, website: event.target.value })} />
                        </div>
                        <button type="submit" className="btn-primary p-2 my-2 rounded">Update</button>
                    </form>
                </section>
            </div>
        </main>
    )
}