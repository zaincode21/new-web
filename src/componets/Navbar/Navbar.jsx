import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <img 
                className={styles.menuBtn} 
                src={
                    menuOpen 
                    ? getImageUrl("nav/closeIcon.png") 
                    : getImageUrl("nav/menuIcon.png")
                } 
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
            
                <ul className={styles.menuItems}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
