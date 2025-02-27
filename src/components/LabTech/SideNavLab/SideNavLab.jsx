import React from "react";
import styles from "../../Doctor/SideNavDoctor/SideNavDoc.module.css"
import dashboardicon from "../../../assets/minji/dashboardicon.png"
import messageIcon from "../../../assets/minji/messageicon.png"
import settingIcon from "../../../assets/minji/settingicon.png"
import logoutIcon from "../../../assets/minji/logouticon.png"
import messageNumIcon from "../../../assets/minji/messagesnumicon.png"
import testresultIcon from "../../../assets/minji/testresult.png"
import securityIcon from "../../../assets/minji/securityalert.png"
import bookIcon from "../../../assets/minji/book.png"
import logo from "../../../assets/landingPage/logo.png"


const SideNavLab = () => {
  return (
    <div className={styles.sidebar}>
     <div className={styles.navbarBrand}>
                  <img src={logo} alt="Care Sync Logo" className={styles.logo} />
                  <span className={styles.brandName}>MediHub</span>
                </div>
      <ul className={styles.list}>
        <li className={`${styles.listItem} ${styles.dashboardMenu}`}>
          <div className={styles.itemWrapper}>
            <img src={dashboardicon} alt="Dashboard Icon" />
            <span>Dashboard</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={testresultIcon} alt="TestResult Icon" />
            <span>Blodkompatibilitet</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={bookIcon} alt="Prescription Icon" />
            <span>Rapporter & Journaler</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={securityIcon} alt="Medical Records Icon" />
            <span>Säkerhetsprotokoll</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={messageIcon} alt="Messages Icon" />
            <span>Messages</span>
            <img src={messageNumIcon} alt="Messages Number Icon"  />
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
          <img 
            src={settingIcon} 
            alt="Settings Icon" 
            style={{ width: '25px', height: '25px' }}
          />

            <span>Inställningar</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={logoutIcon} alt="Logout Icon" />
            <span>LogOut</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideNavLab;