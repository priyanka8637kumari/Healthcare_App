import React from "react";
import styles from "./LandingNavbar.module.css";
import logo from "../../../assets/landingPage/logo.png"; 
import phoneIcon from "../../../assets/landingPage/phone.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <div className={styles.navbarBrand}>
      <img src={logo} alt="Care Sync Logo" className={styles.logo} />
      <span className={styles.brandName}>MediHub</span>
    </div>
    <ul className={styles.navbarMenu}>
      <li className={styles.navbarItem}><a href="/">Home</a></li>
      <li className={styles.navbarItem}><a href="/about">About Us</a></li>
      <li className={styles.navbarItem}><a href="/services">Our Services</a></li>
    </ul>
    <button className={styles.supportButton}>
      <img src={phoneIcon} alt="Phone Icon" className={styles.phoneIcon} />
      Support
    </button>
  </nav>
  );
};
export default Navbar;
