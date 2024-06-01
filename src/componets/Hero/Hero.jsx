import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Serge</h1>
            <p className={styles.description}>
                I'm a full-stack developer with 3 years of 
                Experience using,Django & python, React and Node.js. Reach out
                 if you'd like to learn more!
            </p>
            <a href="mailto:sergedukuziyaremye@gmail.com" className={styles.contactBtn}>
                Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero"
         className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottonBlur}/>
    </section>
  )
}

export default Hero
