import { avatar } from "../../../assets"

export const UserProfileCard = () => {
    return (
        <main className="flex flex-col mx-8 my-2 rounded bg-white p-4">
            <section className="flex flex-col gap-2 items-center justify-center">
                <img src={avatar} alt="" className="w-20" />
                <p className="text-2xl font-bold font-primary">Chaupal</p>
                <p className="text-sm text-gray-600 mx-2">@username</p>
                <p className="px-4 break-words text-sm max-w-3/5 text-center">Bio Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="httpss://www.jeetsdev.netlify.app" className="text-primary">jeetsdev.com</a>
                <button className="text-xs px-1 py-1 border-2 btn-secondary-outline rounded hover:cursor-pointer ">Edit Profile</button>
            </section>
            <section className="flex justify-center my-2">
                <p className="px-2 py-1 btn-primary-outline border-2 m-2 rounded hover:cursor-pointer">20 Followers</p>
                <p className="px-2 py-1 btn-primary-outline border-2 m-2 rounded hover:cursor-pointer">2 Following</p>
            </section>
        </main>
    )
}
