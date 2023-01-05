import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import "../Styles/Home.css"

function Home() {
  return (
    <div className='home-page'>
        <h2>Hi!<span className='hand-wave' role="img" aria-label= "wave">👋</span> </h2>
        <h2 className='i-am'>I'm</h2>
        <h1 className='name'><b>MELYN ATIENO</b></h1>
        <h2>and I am a</h2>
       <h1 className='job-title'> <TypewriterComponent 
          options={{
            strings:["SOFTWARE ENGINEER"],
            autoStart: true,
            loop: true,
            pauseFor:50
          }}
        />
        </h1>
      

       
    </div>
  )
}

export default Home