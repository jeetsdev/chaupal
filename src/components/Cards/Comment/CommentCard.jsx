import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md"
import { deleteComment } from '../../../features/Commnets/CommentSlice';
import { getAllPost } from '../../../features/Post/PostSlice';
import { useNavigate } from 'react-router-dom';

export const CommentCard = ({ comment, postID }) => {

    const { userData: { username }, authToken } = useSelector(state => state.auth);
    const { allUsers } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Getting the current user here 
    const currentUser = (allUsers.filter(user => comment.username === user.username))[0];

    const deleteCommentHandler = () => {
        dispatch(deleteComment({
            postID: postID,
            commentID: comment?._id,
            authToken: authToken
        }))
        dispatch(getAllPost());
    }

    const usernameClickHandler = (event) => {
        event.stopPropagation()
        if (comment.username === username) {
            navigate("/profile")
        }
        else {
            navigate(`/profile/${comment.username}`)
        }
    }

    return (
        <main className='flex mt-2'>
            <section>
                <img src={currentUser?.avatar} alt="" className="w-10 h-10 mr-4 rounded-full object-cover border-2 p-px" />
            </section>
            <section>
                <div className="w-full">
                    <div className="flex items-center mb-2" onClick={usernameClickHandler}>
                        <p className="font-bold hover:underline">{currentUser?.fullName}</p>
                        <p className="text-xs text-gray-600 mx-2 hover:underline">@{comment?.username}</p>
                    </div>
                    <p className="my-2 text-gray-800">
                        {comment?.text}
                    </p>
                </div>
            </section>
            {comment?.username === username && <section className='ml-auto flex items-end'>
                <MdDelete className='text-xl mx-1 text-zinc-700 hover:cursor-pointer btn-icon' onClick={deleteCommentHandler} />
            </section>}
        </main>
    )
}
