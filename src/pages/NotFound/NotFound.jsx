import React from 'react'
import { Link } from 'react-router-dom'
import { notFoundImg } from '../../assets'

export const NotFound = () => {
    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center flex-col">
                <section className='w-2/5'>
                    <img
                        className="w-auto h-full"
                        src={notFoundImg}
                        alt="Page not found"
                    />
                </section>
                <section className='m-8'>
                    <Link to={"/"} className='py-2 px-4 rounded btn-primary font-bold text-center m-8'>Go to Chaupal</Link>
                </section>
            </div>
        </>

    )
}
