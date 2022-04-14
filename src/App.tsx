import { useEffect, useState } from "react"
import MainMenu from "./components/mainMenu"
import AvatarMenu from "./components/avatarMenu"

import "./styles/MainMenu.css"
import "./styles/AvatarMenu.css"

export default function App() {
  
  const getIsMobile = () => window.innerWidth < 501;

  // This hook is used to determine if the device is mobile/vertical layout
  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(getIsMobile);
    
    useEffect(() => {
      const onResize = () => setIsMobile(getIsMobile());
  
      window.addEventListener("resize", onResize);
      console.log("Resize");
  
      return () => {
        window.removeEventListener("resize", onResize);
        console.log("Unmounting useIsMobile");
      }
    }, [isMobile]);
  
    return isMobile
  }

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
