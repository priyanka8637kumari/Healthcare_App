import React from "react";
import styles from "./SideNavDoc.module.css";

import patientsIcon from "../../../assets/minji/patientsicon.png"
import dashboardicon from "../../../assets/minji/dashboardicon.png"
import prescriptionIcon from "../../../assets/minji/prescriptionicon.png"
import medicalrecordsIcon from "../../../assets/minji/medicalrecordicon.png"
import appointmentIcon from "../../../assets/minji/appointmenticon.png"
import labreportsIcon from "../../../assets/minji/labreportsicon.png"
import messageIcon from "../../../assets/minji/messageicon.png"
import settingIcon from "../../../assets/minji/settingicon.png"
import logoutIcon from "../../../assets/minji/logouticon.png"
import messageNumIcon from "../../../assets/minji/messagesnumicon.png"
import logo from "../../../assets/landingPage/logo.png"

const SideNavDoc = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.navbarBrand}>
        <img src={logo} alt="Care Sync Logo" className={styles.logo} />
        <span className={styles.brandName}>MediHub</span>
      </div>
      <ul className={styles.list}>
        <li className={`${styles.listItem} ${styles.dashboardMenu}`}>
          <div className={styles.itemWrapper}>
            <img src={dashboardicon} alt="Dashboard Icon" className={styles.menuIcons} />
            <span>Dashboard</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={patientsIcon} alt="Patients Icon" className={styles.menuIcons} />
            <span>Patients</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={prescriptionIcon} alt="Prescription Icon" className={styles.menuIcons} />
            <span>Prescription</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={medicalrecordsIcon} alt="Medical Records Icon" className={styles.menuIcons} />
            <span>Medical Records</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={appointmentIcon} alt="Appointments Icon" className={styles.menuIcons} />
            <span>Appointments</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={labreportsIcon} alt="Lab Reports Icon" className={styles.menuIcons} />
            <span>Lab Reports</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={messageIcon} alt="Messages Icon" className={styles.menuIcons} />
            <span>Messages</span>
            <img src={messageNumIcon} alt="Messages Number Icon" className={styles.messageNumIcon} />
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={settingIcon} alt="Settings Icon" className={styles.menuIcons} />
            <span>Settings</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={logoutIcon} alt="Logout Icon" className={styles.menuIcons} />
            <span>LogOut</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideNavDoc;
