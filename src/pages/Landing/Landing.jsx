import React from 'react'
import { Link } from 'react-router-dom'
import { landingImg } from '../../assets'

export const Landing = () => {

    return (
        <main className='flex justify-center items-center min-h-screen'>
            <div className='landing-container grid grid-cols-1 w-4/5 sm:grid-cols-2'>
                <section className='container__left flex justify-center items-center'>
                    <img className='w-auto h-auto object-contain rounded-3xl landing-img hidden sm:block' src={landingImg} alt="" />
                </section>
                <section className='container__right flex justify-center'>
                    <div className='flex justify-center flex-col max-w-3/5'>
                        <h1 className='font-primary text-6xl text-left my-8 text-primary font-bold'>चौपाल</h1>
                        <p className='my-8 text-lg'>
                            <span className='text-primary font-primary font-extrabold text-3xl'>I</span>n the world of Facebook and Instagram, be someone <span className='text-primary font-primary font-extrabold text-3xl'>चौपाल</span> Mate...
                        </p>
                        <div className='flex flex-col my-8 w-full'>
                            <Link to={"/login"} className='py-2 px-4 rounded btn-primary text-lg font-bold text-center'>Login
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
