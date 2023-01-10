import React from 'react'
import todo from "../Images/todo-app.png"
import weather from "../Images/weather-app.png"
import movie from "../Images/movie-app.png"
import clinic from "../Images/clinic.jpg"
import poverty from "../Images/poverty.png"
import "../Styles/Projects.css"

function Projects() {
  return (
    <div className='projects'>
        <h2 className='look'><b>TAKE A LOOK!</b></h2>
        <h4><b>Click on image to visit site</b></h4>
        
        <div className='project-images'>
        <a href='https://frangollo-to-do-app.netlify.app/' target="_blank" rel="noreferrer"><img src={todo} alt="todo-app" width={900} height={400}></img></a> 
        <h4 className='languages'><b>Used: HTML5, CSS3, ReactJS</b></h4>
        <button className='source-code'><a href='https://github.com/MelynAtieno/TO-DO-LIST' target="_blank" rel="noreferrer"><b>SOURCE CODE</b></a></button> <br/> <br/>

        <a href='https://melynatieno.github.io/weather-app/' target="_blank" rel="noreferrer" ><img src={weather} alt="weather-app" width={900} height={400}></img> </a>
        <h4 className='languages'><b>Used: HTML5, CSS3, JavaScript</b></h4>
        <button className='source-code'><a href='https://github.com/MelynAtieno/weather-app' target="_blank" rel="noreferrer"><b>SOURCE CODE</b></a></button> <br/><br/>

        <a href='https://starlit-movie-app-1c6997.netlify.app/' target="_blank" rel="noreferrer"><img src={movie} alt="movie-app" width={900} height={400}></img> </a>
        <h4 className='languages'><b>Used: HTML5, CSS3, ReactJS</b></h4>
        <button className='source-code'><a href='https://github.com/MelynAtieno/movie-app' target="_blank" rel="noreferrer"><b>SOURCE CODE</b></a></button> <br/> <br/>
        
        
        <a href='https://github.com/Mrs-Awesome-Master-Neat/online-clinic' target="_blank" rel="noreferrer"><img src={clinic} alt="clinic-app" width={900} height={400}></img> </a>
        <h3><b>ONLINE CLINIC</b></h3>
        <h4><b>** Allows patients to seek medical advice from medical professionals online.</b></h4>
        <h4 className='languages'><b>Used: HTML5, CSS3, ReactJS, Ruby on Rails</b></h4>

        <a href='https://github.com/MelynAtieno/Poverty_Line_client' target="_blank" rel="noreferrer"><img src={poverty} alt="poverty-app" width={900} height={400}></img> </a>
        <h3><b>POVERTY-LINE</b></h3>
        <h4><b>** Helps to reduce poverty by generating employment opportunities 
          for the less fortunate people and collecting donations to help those in need.
</b></h4>
        <h4 className='languages'><b>Used: HTML5, CSS3, ReactJS, Ruby on Rails, PostgreSQL</b></h4>

        
        
        </div>
        
    </div>
  )
}

export default Projects