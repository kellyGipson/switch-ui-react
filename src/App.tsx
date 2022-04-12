import { useEffect, useState } from 'react'
import { FaReact } from "react-icons/fa";

import { AppList } from './assets/AppList';

import './styles.css'

export default function App() {
  
	const [currentTime, setCurrentTime] = useState('')
  const [pmAm, setPmAm] = useState('')

  //init current active time
  useEffect(() => {
    const date = new Date();
    let hours: number = date.getHours();
    let minutes: any = date.getMinutes();
    if (hours === 12) {
      setPmAm('PM')
    } else if (hours > 11 && hours !== 12) {
      hours = date.getHours() - 12;
      setPmAm('PM')
    } else setPmAm('AM')
    if(minutes < 10) {minutes = `0${minutes}`}
    setCurrentTime(`${hours} : ${minutes}`)
    setCurrentTime(`4 : 15`)
  }, [])
  
  //update time every 30 seconds
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
      let minutes: any = date.getMinutes();
      if (hours === 12) {
        setPmAm('PM')
      } else if (hours > 11) {
        hours = date.getHours() - 12;
        setPmAm('PM')
      } else setPmAm('AM')
      if (minutes < 10) minutes = `0${minutes}`
    setCurrentTime(`${hours} : ${minutes}`)
		setCurrentTime(`4 : 15`)
    }, 30000)
  }, [])

  const [isScrolling, setScrolling] = useState(false);
	const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
	const [clientX, setClientX] = useState(0);
	const [clientY, setClientY] = useState(0);

	// onMouseMove function
	const handleMouseMovement = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if(isScrolling) {
			e.preventDefault()
			e.currentTarget.scrollLeft = scrollLeft - e.clientX + clientX;
			e.currentTarget.scrollTop = scrollTop - e.clientY + clientY;
		}
		//  = offsetLeft - posX + e.clientX;
	}

  function handleTileClick(linksrc: string) {
    window.open(linksrc, "_blank");
  }
  
  return (
		<div className='appContainer'>
			<div className='UIContainer'>
        <div className="infoContainer">
          <img className='avatar' src={require('./assets/avatar.png')} alt="Avatar" />
          <div className='currentTime'>
            <div className='time'>{currentTime}</div>
            <div className='pmam'> {pmAm}</div>
          </div>
          <FaReact className='faReact'/>
          <div className='batteryLife'>
            <div className='batteryLifeOuter'/>
            <div className='batteryLifeInner'/>
            <div className='batteryLifeTerminal'/>
          </div> 
        </div>
        <div className='projectsContainer'
          onMouseDown={e => {
            setScrolling(true); 
            setScrollLeft(e.currentTarget.scrollLeft); 
            setScrollTop(e.currentTarget.scrollTop); 
            setClientX(e.clientX);
            setClientY(e.clientY);
          }}
          onMouseUp={e => setScrolling(false)}
          onMouseMove={(e) => handleMouseMovement(e)}>
          <img className='projectTile' src={require("./assets/pokedex.webp")} alt={AppList[0].name} onClick={() => handleTileClick(AppList[0].link)} />
          <img className='projectTile' src={require("./assets/keyboardenthusiast.webp")} alt={AppList[1].name} onClick={() => handleTileClick(AppList[1].link)} />
          <div className='allProjects' onClick={() => console.log("TODO")}>
            <div className='squareOne' />
            <div className='squareTwo' />
            <div className='squareThree' />
            <div className='squareFour' />
          </div>
        </div>
			</div>
		</div>
  );
}
