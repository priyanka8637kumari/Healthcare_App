import React from 'react'
import SideNavLab from "../../components/LabTech/SideNavLab/SideNavLab"
import HeaderLab from '../../components/LabTech/HeaderLab/HeaderLab'
import SearchBar from '../../components/SearchBar'
import styles from './LabTechDashboard.module.css'  

const LabTechDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <HeaderLab />
      <div className={styles.contentWrapper}>
        <SideNavLab />
        <div className={styles.mainContent}>
          {/* Search Bar */}
          <SearchBar />
          <h1>hi</h1>
        </div>
      </div>
    </div>
  )
}

export default LabTechDashboard
