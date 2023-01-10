import React from 'react'
import todo from "../Images/todo-app.png"
import weather from "../Images/weather-app.png"
import movie from "../Images/movie-app.png"

function Projects() {
  return (
    <div className='projects'>
        <h2 className='look'><b>TAKE A LOOK!</b></h2>
        <div className='project-images'>
        <img src={todo} alt="todo-app" width={900} height={400}></img>
        <img src={weather} alt="weather-app" width={900} height={400}></img>
        <img src={movie} alt="movie-app" width={900} height={400}></img>
        </div>
    </div>
  )
}

export default Projects