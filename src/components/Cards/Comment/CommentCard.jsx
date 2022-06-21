import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete, MdModeEditOutline } from "react-icons/md"
import { deleteComment } from '../../../features/Commnets/CommentSlice';

export const CommentCard = ({ comment, postID }) => {

    const { userData: { fullName, avatar, username }, authToken } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const deleteCommentHandler = () => {
        dispatch(deleteComment({
            postID: postID,
            commentID: comment?._id,
            authToken: authToken
        }))
    }

    return (
        <main className='flex mt-2'>
            <section>
                <img src={comment?.avatar ?? avatar} alt="" className="w-10 h-10 mr-4 rounded-full object-cover border-2 p-px" />
            </section>
            <section>
                <div className="w-full">
                    <div className="flex items-center mb-2">
                        <p className="font-bold">{comment?.fullName ?? fullName}</p>
                        <p className="text-xs text-gray-600 mx-2">@{comment?.username}</p>
                    </div>
                    <p className="my-2">
                        {comment?.text}
                    </p>
                </div>
            </section>
            {comment?.username === username && <section className='ml-auto flex items-end'>
                <MdDelete className='text-xl mx-1 text-zinc-700 hover:cursor-pointer btn-icon' onClick={deleteCommentHandler}/>
                <MdModeEditOutline className='text-xl mx-1 text-zinc-700 hover:cursor-pointer btn-icon' />
            </section>}
        </main>
    )
}
