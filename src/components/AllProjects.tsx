const AllProjects = () => {
  function handleHoverAllOn() {
    document.querySelector(".allProjects")?.classList.add("allProjectsHover");
  }

  function handleHoverAllOff() {
    document.querySelector(".allProjects")?.classList.remove("allProjectsHover");
  }
  
  return (
    <div 
      className='allProjects' 
      onClick={() => console.log("TODO")}
      onMouseEnter={() => handleHoverAllOn()}
      onMouseLeave={() => handleHoverAllOff()}
    >
      <div className='squareOne' />
      <div className='squareTwo' />
      <div className='squareThree' />
      <div className='squareFour' />
    </div>
  )
}

export default AllProjects