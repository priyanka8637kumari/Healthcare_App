import React from 'react';
import styles from './MedicalRecordsDoc.module.css'; 
import HeaderDoctor from '../../components/Doctor/HeaderDoctor/HeaderDoctor';
import SideNavDoc from '../../components/Doctor/SideNavDoctor/SideNavDoc'; 

const MedicalRecordsDoc = () => {
  return (
    <div className={styles.dashboardContainer}>
      <HeaderDoctor />
      <div className={styles.contentWrapper}>
        <SideNavDoc />
        <div className={styles.mainContent}>
          {/*main contentsss */}
        </div>
      </div>
    </div>
  )
}

export default MedicalRecordsDoc;