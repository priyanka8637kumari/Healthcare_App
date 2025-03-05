import React, { useState } from "react";
import { FaHome, FaArrowLeft, FaCheck, FaSpinner } from "react-icons/fa";
import logo from "/src/assets/landingPage/logo.png"; 
import styles from "./EditProfile.module.css"; 
import labTechImage from "/src/assets/loginDoc/labTech2.jpeg";
import { useNavigate } from "react-router-dom";

const EditProfileLabTechnician = () => {
  const [formData, setFormData] = useState({
      fullName: "",
      Nickname: "",
      email: "",
      dateOfBirth: "",
      gender: "Male",
  });

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setShowPopup(true); 
      
      setTimeout(() => {
        setShowPopup(false);
        navigate("/LabTech-dashboard"); 
    }, 3000);
};

return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src={labTechImage} alt="Doctor" className={styles.image} />
      </div>

      <div className={styles.rightSide}>            
        <FaArrowLeft className={styles.backIcon} onClick={() => navigate(-1)} />
        <FaHome className={styles.homeIcon} onClick={() => navigate("/")} />
               
        <div className={styles.editBox}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Care Sync Logo" className={styles.logo} />          
          <h1 className={styles.brandName}>
            Medi<span className={styles.highlight}>Hub</span>
          </h1>
          </div>
          <h2 className={styles.heading}>Fill Your Profile</h2>
          <div className={styles.inputGroup}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="fullName" 
                    placeholder="Full Name" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    className={styles.input} 
                /><br />

                <input 
                    type="text" 
                    name="nickname" 
                    placeholder="Nickname" 
                    value={formData.nickname}
                    onChange={handleChange}
                    className={styles.input}
                  /><br />

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email ID" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className={styles.input} 
                /><br />

                <input 
                    type="date" 
                    name="dateOfBirth" 
                    value={formData.dateOfBirth} 
                    onChange={handleChange} 
                    className={styles.input} 
                /><br />

                <select 
                    name="gender" 
                    value={formData.gender} 
                    onChange={handleChange} 
                    className={styles.input}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select><br />
                
                <button type="submit" className={styles.saveButton}>
                    Save Changes
                </button>
            </form>
          </div>  
        </div>

        {showPopup && (
           <div className={styles.popup}>
              <div className={styles.popupCircle}>
              <div className={styles.popupHexagon}>
                <FaCheck className={styles.popupCheckmark} />
              </div>
            </div>
            <h2 className={styles.popupText}>Congratulations!</h2><br />
            <p>Your account is ready to use.</p>
            <p>You will be redirected to the Home Page in a few seconds...</p>

            {/* Loading Spinner */}
            <FaSpinner className={styles.popupLoading} />
          </div>
        )}
      </div>
    </div>
    
  );
};

export default EditProfileLabTechnician;
