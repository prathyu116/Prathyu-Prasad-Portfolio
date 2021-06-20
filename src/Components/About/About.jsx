import React from 'react'
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink'
import VectorFrame from './../../assets/about_vector.png'
import AboutAnime from './../../assets/about_anime.gif'
import resume from './../../assets/Resume (1).pdf'
import ProgressBar from '../ProgressBar/ProgressBar'

import './About.css'
const About = () => {
    return (
        <div className='section-container'>
            <Header heading="about me"
            details='I am a web devaloper who fall in love with programming .I enjoy learning about new technology and have a passion for Web Devalopment.I am currently working towards my Computer Science Bachelors Degree.(2021 passout)
            '
            
            />
             <div className="home-btn">
               
                <a href={resume} className="btn btn-white">
                <p className="btn-txt">Download My Resume</p>

                </a>
              

            </div>
           
          
            <div className="about-main">
               
                <ProgressBar />
                   
                   
                   
               
                <div className="about-main-left">
                   <img src={AboutAnime} alt="" srcset="" />
                </div>
            </div>
             <FooterLink  link='projects!'
            content='go to '
            toaddress='/projects'
            />
           
            <div className='vector-frame'>
                <img src={VectorFrame}
                className="about-vector"
                 alt="VectorFrame" />
                   
            </div>
           
        </div>
        
    )
}

export default About
