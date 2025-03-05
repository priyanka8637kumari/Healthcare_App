import React from "react";
import styles from "./SideNavLab.module.css"
import dashboardicon from "../../../assets/minji/dashboardicon.png"
import messageIcon from "../../../assets/minji/messageicon.png"
import settingIcon from "../../../assets/minji/settingicon.png"
import logoutIcon from "../../../assets/minji/logouticon.png"
import messageNumIcon from "../../../assets/minji/messagesnumicon.png"
import testresultIcon from "../../../assets/minji/testresult.png"
import securityIcon from "../../../assets/minji/securityalert.png"
import bookIcon from "../../../assets/minji/book.png"
import logo from "../../../assets/minji/medihublogo.png"
import { Link } from "react-router-dom";
import LogoutModal from "../../LogoutModal/LogoutModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SideNavLab = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  const openLogoutModal = () => setIsLogoutModalOpen(true);
  const closeLogoutModal = () => setIsLogoutModalOpen(false);

  const handleLogout = () => {
    closeLogoutModal();
    navigate('/');
  };

  return (
    <div className={styles.sidebar}>
     <div className={styles.navbarBrand}>
                  <img src={logo} alt="Care Sync Logo" className={styles.logo} />
                  {/* <span className={styles.brandName}>MediHub</span> */}
                </div>
      <ul className={styles.list}>
        <li className={`${styles.listItem} ${styles.dashboardMenu}`}>
          <div className={styles.itemWrapper}>
            <img src={dashboardicon} alt="Dashboard Icon"className={styles.menuIcons} />
            <span>Dashboard</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <Link to="/placeholderpage" className={styles.itemWrapper}>
            <img src={testresultIcon} alt="TestResult Icon" className={styles.menuIcons}/>
            <span>Blodkompatibilitet</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/placeholderpage" className={styles.itemWrapper}>
            <img src={bookIcon} alt="Prescription Icon" className={styles.menuIcons}/>
            <span>Analytics och rapporter</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/placeholderpage" className={styles.itemWrapper}>
            <img src={securityIcon} alt="Medical Records Icon"className={styles.menuIcons} />
            <span>Säkerhetsprotokoll</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/placeholderpage" className={styles.itemWrapper}>
            <img src={messageIcon} alt="Messages Icon"className={styles.menuIcons} />
            <span>Meddelanden</span>
            <img src={messageNumIcon} alt="Messages Number Icon"  />
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/placeholderpage" className={styles.itemWrapper}>
          <img 
            src={settingIcon} 
            alt="Settings Icon" 
            style={{ width: '25px', height: '25px' }}className={styles.menuIcons}
          />
            <span>Inställningar</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}onClick={openLogoutModal}>
            <img src={logoutIcon} alt="Logout Icon"className={styles.menuIcons}  />
            <span>Utloggning</span>
          </div>
        </li>
      </ul>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={closeLogoutModal}
        onLogout={handleLogout}
      />
    </div>
    
  );
};

export default SideNavLab;