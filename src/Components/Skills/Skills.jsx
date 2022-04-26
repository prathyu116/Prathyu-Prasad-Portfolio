import React from 'react'
import Header from '../Header/Header'
import { skillList } from '../../assets/skillsData'
import FooterLink from '../FooterLink/FooterLink'
import SkillCard from './SkillCard'
import skillVector from '../../assets/skills_vector.png'
import './Skills.css'

const Skills = () => {
    return (
        <div className='section-container'>
          
           <Header
           heading='My Skill' 
           details='Programming Languages: HTML, CSS, JavaScript   Node js; |
            Libraries & Frameworks: jQuery, Bootstrap, Node, React, Express; |
            Databse Known:MongoDB, Firebase |
            Tools & Platforms Command Line, Git/Github, '
            />
            <div className="skill-card-container">
                { 
                   skillList.map(skills=>{
                       return (
                           <div>
                              <SkillCard skillName={skills.skillName} skillUrl={skills.skillUrl}  />
                           </div>
                                
                       ) 
                   })
                   
                }

            </div>
            <FooterLink 
            content='get in '
            link='touch'
            toaddress='/contact'
            
            />
            <div className="skill-vector-frame">
                <img src={skillVector} alt="skillVector" className='skillVector' />

            </div>
        </div>
    )
}

export default Skills
