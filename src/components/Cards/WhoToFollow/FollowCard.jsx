import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { followUser } from '../../../features/User/UserSlice';

export const FollowCard = ({ user }) => {

    const { authToken } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const followUserHandler = () => {
        dispatch(followUser({ followUserID: user._id, authToken: authToken }))
    }

    const usernameClickHandler = (event) => {
        navigate(`/profile/${user.username}`)
    }

    return (
        <div className='flex items-center  border-gray-400  rounded'>
            <section>
                <img src={user?.avatar} alt="" className='w-10 h-10 mr-4 rounded-full object-cover border-2 p-px' />
            </section>
            <section className='flex flex-col' onClick={usernameClickHandler}>
                <p className='font-bold hover:underline'>{user?.fullName}</p>
                <p className='text-xs text-gray-600 hover:underline'>{user?.username}</p>
            </section>
            <button className='text-primary underline hover:no-underline px-2 py-1 ml-auto rounded text-sm font-bold text-black' onClick={followUserHandler}>Follow + </button>
        </div>
    )
}
