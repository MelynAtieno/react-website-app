import React from 'react';
import "../Styles/About.css"

function About() {
  return (
    <div className='abt-page'>
      <p className='about'> My name is <b>Melyn Atieno Were</b>
        . Currently, I hold a Bachelor's Degree in Financial Economics but I have always had a passion for tech
        and this made me join a Bootcamp to learn Software Engineering. I enjoyed the experience
        and I look forward to progressing in my career as a Software Engineer. <br/> <br/>
        I really enjoy solving complex problems and I love how I can use technology to solve problems. I 
        consider myself as someone who is self-driven, passionate about technology, a fast learner, a good
        collaborator and a good leader. 
      </p>

      <button className='resume'><a className='resume-link' target="_blank" rel="noreferrer" href='https://docs.google.com/document/d/1P9ndnqdrqfuw5XtAsNyyb-4iR064dGjOWprlESY1KOo/edit?usp=sharing'>
  <b>MY RESUME</b>
</a>
</button>
      <h3 className='skillset'><b>MY SKILLSET</b></h3>
      <div className='stack'>
     
      <div className='col-1'>
      <ul>
        <li>JavaScript</li>
        <li>React JS</li>
        <li>Ruby</li>
        </ul>
      </div>

      <div className='col-2'>
        <ul>
        <li>Ruby on Rails</li>
        <li>HTML & CSS</li>
        <li>MySQL, PostgreSQL & SQLite</li>
      </ul>
      </div>
      </div>

<div className='tech-tools'>
      <h3 className='tools'><b>TOOLS I USE</b></h3>
      <ul>
        <li>Visual Studio</li>
        <li>Git & Github</li>
        <li>Heroku</li>
        <li>Netlify</li>
      </ul>
 </div>     

    </div>
  )
}

export default About