import React from "react";
import styles from "./LandingFooter.module.css";
import logo from "../../../assets/landingPage/logo.png";
import google from "../../../assets/landingPage/google.png";
import twitter from "../../../assets/landingPage/twitter.png";
import instagram from "../../../assets/landingPage/instagram.png";
import linkedin from "../../../assets/landingPage/linkedin.png";

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.left}>
        <div className={styles.navbarBrand}>
        <img src={logo} alt="MediHub Logo" className={styles.logo} />
        <span className={styles.brandName}>MediHub</span>
      </div>
          <p className={styles.description}>
            Nam posuere accumsan porta. Integer id tincidunt sit amet sed libero.
          </p>
          <select className={styles.languageSelect}>
            <option>English - En</option>
            <option>Español - Es</option>
            <option>Français - Fr</option>
          </select>
          <p className={styles.copyright}>© Skyrev Theme 2021</p>
        </div>
  
        <div className={styles.center}>
          <h3 className={styles.title}>FEATURES</h3>
          <ul className={styles.list}>
            <li>Cras convallis</li>
            <li>Vestibulum faucibus</li>
            <li>Quisque lacinia purus</li>
            <li>Aliquam nec ex</li>
          </ul>
        </div>
  
        <div className={styles.right}>
          <h3 className={styles.title}>RESOURCES</h3>
          <ul className={styles.list}>
            <li>Suspindisse porttitor</li>
            <li>Nam posuere</li>
            <li>Curabitur egestas</li>
          </ul>
        </div>
          <div className={styles.socialIcons}>
            <img src={google} alt="google Icon" className={styles.icon}/>
            <img src={twitter} alt="twitter Icon" className={styles.icon}/>
            <img src={instagram} alt="instagram Icon" className={styles.icon}/>
            <img src={linkedin} alt="linkedin Icon" className={styles.icon}/>

            {/* <FaGoogle className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaLinkedin className={styles.icon} /> */}
          
        </div>
      </footer>
    );
  };
  
  export default Footer;