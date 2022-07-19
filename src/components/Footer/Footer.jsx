import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs"

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full py-4 px-4 md:px-8 border-t-2 mt-auto mb-16 md:mb-0">
      <section>
        <p>Made with ❤️ by <span className="text-primary">Jeetsdev</span></p>
      </section>
      <section className="flex gap-4">
        <a href="https://github.com/jeetsdev" target={"_blank"} rel="noreferrer">
          <BsGithub className="hover:cursor-pointer" />
        </a>
        <a href="https://twitter.com/jeetsdev" target={"_blank"} rel="noreferrer">
          <BsTwitter className="hover:cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/jeetsdev/" target={"_blank"} rel="noreferrer">
          <BsLinkedin className="hover:cursor-pointer" />
        </a>
      </section>
    </footer>
  )
}
