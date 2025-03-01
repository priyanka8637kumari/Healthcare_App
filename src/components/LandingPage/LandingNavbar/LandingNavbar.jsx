import {useState, useEffect} from "react";
import styles from "./LandingNavbar.module.css";
import logo from "../../../assets/landingPage/logo.png";
import phoneIcon from "../../../assets/landingPage/phone.png";

const LandingNavbar = () => {
  const [activeSection, setActiveSection] = useState("");

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
          setActiveSection((prev) => (prev !== entry.target.id ? entry.target.id : prev));
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
      <div className={styles.navbarBrand}>
        <img src={logo} alt="MediHub Logo" className={styles.logo} />
        <span className={styles.brandName}>MediHub</span>
      </div>
      <ul className={styles.navbarMenu}>
      <li className={styles.navbarItem}>
          <a href="/" className={activeSection === "home" ? styles.active : ""}>Home</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#about" className={activeSection === "about" ? styles.active : ""}>About Us</a>
        </li>
        <li className={`${styles.navbarItem} ${activeSection === "features" ? styles.active : ""}`}>
          <a href="#features">Our Features</a>
        </li>
      </ul>
      <button className={styles.supportButton}>
        <img src={phoneIcon} alt="Phone Icon" className={styles.phoneIcon} />
        Support
      </button>
    </nav>
  );
};
export default LandingNavbar;
