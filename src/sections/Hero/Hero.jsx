import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterlight from '../../assets/twitter-light.svg'
import twitterdark from '../../assets/twitter-dark.svg'
import githubdark from '../../assets/github-dark.svg'
import githublight from '../../assets/github-light.svg'
import linkedinlight from '../../assets/linkedin-light.svg'
import linkedindark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'


const Hero = () => {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon; 
  const twitterIcon = theme === 'light' ? twitterlight : twitterdark;
  const githubIcon = theme === 'light' ? githublight : githubdark;
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;



  return (
    <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img className={styles.hero} src={heroImg} alt="My profile Picture"/>
      <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
    </div>
    <div className={styles.info}>
      <h1>
        Avishek <br/>
        Prajapati
      </h1>
      <h2>MERN Developer</h2>
      <span>
        <a href="https://twitter.com/" target="_blank">
          <img src={twitterIcon} alt="Twitter Icon"/>
        </a>
        <a href="https:/github.com/" target="_blank">
          <img src={githubIcon} alt="Github Icon"/>
        </a>
        <a href="https://Linkedin.com/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin Icon"/>
        </a>
      </span>
      <p className={styles.description}>Passionate about Coding and Building Innovative Solutions | Aspiring Software Engineer</p>
      <a href={CV} download>
        <button className="hover">Resume</button>
      </a>
    </div>
    </section>
  )
}

export default Hero
