import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styles from './LogoutModal.module.css';
import logoutIcon from "../../assets/minji/logoutModal.png"
import { useLocation } from 'react-router-dom';
import labTechLogoutIcon from "../../assets/minji/labtechmodalicon.png"

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  const magicTime =500;
  const [isFading, setIsFading] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    setIsFading(true);
    setTimeout(() => {
      onLogout();
    }, magicTime); 
  };
  const isLabTech = location.pathname.includes('/labtech-dashboard');
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`${styles.modal} ${isFading ? styles.fadeOut : ""}`}
      overlayClassName={`${styles.backdrop} ${isFading ? styles.fadeOut : ""}`}
    >
     
        <img src={isLabTech? labTechLogoutIcon : logoutIcon}alt="Logout Icon" />
        <div className={styles.modalWrapper}>
        <h2>Confirm Log Out</h2>
        <p>Are you sure you want to log out?</p>
        <div className={styles.modalButtons}>
          <button onClick={onClose} className={styles.cancelButton}>Cancel</button>
          <button 
            onClick={handleLogout} 
            className={`${styles.logoutButton} ${isLabTech ? styles.labTechLogoutButton : ''}`}>
            Yes, Logout
          </button>
        </div>
      </div>
     
    </ReactModal>
  );
};

export default LogoutModal;
