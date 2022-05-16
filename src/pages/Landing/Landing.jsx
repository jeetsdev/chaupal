import React from 'react'
import { Link } from 'react-router-dom'
import { landingImg } from '../../assets'

export const Landing = () => {

    return (
        <main className='w-screen flex justify-center items-center'>
            <div className='landing-container grid grid-cols-2 h-screen place-items-center-center w-4/5'>
                <section className='container__left flex justify-center items-center'>
                    <img className='w-auto h-auto rounded-3xl' src={landingImg} alt="" />

                </section>
                <section className='container__right flex justify-center'>
                    <div className='flex justify-center flex-col max-w-3/5'>
                        <h1 className='font-primary text-5xl text-left my-8 text-primary font-bold'>Chaupal</h1>
                        <p className='my-8 text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, excepturi!
                        </p>
                        <div className='flex flex-col my-8 w-full'>
                            <Link to={"/login"} className='border-2 py-2 px-4 rounded btn-primary text-lg font-bold text-center'>Login
                            </Link>
                            <p className='text-center m-4'>Don't have an account ?
                                <Link to={"/signup"} className='underline hover:no-underline mx-2 text-primary transition transition-underline'>Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
