import { MdCancel } from "react-icons/md";

export const FollowersModal = ({ setFollowersModal, followersModal, userData }) => {
    return (
        <main className={`fixed flex justify-center items-center left-0 right-0 bottom-0 top-0 bg-transparent z-20 ` + (followersModal ? " post-modal-active" : " post-modal-hide")} onClick={() => setFollowersModal(prev => !prev)}>
            <div className={`new-post-modal bg-white flex flex-col fixed rounded z-20 px-4` + (followersModal ? " post-modal-active" : " post-modal-hide")} onClick={(e) => { e.stopPropagation() }}>
                <section className="flex items-center">
                    <p className="mr-auto text-primary font-bold text-xl font-primary">Followers</p>
                    <MdCancel className="btn-secondary-outline text-xl rounded w-6 h-6 my-4 flex justify-center items-center hover:cursor-pointer" onClick={() => setFollowersModal(prev => !prev)} />
                </section>
                <section>
                    {userData?.followers?.length === 0 ?
                        <div className="flex py-2">
                            <p>No Followers...</p>
                        </div>
                        :
                        <div className="flex flex-col gap-6 pb-2" >
                            {userData?.followers?.map(follower => {
                                return <div className='flex items-center border-gray-400  rounded' key={follower._id}>
                                    <section>
                                        <img src={follower?.avatar} alt="" className='w-10 h-10 mr-4 rounded-full object-cover border-2 p-px' />
                                    </section>
                                    <section className='flex flex-col'>
                                        <p className='font-bold'>{follower?.fullName}</p>
                                        <p className='text-xs text-gray-600'>{follower?.username}</p>
                                    </section>
                                </div>
                            })}
                        </div>}
                </section>
            </div>
        </main>
    )
}
