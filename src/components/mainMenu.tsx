import React, { useState, useEffect } from "react"
import { AppList } from "../assets/AppList";

import InfoContainer from "../components/InfoContainer"
import AllProjects from "../components/AllProjects"
import Footer from "../components/Footer"

type propTypes = {
  handleAvatarClick(): void,
  handleHoverOn(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void,
  handleHoverOff(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void,
  currentTime: string,
  setCurrentTime: React.Dispatch<React.SetStateAction<string>>,
  pmAm: string,
  setPmAm: React.Dispatch<React.SetStateAction<string>>
}

export default function MainMenu({ 
  handleAvatarClick,
  handleHoverOn, 
  handleHoverOff, 
  currentTime, 
  setCurrentTime, 
  pmAm, 
  setPmAm }:propTypes) {
    
  //init current active time
  useEffect(() => {
    const date = new Date();
    let hours: number = date.getHours();
    let minutes: any = date.getMinutes();
    if (hours === 12) {
      setPmAm('PM');
    } else if (hours > 11 && hours !== 12) {
      hours = date.getHours() - 12;
      setPmAm('PM');
    } else setPmAm('AM');
    if(minutes < 10) {minutes = `0${minutes}`}
    setCurrentTime(`${hours} : ${minutes}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  //update time every 30 seconds
  useEffect(() => {
    setInterval((id = 1) => {
      const date = new Date();
      let hours = date.getHours();
      let minutes: any = date.getMinutes();
      if (hours === 12) {
        setPmAm('PM');
      } else if (hours > 11) {
        hours = date.getHours() - 12;
        setPmAm('PM');
      } else {
        setPmAm('AM');
      }
      if (minutes <= 9) minutes = `0${minutes}`
        setCurrentTime(`${hours} : ${minutes}`);
    }, 3000)
    return() => {clearInterval(1);}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isScrolling, setScrolling] = useState(false);
	const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
	const [clientX, setClientX] = useState(0);
	const [clientY, setClientY] = useState(0);
	const handleMouseMovement = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if(isScrolling) {
			e.preventDefault()
			e.currentTarget.scrollLeft = scrollLeft - e.clientX + clientX;
			e.currentTarget.scrollTop = scrollTop - e.clientY + clientY;
		}
	}

  function handleTileClick(linksrc: string, event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    if(clientX === event.clientX && clientY === event.clientY) 
      window.open(linksrc, "_blank");
  }

  function handleUIAnimationEnd(event: React.AnimationEvent<HTMLDivElement>) {
    event.currentTarget.classList.add("d-none");
  }
  
  return (
    <div className='appContainer' onAnimationEnd={(e) => handleUIAnimationEnd(e)}>
      <div className='UIContainer'>
        <InfoContainer 
          handleAvatarClick={handleAvatarClick} 
          handleHoverOn={handleHoverOn} 
          handleHoverOff={handleHoverOff} 
          currentTime={currentTime} 
          pmAm={pmAm}
        />
        <div className='projectsContainer'
          onMouseDown={(e) => {
            setScrolling(true); 
            setScrollLeft(e.currentTarget.scrollLeft); 
            setScrollTop(e.currentTarget.scrollTop); 
            setClientX(e.clientX);
            setClientY(e.clientY);
          }}
          onMouseUp={(e) => setScrolling(false)}
          onMouseMove={(e) => handleMouseMovement(e)}>
            {AppList.map((tile, idx) =>
              <img 
              key={idx}
              onMouseEnter={(e) => handleHoverOn(e)} 
              onMouseLeave={(e) => handleHoverOff(e)}
              className='projectTile' 
              onClick={(e) => handleTileClick(tile.link, e)} 
              src={require(`../assets/${tile.img}`)} 
              alt={tile.name} 
              />
            )}
          <AllProjects />
          <Footer />
        </div>
			</div>
    </div>
  )
}