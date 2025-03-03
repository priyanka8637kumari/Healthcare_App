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
          Transforming Healthcare with <br /> Smart Digital Solutions.
        </p>
        <div className={styles.socialIcons}>
          <img src={google} alt="google Icon" className={styles.icon} />
          <img src={twitter} alt="twitter Icon" className={styles.icon} />
          <img src={instagram} alt="instagram Icon" className={styles.icon} />
          <img src={linkedin} alt="linkedin Icon" className={styles.icon} />
        </div>
        <p className={styles.copyright}>© 2025 Medihub. All rights reserved</p>
      </div>

      <div className={styles.center}>
        <h3 className={styles.title}>QUICK LINKS</h3>
        <ul className={styles.list}>
          <li>Home</li>
          <li>About us</li>
          <li>Features</li>
          <li>How it works</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className={styles.right}>
        <h3 className={styles.title}>PRODUCT LINKS</h3>
        <ul className={styles.list}>
          <li>For Patients</li>
          <li>For Doctors</li>
          <li>For Lab technicians</li>
          <li>Appointment Booking</li>
          <li>Electronic Health Records</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
