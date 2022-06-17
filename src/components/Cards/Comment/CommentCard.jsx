import React from 'react'

export const CommentCard = ({ comment }) => {
    console.log('comment: ', comment);
    return (
        <main className='flex mt-2'>
            <section>
                <img src={comment?.avatar} alt="" className="w-10 h-10 mr-4 rounded-full object-cover border-2 p-px" />
            </section>
            <section>
                <div className="w-full">
                    <div className="flex items-center mb-2">
                        <p className="font-bold">{comment?.fullName} Testing</p>
                        <p className="text-xs text-gray-600 mx-2">@{comment?.username}</p>
                    </div>
                    <p className="my-2">
                        {comment?.text}
                    </p>
                </div>
            </section>
        </main>
    )
}
