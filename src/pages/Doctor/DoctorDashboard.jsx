import React from 'react'
import SideNavDoc from "../../components/Doctor/SideNavDoctor/SideNavDoc"
import HeaderDoctor from "../../components/Doctor/HeaderDoctor/HeaderDoctor"
import styles from "./DoctorDashboard.module.css";
import stetoskop from "../../assets/minji/stetoskop.png"
import patientIcon from "../../assets/minji/patientIconBlue.png"
import taskIcon from "../../assets/minji/checklist.png"
import patient1Image from "../../assets/minji/patient1.png"
import patient2Image from "../../assets/minji/patient2.png"
import patient3Image from "../../assets/minji/patient3.png"
import patient4Image from "../../assets/minji/patient4.png"
import upIcon1 from "../../assets/minji/upstatic.png"
import upIcon2 from "../../assets/minji/upstatic2.png"
import upIcon3 from "../../assets/minji/upIcon3.png"
import blueArrow from "../../assets/minji/blue arrow.png"
import SearchBar from '../../components/SearchBar';

const DoctorDashboard = () => {
  return (
    
    <div className={styles.dashboardContainer}>
      <HeaderDoctor />
      <div className={styles.contentWrapper}>
        <SideNavDoc />
        <div className={styles.mainContent}>
          {/* Search Bar */}
          <SearchBar />

          {/* Welcome Section */}
          <div className={styles.welcomeSection}>
            <div className={styles.welcomeContent}>
              <h1>Good Morning! Dr. Layne Kumetz</h1>
              <p>Here are your important tasks and reports.</p>
              <div className={styles.statsContainer}>
                <div className={styles.statBox}>
                  <p>New Patients</p>
                  <h3>40</h3>
                  <img src={upIcon1}  className={styles.upIcon} />
                </div>
                <div className={styles.statBox}>
                  
                  <p>Surgery</p>
                  <h3>04</h3>
                  <img src={upIcon2}  className={styles.upIcon} />
                </div>
                <div className={styles.statBox}>
                  <p>Old Patients</p>
                  <h3>64</h3>
                  <img src={upIcon3}  className={styles.upIcon} />
                </div>
              </div>
            </div>
            <img src={stetoskop} alt="Stetoskop" className={styles.stetoskop}/>
          </div>

          {/* Appointments & To-Do List */}
          <div className={styles.appointmentsAndTasks}>
            {/* Appointments */}
            <div className={styles.appointments}>
              <div className={styles.appointmentHeader}>
                <div className={styles.headerWrapper}>
                  <img src={patientIcon} className={styles.patientIcon} alt="Patient Icon" />
                  <h3>Patient Appointment List</h3>
                </div>
                <div className={styles.dateWrapper}>
                  <h3>Today</h3>
                  <img src={blueArrow} className={styles.taskIcon} alt="Blue Arrow" />
                </div>
              </div>
              <ul className={styles.appointmentList}>
                <li className={styles.appointmentItem}>
                  <div className={styles.patientInfo}>
                    <img src={patient1Image} className={styles.patientImage} alt="Minji Kim" />
                    <div className={styles.patientDetails}>
                      <span className={styles.patientName}>Minji Kim</span>
                      <span className={styles.visitReason}>Annual Check-up</span>
                    </div>
                  </div>
                  <span className={styles.appointmentTime}>9:50 AM</span>
                </li>
                <li className={styles.appointmentItem}>
                  <div className={styles.patientInfo}>
                    <img src={patient4Image} className={styles.patientImage} alt="Swarna Lekha" />
                    <div className={styles.patientDetails}>
                      <span className={styles.patientName}>Swarna Lekha</span>
                      <span className={styles.visitReason}>Follow-up</span>
                    </div>
                  </div>
                  <span className={styles.appointmentTime}>10:05 AM</span>
                </li>
                <li className={styles.appointmentItem}>
                  <div className={styles.patientInfo}>
                    <img src={patient2Image} className={styles.patientImage} alt="Nakashima Mika" />
                    <div className={styles.patientDetails}>
                      <span className={styles.patientName}>Nakashima Mika</span>
                      <span className={styles.visitReason}>Consultation</span>
                    </div>
                  </div>
                  <span className={styles.appointmentTime}>10:25 AM</span>
                </li>
                <li className={styles.appointmentItem}>
                  <div className={styles.patientInfo}>
                    <img src={patient3Image} className={styles.patientImage} alt="Jamie Fox" />
                    <div className={styles.patientDetails}>
                      <span className={styles.patientName}>Jamie Fox</span>
                      <span className={styles.visitReason}>Test Results</span>
                    </div>
                  </div>
                  <span className={styles.appointmentTime}>11:00 AM</span>
                </li>
              </ul>
            </div>



            {/* Tasks */}
              <div className={styles.tasks}>
                <div className={styles.taskHeader}>
                  <div className={styles.headerWrapper}>
                    <img src={taskIcon} alt="Task Icon" className={styles.taskIcon} />
                    <h3>Tasks (To Do List)</h3>
                  </div>
                  <div className={styles.dateWrapper}>
                    <h3>Today</h3>
                    <img src={blueArrow} className={styles.taskIcon} />
                  </div>
                </div>
                <ul className={styles.taskList}>
                  <li className={styles.taskItem}>
                    <span className={styles.taskName}>Review patient charts</span>
                    <span className={styles.taskStatus}>✔ Completed</span>
                  </li>
                  <li className={styles.taskItem}>
                    <span className={styles.taskName}>Conduct morning and afternoon rounds</span>
                    <span className={styles.taskStatus}>✔ Completed</span>
                  </li>
                  <li className={styles.taskItem}>
                    <span className={styles.taskName}>Analyze test results</span>
                    <span className={styles.taskStatus}>✔ Completed</span>
                  </li>
                  <li className={styles.taskItem}>
                    <span className={styles.taskName}>Follow up with patients</span>
                    <span className={styles.taskStatus}>Pending</span>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
