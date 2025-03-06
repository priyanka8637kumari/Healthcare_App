import React from 'react'
import SideNavLab from "../../components/LabTech/SideNavLab/SideNavLab"
import HeaderLab from '../../components/LabTech/HeaderLab/HeaderLab'
import SearchBar from '../../components/SearchBar'
import styles from './LabTechDashboard.module.css'  
import statscardIcon from "../../assets/minji/statscardicon.png"
import vector from "../../assets/minji/Vector.png"

const StatCard = ({ title, value, change, className }) => {
  return (
    <div className={className || styles.statCard}>
       <div className={styles.titleContainer}>
        <img src={statscardIcon} alt="Stats Icon" className={styles.statIcon} />
        <h3 className={styles.statTitle}>{title}</h3>
      </div>
      <p className={styles.statValue}>{value}</p>
      <div className={styles.changeWrapper}>
        <p className={`${styles.statChange} ${change.startsWith("+") ? styles.positive : styles.negative}`}>{change}</p>
      </div>
    </div>
  );
};

const LabTechDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <HeaderLab />
      <div className={styles.contentWrapper}>
        <SideNavLab />
        <div className={styles.mainContent}>
          <SearchBar />
          <div className={styles.statsGrid}>
          <StatCard 
            className={`${styles.statCard} ${styles.firstStatsBox}`} 
            title="Total Lab Test" 
            value="1052 / day" 
            change="+15.2%" 
            backgroundImage={vector}/>
            <StatCard title="Total Out Patient" value="5715" change="+10.4%" />
            <StatCard title="Total In Patient" value="523" change="+4%" />
          </div>

          
          <div className={styles.labTestStatus}>
            <div className={styles.labTestHeader}>
              <h2 className={styles.sectionTitle}>Lab Test Result</h2>
              <select className={styles.weekDropdown}>
                <option>Week 1</option>
                <option>Week 2</option>
                <option>Week 3</option>
                <option>Week 4</option>
              </select>
            </div>
            <div className={styles.weekGrid}>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                <div key={index} className={styles.dayColumn}>
                  <p className={styles.dayLabel}>{day}</p>
                  <div className={styles.barContainer}>
                    <div className={styles.completedBar}></div>
                    <div className={styles.uncompletedBar}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.chartLegend}>
              <div className={styles.legendItem}>
                <div className={styles.legendColor} style={{backgroundColor: '#2B7F75'}}></div>
                <span>Completed</span>
              </div>
              <div className={styles.legendItem}>
                <div className={styles.legendColor} style={{backgroundColor: '#FFD66B'}}></div>
                <span>Pending</span>
              </div>
            </div>
          </div>

          <div className={styles.patientList}>
            <h2 className={styles.sectionTitle}>Patient's List</h2>
            <div className={styles.patientCard}>
              <p className={styles.patientName}><strong>Alex Smith</strong> - Male, 36 Years</p>
              <p className={styles.testOrderDate}>Test Order Date: August 8, 2023</p>
              <p className={styles.priority}>Priority: <span className={styles.priorityMedium}>Medium</span></p>
              <p className={styles.testType}>Test Type: Ultrasound</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTechDashboard
