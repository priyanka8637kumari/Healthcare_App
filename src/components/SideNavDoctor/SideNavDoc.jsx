import React from "react";
import styles from "./SideNavDoc.module.css";

import patientsIcon from "../../assets/minji/patientsicon.png"
import dashboardicon from "../../assets/minji/dashboardicon.png"
import prescriptionIcon from "../../assets/minji/prescriptionicon.png"
import medicalrecordsIcon from "../../assets/minji/medicalrecordicon.png"
import appointmentIcon from "../../assets/minji/appointmenticon.png"
import labreportsIcon from "../../assets/minji/labreportsicon.png"
import messageIcon from "../../assets/minji/messageicon.png"
import settingIcon from "../../assets/minji/settingicon.png"
import logoutIcon from "../../assets/minji/logouticon.png"


const SideNavDoc = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>Medihub</h2>
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
            <img src={patientsIcon} alt="Patients Icon" />
            <span>Patients</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={prescriptionIcon} alt="Prescription Icon" />
            <span>Prescription</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={medicalrecordsIcon} alt="Medical Records Icon" />
            <span>Medical Records</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={appointmentIcon} alt="Appointments Icon" />
            <span>Appointments</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={labreportsIcon} alt="Lab Reports Icon" />
            <span>Lab Reports</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={messageIcon} alt="Messages Icon" />
            <span>Messages</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.itemWrapper}>
            <img src={settingIcon} alt="Settings Icon" />
            <span>Settings</span>
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

export default SideNavDoc;