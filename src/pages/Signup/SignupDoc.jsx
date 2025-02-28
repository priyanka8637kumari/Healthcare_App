import React from "react";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import logo from "/src/assets/landingPage/logo.png"; 
import doctorImage from "/src/assets/loginDoc/doc2.png";  // Use the same image or a different one
import styles from "./SignupDoc.module.css"; // Import CSS Module

const SignupDoc = () => {
  return (
    <div className={styles.container}>
      {/* Left Side - Image (optional) */}
      <div className={styles.leftSide}>
        <img src={doctorImage} alt="Doctor" className={styles.image} />
      </div>

      {/* Right Side - Create Account Form */}
      <div className={styles.rightSide}>
        {/* Back & Home Buttons */}
        <button className={styles.backButton}><FaArrowLeft /></button>
        <button className={styles.homeButton}><FaHome /></button>

        {/* Create Account Box */}
        <div className={styles.loginBox}>
          <img src={logo} alt="Care Sync Logo" className={styles.logo} />          
          <h1 className={styles.brandName}>MediHub</h1>
          <p className={styles.welcomeText}>Create Account</p>
          <p className={styles.subText}>We are here to help you!</p>

          {/* Input Fields */}
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Your Name" className={styles.inputField} />
            <input type="email" placeholder="Your Email" className={styles.inputField} />
            <input type="password" placeholder="Password" className={styles.inputField} />
          </div>

          {/* Create Account Button */}
          <button className={styles.signInButton}>Create Account</button>

          {/* Divider */}
          <div className={styles.divider}>
            <hr />
            <span>or</span>
            <hr />
          </div>

          {/* Hyperlink to Sign In */}
          <div className={styles.links}>
            <p>
              Do you have an account? <a href="/login" className={styles.signupLink}>Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupDoc;
