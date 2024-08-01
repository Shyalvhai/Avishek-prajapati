import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitlift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} 
        link=""
        h3="Viberr"
        p="Streaming App"
        />
        <ProjectCard src={freshBurger} 
        link=""
        h3="Fresh Burger"
        p="Hamburger Restro"
        />
        <ProjectCard src={hipsster} 
        link=""
        h3="Hipsster"
        p="Glass Shop"
        />
        <ProjectCard src={fitlift} 
        link=""
        h3="Fitlift"
        p="Fitness App"
        />
      </div>
      <br/><br/><br/>
      
    </section>
  )
}

export default Projects
