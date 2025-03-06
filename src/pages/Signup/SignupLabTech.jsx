import React from "react";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import logo from "/src/assets/landingPage/logo.png"; 
import labTechImage from "/src/assets/minji/labTech4.png"; 
import styles from "./Signup.module.css"; 

const SignupLabTech = () => {
  const navigate = useNavigate(); 
  const handleCreateAccount = () => {
    navigate("/edit-profile/labtech"); 
  };

  return (
    <div className={styles.container}>      
      <div className={styles.leftSide}>
        <img src={labTechImage} alt="Lab Technician" className={styles.image} />
      </div>
      
      <div className={styles.rightSide}>       
        <FaArrowLeft className={styles.backIcon} onClick={() => navigate(-1)} />
        <FaHome className={styles.homeIcon} onClick={() => navigate("/")} />       

        <div className={styles.loginBox}>
          <img src={logo} alt="Care Sync Logo" className={styles.logo} />          
          <h1 className={styles.brandName}>
            Medi<span className={styles.highlight}>Hub</span>
          </h1>
          <p className={styles.welcomeText}>Create Account</p>
          <p className={styles.subText}>We are here to help you!</p>         

          <div className={styles.inputGroup}>
            <input type="text" placeholder="Your Name" className={styles.inputField} />
            <input type="email" placeholder="Your Email" className={styles.inputField} />
            <input type="password" placeholder="Password" className={styles.inputField} />
          </div>
          
          <button className={styles.signInButton} onClick={handleCreateAccount}>
            Create Account
          </button>          
          <div className={styles.divider}>
            <hr />
            <span>or</span>
            <hr />
          </div>         

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

export default SignupLabTech;
