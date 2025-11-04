import './AboutMe.css'

import github from '../../../src/assets/i_github.png'
import gmail from '../../../src/assets/i_gmail.png'
import LinkedIn from '../../../src/assets/i_linkedin.png'
import De_swa from '../../assets/DE_edit.jpg'


function AboutMe(){


    return(
    <div id='about' className='about'>
        <div className="about-title">About Me</div>
        <div className="about-section">
            <div className="about-left"><img src={De_swa} alt="profile_pic" /></div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm Swadeshwar, I completed my B.E. in ECE at Sathyabama University.<br/>I have interest in front-end development, especially working with React.</p>
                    <div className="about-media"><img src={github} alt="" /><a href="https://github.com/Swadeshwar-k"  target="_blank" rel="noopener noreferrer"> GitHub</a></div>
                    <div className="about-media"><img src={gmail} alt="" /><a  href ="mailto:www.swadeshwarko@gmail.com"  target="_blank" rel="noopener noreferrer">Gmail</a></div>
                    <div className="about-media"><img src={LinkedIn} alt="" /><a href="https://www.linkedin.com/in/swadeshwar-k-038558251/" target="_blank" rel="noopener noreferrer">  LinkedIn</a></div>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML&CSS</p><hr style={{width:"75%"}} /></div>
                    <div className='about-skill'><p>React JS</p><hr style={{width:"69%"}} /></div>
                    <div className='about-skill'><p>JavaScript</p><hr style={{width:"65%"}} /></div>
                    <div className='about-skill'><p>Python</p><hr style={{width:"60%"}} /></div>
                </div>
                
            </div>
        </div>
    
    </div>
)}
export default AboutMe



