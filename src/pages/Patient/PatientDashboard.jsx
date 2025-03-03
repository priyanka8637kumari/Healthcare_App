import React from 'react'
import styles from './PatientDashboard.module.css'
import headIcon from "@/assets/patient/headicon.png";
import translateIcon from "@/assets/patient/translate.png"
import arrowIcon from "@/assets/patient/arrow.png"

const PatientDashboard = () => {
  return (
    <div className={styles.patientdashboard}>
      <div className={styles.patientSidebar}>
        {/* Side header Info */}
        <section className={styles.patientSidebarHeaderInfo}>
          <div className={styles.patientImage}>
            <img src={headIcon} alt="patientavatar" />
          </div>
          <div className={styles.patientName}>
            <h1>Asher Wang</h1>
            <p>29 years old Stockholm</p>
          </div>
          <div className={styles.translateIcon}>
            <img src={translateIcon} alt="translatebtn" />
          </div>
          <div className={styles.dragIcon}>
            <img src={arrowIcon} alt="arrow" />
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
        <div className={styles.patientEmergencyCall}>
          <p>Emergency Call</p>
          <img src="" alt="" />
        </div>
        <div className={styles.patientHealthRecords}>
          <div className={styles.patientHeartBeat}>
            <h2>78</h2>
            <span>bpm</span>
            <img src="" alt="" />
            <h2>Heart Beat</h2>
          </div>
          <div className={styles.patientBloodPressure}>
            <h2>100 / 70</h2>
            <span>mmHg</span>
            <img src="" alt="" />
            <h2>BloodPressure</h2>
          </div>
          <div className={styles.patientHemolobin}>
            <h2>15.5</h2>
            <span>g/dL</span>
            <img src="" alt="" />
            <h2>Hemolobin</h2>
          </div>
          <div className={styles.patientSugarLevel}>
            <h2>150</h2>
            <span>bpm</span>
            <img src="" alt="" />
            <h2>Sugar Levels</h2>
          </div>
        </div>

        <div className={styles.patientDiagnose}>
          <div className={styles.patientDiagnoseTitle}>
            <h3>Diagnose</h3>
            <p>Date</p>
            <img src="" alt="" />
          </div>
          <div className={styles.patientDiagnoseContent}>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
