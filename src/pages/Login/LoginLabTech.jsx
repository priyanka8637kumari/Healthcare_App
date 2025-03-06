import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import logo from "/src/assets/landingPage/logo.png"; 
import labTechImage from "/src/assets/loginDoc/labTech5.jpeg";
import styles from "./Login.module.css"; 
import { useState } from "react";


const LoginLabTech = () => {
  const navigate = useNavigate();
  const magicTime =300;
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsFadingOut(true);
    setTimeout(() => {
      console.log("Navigating to labtech-dashboard");
      navigate("/labtech-dashboard");
    }, magicTime);  
  }; 
  

  return (
    <div className={`${styles.container} ${isFadingOut ? styles.fadeOut : ""}`}>      
      <div className={styles.leftSide}>
        <img src={labTechImage} alt="Doctor" className={styles.image} />
      </div>    

      <div className={styles.rightSide}>        
        <FaArrowLeft className={styles.backIcon} onClick={() => navigate(-1)} />
        <FaHome className={styles.homeIcon} onClick={() => navigate("/")} />        
        <div className={styles.loginBox}>          
          <img src={logo} alt="Care Sync Logo" className={styles.logo} />
          <h1 className={styles.brandName}>
            Medi<span className={styles.highlight}>Hub</span>
          </h1>
          <p className={styles.welcomeText}>Hi, Welcome Back!</p>
          <p className={styles.subText}>Hope you&apos;re doing fine.</p>
          <br />           
          <div className={styles.inputGroup}>
            <form onSubmit={handleSignIn}>            
              <input type="text" placeholder="Enter your ID" className={styles.inputField} /><br />            
              <input type="password" placeholder="Enter your password" className={styles.inputField} />
              
              <button type="submit" className={styles.signInButton}>Sign In</button>
              <br />         
            </form> 
          </div>           
          <div className={styles.divider}>
            <hr />
            <span>or</span>
            <hr />
          </div>  
               
          <div className={styles.links}>
            <a href="/forgot-password" className={styles.forgotLink}>Forgot Password?</a>                  
            <p>
              Don&apos;t have an account? <a href="/signup/labtech" className={styles.signupLink}>Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLabTech;
