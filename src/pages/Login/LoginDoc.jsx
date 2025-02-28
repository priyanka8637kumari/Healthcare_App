import React from "react";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import logo from "/src/assets/landingPage/logo.png"; 
import doctorImage from "/src/assets/loginDoc/doc2.png";
import styles from "./Login.module.css"; 

const LoginDoc = () => {
  return (
    <div className={styles.container}>      
      <div className={styles.leftSide}>
        <img src={doctorImage} alt="Doctor" className={styles.image} />
      </div>      
      <div className={styles.rightSide}>        
        <button className={styles.backButton}><FaArrowLeft /></button>
        <button className={styles.homeButton}><FaHome /></button>        
        <div className={styles.loginBox}>          
          <img src={logo} alt="Care Sync Logo" className={styles.logo} />
          <h1 className={styles.brandName}>MediHub</h1>
          <p className={styles.welcomeText}>Hi, Welcome Back Doctor!</p>
          <p className={styles.subText}>Hope you&apos;re doing fine.</p>
          <br />           
          <div className={styles.inputGroup}>            
            <input type="text" placeholder="Enter your ID" className={styles.inputField} /><br />            
            <input type="password" placeholder="Enter your password" className={styles.inputField} />
          </div>          
          <button className={styles.signInButton}>Sign In</button>
          <br />           
          <div className={styles.divider}>
            <hr />
            <span>or</span>
            <hr />
          </div>       
          <div className={styles.links}>
            <a href="/forgot-password" className={styles.forgotLink}>Forgot Password?</a>                  
            <p>
              Don&apos;t have an account? <a href="/signup" className={styles.signupLink}>Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDoc;
