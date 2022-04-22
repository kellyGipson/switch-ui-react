import { useState } from "react"
import MainMenu from "./components/mainMenu"
import AvatarMenu from "./components/avatarMenu"
import useIsMobile from "./hooks/useIsMobile"

import "./App.css"
import "./styles/MainMenu.css"
import "./styles/AvatarMenu.css"
import "./styles/Footer.css"
import "./styles/AllProjects.css"
import "./styles/InfoContainer.css"

export default function App() {

  function handleHoverOn(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.currentTarget.classList.add((event.currentTarget.classList.contains("avatar")) ? "hoverAvatar" : "hover"); 
  }

  function handleHoverOff(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.currentTarget.classList.remove((event.currentTarget.classList.contains("avatar")) ? "hoverAvatar" : "hover");
  }

  function handleAvatarClick() {
    document.querySelector(".appContainer")?.classList.add("menuOff");
    document.querySelector(".avatarMenuContainer")?.classList.remove("d-none");
    document.querySelector(".avatarMenuContainer")?.classList.add("menuOn");
  }

  function handleExitAvatarMenu() {
    document.querySelector(".appContainer")?.classList.remove("menuOff");
    document.querySelector(".appContainer")?.classList.remove("d-none");
    document.querySelector(".avatarMenuContainer")?.classList.add("d-none");
    document.querySelector(".avatarMenuContainer")?.classList.remove("menuOn");
  }

  function handleHoverNavItemOn(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.currentTarget.classList.add("hoverNav");
  }

  function handleHoverNavItemOff(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.currentTarget.classList.remove("hoverNav");
  }

  const [prevAvatarContent, setPrevAvatarContent]:[any, React.Dispatch<React.SetStateAction<any>>] = useState();
  const [prevNavClickEvent, setPrevNavClickEvent]:[any, React.Dispatch<React.SetStateAction<any>>] = useState();
  function handleAvatarNavClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    handleAvatarMenuClick();
    if(prevNavClickEvent) {
      prevNavClickEvent.target.children[0].classList.remove("navSelected");
      prevNavClickEvent.target.classList.remove("navSectionSelected");
      prevAvatarContent?.classList.add("d-none");
    }
    e.currentTarget.children[0].classList.add("navSelected");
    e.currentTarget.classList.add("navSectionSelected");
    document.querySelector(`.${e.currentTarget.id}`)?.classList.remove("d-none");
    setPrevNavClickEvent(e);
    setPrevAvatarContent(document.querySelector(`.${e.currentTarget.id}`));
  }

  function handleAvatarMenuClick() {
    document.querySelector(".avatarNav")?.classList.toggle("hidden-left");
    document.querySelector(".avatarNav")?.classList.toggle("show-left");
  }

  // const [allAppsOpen, setAllAppsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [pmAm, setPmAm] = useState("");
  
  return (
    <>
      <MainMenu 
        handleHoverOn={handleHoverOn}
        handleHoverOff={handleHoverOff}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        pmAm={pmAm}
        setPmAm={setPmAm}
        handleAvatarClick={handleAvatarClick}
      />
      <AvatarMenu
        useIsMobile={useIsMobile}
        handleAvatarMenuClick={handleAvatarMenuClick}
        handleExitAvatarMenu={handleExitAvatarMenu}
        handleAvatarNavClick={handleAvatarNavClick}
        handleHoverNavItemOn={handleHoverNavItemOn}
        handleHoverNavItemOff={handleHoverNavItemOff}
      />
    </>
  );
}
