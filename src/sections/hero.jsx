import React from "react";
import styles from "../styles/Hero.module.css";
import heroImage from "../assets/images/graduate-photo.png";


const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroDescription}>
          <small className={styles.heroSmallText}>Hello There!</small>
          <h1 className={styles.title}>
            I'm Kenny Nkosi<span>Web Developer</span>Based in SA
          </h1>
          <p className={styles.heroText}>
          Passionate web developer crafting intuitive, responsive, and user-friendly web experiences that bring ideas to life.
          </p>
          <div className={styles.btnContainer}>
            <a href="#projects" className={`${styles.btn} ${styles.btnColor2}`}>
              <i className="fa-solid fa-play" />
              View My Portfolio
            </a>
            <a href="/#contact" className={`${styles.btn} ${styles.btnColor1}`}>
              Hire Me
            </a>
          </div>
        </div>

        <div className={styles.heroImgContainer}>
          <div className={styles.heroImgBg} />
          <div className={styles.badgeContainer}>
            <div className={`${styles.heroBadge} ${styles.badgeTopLeft}`}>
              <i className="fa-solid fa-code"></i>
              <span>Web Development</span>
            </div>

            <div className={`${styles.heroBadge} ${styles.badgeTopRight}`}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>E-commerce</span>
            </div>

            <div className={`${styles.heroBadge} ${styles.badgeBottomLeft}`}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>SEO</span>
            </div>
          </div>
          <img
            src={heroImage}
            className={styles.heroImg}
            alt="Kenny Nkosi profile picture"
          />
        </div>
      </div>

      <div className={styles.skills}>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsGrid}>
            {[
              { icon: "fa-solid fa-laptop-code", name: "Web Development" },
              { icon: "fa-solid fa-mobile-screen-button", name: "Responsive Design" },
              { icon: "fa-brands fa-react", name: "React.js" },
              { icon: "fa-brands fa-js", name: "JavaScript" },
              { icon: "fa-brands fa-html5", name: "HTML5" },
              { icon: "fa-brands fa-css3-alt", name: "CSS3" },
              { icon: "fa-brands fa-node-js", name: "Node.js" },
              { icon: "fa-solid fa-database", name: "MongoDB" },
              { icon: "fa-brands fa-git-alt", name: "Git" },
              { icon: "fa-brands fa-github", name: "GitHub" },
              { icon: "fa-solid fa-cart-shopping", name: "E-commerce" },
              { icon: "fa-solid fa-magnifying-glass", name: "SEO" },
            ].map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <i className={skill.icon} />
                <span>{skill.name}</span>
              </div>
            ))}
            
            {/* Duplicate items for seamless loop */}
            {[
              { icon: "fa-solid fa-laptop-code", name: "Web Development" },
              { icon: "fa-solid fa-mobile-screen-button", name: "Responsive Design" },
              { icon: "fa-brands fa-react", name: "React.js" },
              { icon: "fa-brands fa-js", name: "JavaScript" },
              { icon: "fa-brands fa-html5", name: "HTML5" },
              { icon: "fa-brands fa-css3-alt", name: "CSS3" },
              { icon: "fa-brands fa-node-js", name: "Node.js" },
              { icon: "fa-solid fa-database", name: "MongoDB" },
              { icon: "fa-brands fa-git-alt", name: "Git" },
              { icon: "fa-brands fa-github", name: "GitHub" },
              { icon: "fa-solid fa-cart-shopping", name: "E-commerce" },
              { icon: "fa-solid fa-magnifying-glass", name: "SEO" },
            ].map((skill, index) => (
              <div key={`dup-${index}`} className={styles.skillItem} aria-hidden="true">
                <i className={skill.icon} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
