import React from 'react'
import styles from './ViewAppointments.module.css';
import HeaderDoctor from '../../components/Doctor/HeaderDoctor/HeaderDoctor';
import SideNavDoc from '../../components/Doctor/SideNavDoctor/SideNavDoc';
import blueArrow from "../../assets/minji/blue arrow.png"
import view1 from "../../assets/landingPage/changeView1.png"
import view2 from "../../assets/landingPage/changeView2.png"


const ViewAppointments = () => {
  return (
    <div className={styles.dashboardContainer}>
    <HeaderDoctor />
    <div className={styles.contentWrapper}>
      <SideNavDoc />
      <div className={styles.mainContent}>
     
      <div className={styles.header}>
        <div className={styles.title}>View Appointment</div>
        
        <div className={styles.actions}>
          
          <div className={styles.dateSelect}>
            <span>Feb 10 - Feb13</span>
            <img src={blueArrow} alt="arrow" />
          </div>
          <div className={styles.viewButtons}>
          <button className={styles.iconButton1}> {/* Icon */}
            <img src={view1} alt="view 1" />
          </button>
          <button className={styles.iconButton2}>
            <img src={view2} alt="view 2" />
          </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className={styles.table}>
        {/* Time Column */}
        <div className={styles.timeColumn}>
        <div className={styles.timeSlot}>Time</div>
          <div className={styles.timeSlot}>08 AM</div>
          <div className={styles.timeSlot}>09 AM</div>
          <div className={styles.timeSlot}>10 AM</div>
          <div className={styles.timeSlot}>11 AM</div>
          <div className={styles.timeSlot}>12 PM</div>
          <div className={styles.timeSlot}>01 PM</div>
          <div className={styles.timeSlot}>02 PM</div>
          <div className={styles.timeSlot}>03 PM</div>
          <div className={styles.timeSlot}>04 PM</div>
        </div>

        {/* Day Columns */}
        <div className={`${styles.dayColumn} ${styles.dayColumn1}`}>
          <div className={styles.dayHeader}>Feb 10 2025</div>
          <div className={`${styles.appointment} ${styles.greenAppointment}`}>
            <div className={styles.appointmentTitle}>Labor Ward Duty</div>
            <div className={styles.appointmentTime}>08AM - 10AM</div>
            <ul>
              <li>Monitor Active Labor Cases</li>
              <li>Assist in Normal & C-Section Deliveries</li>
              <li>Manage Emergency Cases</li>
            </ul>
          </div>
          <div className={`${styles.appointment} ${styles.greenAppointment} ${styles.at12}`}>
            <div className={styles.appointmentTitle}>Mrs. Ebba Joseph</div>
            <div className={styles.appointmentTime}>12PM - 01PM</div>
            <ul>
              <li>Uterine Fibroid Surgery</li>
              <li>Hysterectomy (removal of uterus)</li>
            </ul>
          </div>
          <div className={`${styles.appointment} ${styles.greenAppointment} ${styles.at03}`}>
            <div className={styles.appointmentTitle}>In - Patient rounds</div>
            <div className={styles.appointmentTime}>03PM - 04PM</div>
            <ul>
              <li>New Admissions to Assess</li>
              <li>Post-Surgical Patients to Monitor</li>
            </ul>
          </div>
        </div>
        <div className={styles.dayColumn}>
          <div className={styles.dayHeader}>Feb 11 2025</div>
          <div className={`${styles.appointment} ${styles.redAppointment} ${styles.at09}`}>
            <div className={styles.appointmentTitle}>Documentation</div>
            <div className={styles.appointmentTime}>09AM - 11AM</div>
            <ul>
              <li>Verify Patient Information</li>
              <li>Post-Surgical Reports</li>
              <li>Discharge Summaries</li>
              <li>Ensure Reports Are Signed & Approved</li>
              <li>Update Recent Lab Report</li>
            </ul>
          </div>
          <div className={`${styles.appointment} ${styles.redAppointment} ${styles.at03}`}>
            <div className={styles.appointmentTitle}>Out - Patient consulting</div>
            <div className={styles.appointmentTime}>03PM - 04PM</div>
            <ul>
              <li>New Patient Consultation</li>
              <li>Follow-up Visit</li>
              <li>Post-Surgical Review</li>
              <li>Second Opinion Consultation</li>
            </ul>
          </div>
        </div>
        <div className={styles.dayColumn}>
          <div className={styles.dayHeader}>Feb 12 2025</div>
          <div className={`${styles.appointment} ${styles.yellowAppointment} ${styles.at08}`}>
            <div className={styles.appointmentTitle}>Mrs.Maja Alvin</div>
            <div className={styles.appointmentTime}>08AM - 09AM</div>
            <ul>
              <li>Fallopian Tube Surgery</li>
              <li>Removal of one fallopian tubes</li>
            </ul>
          </div>
          <div className={`${styles.appointment} ${styles.yellowAppointment} ${styles.at10}`}>
            <div className={styles.appointmentTitle}>Ms.Elsa</div>
            <div className={styles.appointmentTime}>10AM - 12PM</div>
            <ul>
              <li>Cervical Cerclage Surgery</li>
              <li>Stitching the cervix to prevent miscarriage</li>
            </ul>
          </div>
          <div className={`${styles.appointment} ${styles.yellowAppointment} ${styles.at02}`}>
            <div className={styles.appointmentTitle}>In - Patient rounds</div>
            <div className={styles.appointmentTime}>02PM - 04PM</div>
            <ul>
              <li>New Admissions to Assess</li>
              <li>Post-Surgical Patients to Monitor</li>
              <li>High-Risk Cases (e.g., ICU, post-op complications, infections)</li>
            </ul>
          </div>
        </div>
        <div className={styles.dayColumn}>
          <div className={styles.dayHeader}>Feb 13 2025</div>
          <div className={`${styles.appointment} ${styles.blueAppointment} ${styles.at11}`}>
            <div className={styles.appointmentTitle}>Medical conference</div>
            <div className={styles.appointmentTime}>10AM - 01PM</div>
            <ul>
              <li>Location: (Grand Medical Convention Center, Stockholm)</li>
              <li>Panel Discussions &quot;Managing High-Risk Pregnancies&quot;</li>
              <li>Update Medical Knowledge & Notes</li>
              <li>Follow up on New Contacts & Collaborations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  
  )
}

export default ViewAppointments;
