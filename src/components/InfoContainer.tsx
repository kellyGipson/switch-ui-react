import React from 'react'
import { FaReact } from 'react-icons/fa'

type propTypes = {
  handleAvatarClick: () => void;
  handleHoverOn: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleHoverOff: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  currentTime: string;
  pmAm: string;
}

const InfoContainer = ({ handleAvatarClick, handleHoverOn, handleHoverOff, currentTime, pmAm }:propTypes) => {
  return (
  <div className="infoContainer">
    <div>
      <img className='avatar' 
        onClick={() => handleAvatarClick()}
        onMouseEnter={(e) => handleHoverOn(e)} 
        onMouseLeave={(e) => handleHoverOff(e)}
        src={require('../assets/avatar.png')} 
        alt="Avatar" 
      />
    </div>
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
  )
}

export default InfoContainer