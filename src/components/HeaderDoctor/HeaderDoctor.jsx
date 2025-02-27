import React from "react";
import styles from "./HeaderDoctor.module.css"
import doctorImg from "../../assets/minji/doctorlayne.png"
import arrowIcon from "../../assets/minji/arrowIcon.png"
import bellIcon from "../../assets/minji/bellIcon.png"

const HeaderDoctor = () => {
  return (
    <header className={styles.header}>
      <div className={styles.welcome}>
        <div className={styles.welcomeText}>
          <h3>Welcome Dr. Layne Kumetz</h3>
          <h5>Otolaryngologist</h5>
        </div>
        <div className={styles.welcomeImage}>
          <img src={doctorImg} alt="Doctor img" className={styles.doctorImg} />
        </div>
        <div className={styles.iconContainer}>
        <div className={`${styles.iconWrapper} ${styles.iconWrapperWithBorder}`}>
          <img src={arrowIcon} alt="Arrow icon" />
        </div>
        <div className={styles.iconWrapper}>
          <img src={bellIcon} alt="Bell icon" />
        </div>
      </div>
      </div>


      <div className={styles.rightSection}>
        <select className={styles.languageDropdown}>
        <option>English
          </option>
          <option>Swedish</option>
          <option>Korean</option>
          <option>Hindi</option>
          <option>Japanese</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Chinese</option>
          <option>Italian</option>
          <option>Portuguese</option>
          <option>Russian</option>
        </select>
        <button className={styles.emergencyBtn}>🚨 Emergency Alert</button>
      </div>
    </header>
  );
};

export default HeaderDoctor;