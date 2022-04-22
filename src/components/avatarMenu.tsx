import { GrFormClose } from "react-icons/gr"
import { RiMenuUnfoldLine } from 'react-icons/ri'

type propTypes = {
  useIsMobile(): boolean,
  handleAvatarMenuClick(): void,
  handleExitAvatarMenu(): void,
  handleAvatarNavClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void,
  handleHoverNavItemOn(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void,
  handleHoverNavItemOff(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}

export default function AvatarMenu({
  useIsMobile,
  handleAvatarMenuClick,
  handleExitAvatarMenu,
  handleAvatarNavClick,
  handleHoverNavItemOn,
  handleHoverNavItemOff,
}:propTypes) {


  return (
    <div className="avatarMenuContainer d-none">
        <section className="avatarInfoContainer">
          <img className="avatarImg" src={require("../assets/avatar.png")} alt="Avatar" />
          <h1 className="avatarInfo">Kelly Gipson</h1>
          <RiMenuUnfoldLine 
            className={`${(useIsMobile()) ? "avatarNavMenu" : "d-none"}`}
            onClick={() => handleAvatarMenuClick()}
          />
          <GrFormClose className="avatarExitButton" stroke="white" onClick={() => handleExitAvatarMenu()}/>
          <div className={`${(useIsMobile()) ? "d-none" : "avatarInfoHR"}`}/>
        </section>
        <nav className="avatarNav show-left">
          <div id="aboutMe" className="avatarNavItem"
            onClick={(e) => handleAvatarNavClick(e)}
            onMouseEnter={(e) => handleHoverNavItemOn(e)} 
            onMouseLeave={(e) => handleHoverNavItemOff(e)}
          >
            <div></div>
            About Me
          </div>
          <div className="avatarNavHR"/>
          <div id="skills" className="avatarNavItem"
            onClick={(e) => handleAvatarNavClick(e)}
            onMouseEnter={(e) => handleHoverNavItemOn(e)}
            onMouseLeave={(e) => handleHoverNavItemOff(e)}
          >
            <div></div>
            Skills
          </div>
          <div id="projects" className="avatarNavItem"
            onClick={(e) => handleAvatarNavClick(e)}
            onMouseEnter={(e) => handleHoverNavItemOn(e)}
            onMouseLeave={(e) => handleHoverNavItemOff(e)}
          >
            <div></div>
            Projects
          </div>
          <div id="contact" className="avatarNavItem"
            onClick={(e) => handleAvatarNavClick(e)}
            onMouseEnter={(e) => handleHoverNavItemOn(e)}
            onMouseLeave={(e) => handleHoverNavItemOff(e)}
          >
            <div></div>
            Contact
          </div>
        </nav>
        <section className="avatarSelectedContent" 
          onClick={() => { if(document.querySelector(".avatarNav")?.classList.contains("show-left")) handleAvatarMenuClick(); }}>
          <main className="avatarContentContainer">
            <article className="aboutMe avatarContent d-none">
              <h1 className="contentHeading">About Me</h1>
              <div className="avatarContentHR"></div>
              <div className="contentText">
                <h3>Hello, my name is Kelly. I'm a software developer specializing in HTML, CSS, and Javascript(React).</h3>
                <p>I have been vigorously and enthusiastically self-learning programming for the past year, and have developed an intense passion for all things code. Over the last year, I have dabbled in Python, Java, C/C++. My programming knowledge transfers from language to language and I am a fast learner. A few traits that describe me are problem-solver, organized, adaptive, creative, inquisitive, self-motivated, and I have a great sense of attention to detail.</p>
                <p></p>
              </div>
            </article>
            <article className="skills avatarContent d-none">
              <h1 className="contentHeading">Skills</h1>
              <div className="avatarContentHR"></div>
              <article className="contentText">
                <ul>
                  <h3>Technical Skills</h3>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>C/C++</li>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>Git</li>
                  <li>API's</li>
                </ul>
                <ul>
                  <h3>Soft Skills:</h3>
                  <li>Problem-Solving</li>
                  <li>Algorithmic Programming</li>
                  <li>Curiosity</li>
                  <li>Communication</li>
                </ul>
              </article>
            </article>
            <article className="projects avatarContent d-none">
              <h1 className="contentHeading">Projects</h1>
              <div className="avatarContentHR"></div>
              <article className="contentText">
                <h3>Pokedex Web App</h3>
                <p>The Pokedex Web App was created using React, TypeScript and SCSS/Styled Components. This was my first time using TypeScript, and I learned all about type inference and had many struggles using React types along with TypeScript. It was a big challenge for me to undertake, but my previous knowledge of types from other languages like C and C++ guided me to a (mostly) finished application.</p>
                <h3>Keyboard Enthusiast Website</h3>
                <p>My Keyboard Enthusiast Website was made with TypeScript and React. I ditched SCSS and Styled Components because of the added complexity. This website is really too simple to need anything too complicated. I spent a tremendous amount of time getting the styling for this website right, along with UX features like the menu disappearing when you scroll, and the drop down nav menu. All of that was done using JavaScript and this website took a lot of patience getting the styling correct.</p>
              </article>
            </article>
            <article className="contact avatarContent d-none">
              <h1 className="contentHeading">Contact</h1>
              <div className="avatarContentHR"></div>
              <article className="contentText">
                <p>Email: <a href="mailto: kelly@gipsonsoftware.com">kelly@gipsonsoftware.com</a></p>
                <p>Github: <a target="_blank" rel="noreferrer" href="https://github.com/kellyGipson/">https://github.com/kellyGipson/</a></p>
              </article>
            </article>
          </main>
        </section>
      </div>
  )
}