import React from 'react'
import { avatar } from '../../../assets'

export const FollowCard = () => {
    return (
        <div className='flex items-center  border-gray-400  rounded'>
            <section>
                <img src={avatar} alt="" className='w-10 mr-2' />
            </section>
            <section className='flex flex-col'>
                <p className='font-bold'>chaupal</p>
                <p className='text-xs text-gray-600'>@chaupal</p>
            </section>
            <button className='text-primary underline hover:no-underline px-2 py-1 ml-auto rounded text-sm font-bold text-black'>Follow + </button>
        </div>
    )
}
