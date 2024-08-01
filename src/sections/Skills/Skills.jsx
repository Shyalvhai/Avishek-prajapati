import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="Php"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="Tailwindcss"/>
        <SkillList src={checkMarkIcon} skill="Node"/>
        <SkillList src={checkMarkIcon} skill="Express"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Webpack"/>
        <SkillList src={checkMarkIcon} skill="Git"/>
        <SkillList src={checkMarkIcon} skill="MongoDB"/>
        <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        </div>
        <hr/>
    </section>
  )
}

export default Skills
