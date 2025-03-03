import React from 'react'
import styles from './ViewAppointments.module.css';
import HeaderDoctor from '../../components/Doctor/HeaderDoctor/HeaderDoctor';
import SideNavDoc from '../../components/Doctor/SideNavDoctor/SideNavDoc';
import arrowIcon from "../../assets/minji/arrowicon.png"
import blueArrow from "../../assets/minji/blue arrow.png"

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
          {/* <select className={styles.dateSelect}>
            <option>Feb 10 - Feb13</option>
          </select> */}
          <div className={styles.dateSelect}>
            <span>Feb 10 - Feb13</span>
            <img src={blueArrow} alt="arrow" />
          </div>
          <button className={styles.iconButton}> {/* Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-ul" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
          <button className={styles.iconButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
              <path d="m9.757 1.546 4.243.613-1.01.663-3.4-1.002.603-4.238zM2.04 4.243 1.427 8.485l.663 1.01 4.238-.603-1.002-3.4zm9.718 9.718-4.243-.613 1.01-.663 3.4 1.002-.603 4.238zM4.243 2.04 8.485 1.427l1.01.663-.603 4.238-3.4-1.002z"/>
              <path d="M6 4.375a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5z"/>
            </svg>
          </button>
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
