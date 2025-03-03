import { useState, useEffect } from "react";
import styles from "./LandingNavbar.module.css";
import logo from "../../../assets/landingPage/logo.png";
import phoneIcon from "../../../assets/landingPage/phone.png";

const LandingNavbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // ....Implemnting function to toggle the menu...

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // ....Implementing Intersection Observer to track the active section...

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          console.log("Intersecting:", entry.target.id);
          setActiveSection((prev) =>
            prev !== entry.target.id ? entry.target.id : prev
          );
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>
          <img src={logo} alt="MediHub Logo" className={styles.logo} />
          <span className={styles.brandName}>MediHub</span>
        </div>

        <div className={styles.burgerMenu} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <ul className={`${styles.navbarMenu} ${menuOpen ? styles.active : ""}`}>
          <li className={styles.navbarItem}>
            <a
              href="/"
              className={activeSection === "home" ? styles.active : ""}
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li className={styles.navbarItem}>
            <a
              href="#about"
              className={activeSection === "about" ? styles.active : ""}
              onClick={toggleMenu}
            >
              About Us
            </a>
          </li>
          <li
            className={`${styles.navbarItem} ${
              activeSection === "features" ? styles.active : ""
            }`}
          >
            <a
              href="#features"
              className={activeSection === "features" ? styles.active : ""}
              onClick={toggleMenu}
            >
              Our Features
            </a>
          </li>
        </ul>
        <button className={styles.supportButton}>
          <img src={phoneIcon} alt="Phone Icon" className={styles.phoneIcon} />
          Support
        </button>
      </div>
    </nav>
  );
};
export default LandingNavbar;
