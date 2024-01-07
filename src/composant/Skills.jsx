import React from 'react'
import { useState } from 'react';
import { Frontend, Backend, Databases, CMS, skills } from '../assets/skillsItem.jsx'
function Skills() {
const [selectsection, setSelectedSection] = useState('skills');

  
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>I am a seasoned full-stack developer with a broad range of skills and knowledge in frontend and backend development. My ability to work with a variety of technologies enables me to develop end-to-end solutions that satisfy the ever-changing needs of the contemporary digital landscape. Below is a summary of my key competencies:</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6"   >

          <div className="side2">
          <nav className='nav'>
            <div onClick={()=>setSelectedSection('skills')} className={selectsection ==='skills'?'active':''}>Skills</div>
            <div onClick={()=>setSelectedSection('experience')} className={selectsection ==='experience'?'active':''}>Experience</div>
            <div onClick={()=>setSelectedSection('OtherSkills')} className={selectsection ==='OtherSkills'?'active':''}>Other skills</div>
          </nav>
            {selectsection ==='skills'?(<div className="skills">
                  <ul>
                    <h3>Frontend Development -</h3>
                    {Frontend.map((item)=>(
                              <li key={item.name}>{item.icon}</li>
                    ))}
                  </ul>
                  <ul>
                    <h3>Database Management -   </h3>
                    {Databases.map((item,index)=>(
                              <li key={index}>{item.name}</li>
                    ))}
                  </ul>
                  <ul>
                  <h3>Backend Development -  </h3>
                    {Backend.map((item)=>(
                              <li key={item.name}>{item.icon}</li>
                    ))}
                  </ul>
                  
                  <ul>
                    <h3>CMS -   </h3>
                    {CMS.map((item,index)=>(
                              <li key={index}>{item.name}</li>
                    ))}
                  </ul>
            </div>):null}
            
            {selectsection ==='experience'?
            <div className='experience'>
              <h2>Not found</h2>
            </div>
              :null
              }
            {selectsection ==='OtherSkills'?
            <div className="OtherSkills">
            {skills.map((item,index)=>(
              <li key={index}>{item.name}</li>
            ))}
            </div>
              :null
              }
            
      </div>
    </div>
      </div>
      </div>
    </section>
  )
}

export default Skills