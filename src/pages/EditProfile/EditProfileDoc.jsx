import React from "react";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import logo from "/src/assets/landingPage/logo.png"; 
import styles from "./EditProfileDoc.module.css"; // Using the same CSS
import doctorImage3 from "/src/assets/loginDoc/doc3.png"; // Replace with actual image

const EditProfileDoc = () => {
    return (
        <div className={styles.container}>
              {/* Left Side - Image (optional) */}
              <div className={styles.leftSide}>
                <img src={doctorImage3} alt="Doctor" className={styles.image} />
              </div>

            <div className={styles.rightSide}>
                {/* Back & Home Buttons */}
                <button className={styles.backButton}><FaArrowLeft /></button>
                <button className={styles.homeButton}><FaHome /></button>

                
                <div className={styles.editBox}>
                    <div className={styles.logoContainer}>
                      <img src={logo} alt="Care Sync Logo" className={styles.logo} />          
                      <h1 className={styles.brandName}>MediHub</h1>
                    </div>
                    <h2 className={styles.heading}>
                    <FaArrowLeft className={styles.backIcon} /> Fill Your Profile
                    </h2>
                    <div className={styles.inputGroup}>
                      <input type="text" placeholder="Full Name" className={styles.inputField} /><br />
                      <input type="text" placeholder="Nickname" className={styles.inputField} /><br />
                      <input type="date" placeholder="Date of Birth" className={styles.inputField} /><br />
                      <input type="gender" placeholder="Gender" className={styles.inputField} /><br />
                    </div>

                    {/* Save Changes Button */}
                    <button className={styles.saveButton}>Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default EditProfileDoc;
