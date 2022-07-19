import { useDispatch, useSelector } from "react-redux"
import { unfollowUser } from "../../features/User/UserSlice";
import { MdCancel } from "react-icons/md"

export const FollowingModal = ({ setFollowingModal, followingModal, userData }) => {

    const dispatch = useDispatch();
    const { authToken } = useSelector(state => state.auth);

    const unfollowUserHandler = (userId) => {
        dispatch(unfollowUser({ unfollowUserID: userId, authToken: authToken }))
    }
    return (
        <main className={`fixed flex justify-center items-center left-0 right-0 bottom-0 top-0 bg-transparent z-20 ` + (followingModal ? " post-modal-active" : " post-modal-hide")} onClick={() => setFollowingModal(prev => !prev)}>
            <div className={`new-post-modal bg-white flex flex-col fixed rounded z-20 px-4` + (followingModal ? " post-modal-active" : " post-modal-hide")} onClick={(e) => { e.stopPropagation() }}>
                <section className="flex items-center">
                    <p className="mr-auto text-primary font-bold text-xl font-primary">Following</p>
                    <MdCancel className="btn-secondary-outline text-xl rounded w-6 h-6 my-4 flex justify-center items-center hover:cursor-pointer" onClick={() => setFollowingModal(prev => !prev)} />
                </section>
                <section>
                    {userData?.following?.length === 0 ?
                        <div className="flex py-2">
                            <p>No Followings...</p>
                        </div>
                        :
                        <div className="flex flex-col gap-6 pb-2" >
                            {userData?.following?.map(following => {
                                return <div className='flex items-center border-gray-400 rounded' key={following._id}>
                                    <section>
                                        <img src={following?.avatar} alt="" className='w-10 h-10 mr-4 rounded-full object-cover border-2 p-px' />
                                    </section>
                                    <section className='flex flex-col'>
                                        <p className='font-bold'>{following?.fullName}</p>
                                        <p className='text-xs text-gray-600'>{following?.username}</p>
                                    </section>
                                    <button className='text-primary underline hover:no-underline px-2 py-1 ml-auto rounded text-sm font-bold text-black' onClick={() => unfollowUserHandler(following._id)}>Unfollow - </button>
                                </div>
                            })}
                        </div>}
                </section>
            </div>
        </main>
    )
}
