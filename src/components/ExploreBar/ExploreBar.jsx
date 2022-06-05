import React from 'react'

const ExploreBtn = ({ name }) => {
    return <p className='btn-secondary-outline rounded hover:cursor-pointer px-3 py-1'>{name}</p>
}

export const ExploreBar = () => {
    return (
        <main className="flex flex-col mx-8 mt-6">
            <p className='text-2xl font-bold font-primary'>Explore</p>
            <section className='flex my-2 gap-4'>
                <ExploreBtn name="For You" />
                <ExploreBtn name="Recent" />
                <ExploreBtn name="Trending" />
                <ExploreBtn name="Sort By Date" />
            </section>
        </main>

    )
}
