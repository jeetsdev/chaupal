import { BsGithub, BsTwitter, BsLinkedin, BsBagFill } from "react-icons/bs"

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full py-4 px-8 border-t-2 mt-auto">
      <section>
        <p>Made with ❤️ by <span className="text-primary">Jeetsdev</span></p>
      </section>
      <section className="flex gap-4">
        <BsGithub className="hover:cursor-pointer" style={{}} />
        <BsTwitter className="hover:cursor-pointer" />
        <BsLinkedin className="hover:cursor-pointer" />
        <BsBagFill className="hover:cursor-pointer" />
      </section>
    </footer>
  )
}
