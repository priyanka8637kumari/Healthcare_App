import React from 'react'
import styles from './PatientDashboard.module.css'

const PatientDashboard = () => {
  return (
    <div className={styles.patientdashboard}>
      <div className={styles.patientSidebar}>
        {/* Side header Info */}
        <section className={styles.patientSidebarHeaderInfo}>
          <div className={styles.patientImage}>
            <img src="" alt="" />
          </div>
          <div className={styles.patientName}>
            <h1>Asher Wang</h1>
            <p>29 years old Stockholm</p>
          </div>
          <div className={styles.translateIcon}>
            <img src="" alt="" />
          </div>
          <div className={styles.dragIcon}>
            <img src="" alt="" />
          </div>
        </section>
        {/* Patient Info Card */}
        <section className={styles.patientInfoCard}>
          <div className={styles.infoCardIcons}>
            <div className={styles.phoneCover}>
              <img src="" alt="" />
            </div>
            <div className={styles.patientStatus}>
              <div className={styles.patientBlood}>
                <p>BLOOD</p>
                <h2>A+</h2>
              </div>
              <div className={styles.verticalLine}>
              </div>
              <div className={styles.patinetHeight}>
                <p>HEIGHT</p>
                <h2>176</h2>
              </div>
              <div className={styles.verticalLine}>
              </div>
              <div className={styles.patinetWeight}>
                <p>WEIGHT</p>
                <h2>70</h2>
              </div>
              <div className={styles.verticalLine}>
              </div>
              <div className={styles.patinetPressure}>
                <p>PRESSURE</p>
                <h2>120/80</h2>
              </div>
            </div>
          </div>
        </section>

        {/* help button */}
        <section className={styles.helpCenter}>
          <div className={styles.quickHelp}>
            <img src="" alt="" />
            <p>Quick Help</p>
          </div>
          <div className={styles.patientHospital}>
            <img src="" alt="" />
            <p>Hospital</p>
          </div>
          <div className={styles.patientAmbulance}>
            <img src="" alt="" />
            <p>Ambulance</p>
          </div>
          <div className={styles.Doctor}>
            <img src="" alt="" />
            <p>Doctor</p>
          </div>
        </section>

        {/* appointment-section */}
        <section className={styles.patientAppointments}>
          <h2>You have a appointment</h2>
          <div className={styles.patientDateContainder}>
            <div className={styles.appointmentDate}>
              <p>March, 2025</p>
              <img src="" alt="" />
            </div>
            <div className={styles.appointmentTime}>
              <p>07: 30AM</p>
              <img src="" alt="" />
            </div>
          </div> 
          <div className={styles.patientSaveDate}>
            <p>Save in Google Calendar</p>
          </div>
        </section>

        {/* appointment btn */}
        <button className={styles.newAppointmentBtn}>
          Make a new appointment
        </button> 
      </div>


      <div className={styles.patinetMainPage}>
        <div></div>
      </div>
    </div>
  )
}

export default PatientDashboard
