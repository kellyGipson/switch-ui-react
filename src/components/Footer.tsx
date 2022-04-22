import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
  <footer className="footer">
    <div>Hand Crafted by Kelly Gipson</div>
    <FaGithub 
      className="githubIcon" 
      onClick={() => window.open("https://github.com/kellyGipson/", "_blank")}
    />
  </footer>
  )
}

export default Footer