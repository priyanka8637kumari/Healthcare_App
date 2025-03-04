import React from 'react'
import styles from './PatientDashboard.module.css'
import arrowIcon from "../../assets/patient/arrow.png";
import headIcon from "../../assets/patient/headicon.png"
import translateIcon from "../../assets/patient/translate.png"
import phoneIcon from "../../assets/patient/phone.png"
import locationIcon from "../../assets/patient/location.png"
import walletIcon from "../../assets/patient/wallet.png"
import quickHelp from "../../assets/patient/Quick help.png"
import hospital from "../../assets/patient/Hospital.png"
import ambulance from "../../assets/patient/Ambulance.png"
import doctor from "../../assets/patient/Doctors.png"
import ambulanceCar from "../../assets/patient/ambulance-car.png"
import heartBeat from "../../assets/patient/heartbeat.png"
import Hemoglobin from "../../assets/patient/Hemoglobin.png"
import bloodPressure from "../../assets/patient/Blood Pressure.png"
import sugarLevel from "../../assets/patient/Sugar Levels.png"
import examOne from "../../assets/patient/exam1.png"
import examTwo from "../../assets/patient/exam2.png"
import examThree from "../../assets/patient/exam3.png"
import examFour from "../../assets/patient/exam4.png"
import examFive from "../../assets/patient/exam5.png"
import examSix from "../../assets/patient/exam6.png"

const PatientDashboard = () => {
  return (
    <div className={styles.patientdashboard}>
      <div className={styles.patientSidebar}>
        {/* Side header Info */}
        <section className={styles.patientSidebarHeaderInfo}>
          <div className={styles.patientImage}>
            <img src={headIcon} alt="user avatar" /> 
          </div>
          <div className={styles.patientName}>
            <h1>Asher Wang</h1>
            <p>29 years old Stockholm</p>
          </div>
          <div className={styles.translateIcon}>
            <img src={translateIcon} alt="translate button" />
          </div>
          <div className={styles.dragIcon}>
            <img src={arrowIcon} alt="arrow button" />
          </div>
        </section>
        {/* Patient Info Card */}
        <section className={styles.patientInfoCard}>
          <div className={styles.infoCardIcons}>
            <div className={styles.infoimg}>
              <img src={phoneIcon} alt="contact icon" />
              <img src={locationIcon} alt="location icon" />
              <img src={walletIcon} alt="wallet icon" />
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
          <img src={quickHelp} alt="quick help" id="quickHelp" />
          <img src={hospital} alt="hospital" />
          <img src={ambulance} alt="ambulance" />
          <img src={doctor} alt="doctor" />
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
        <div className={styles.emergencyCall}>
          <p>Emergency Call</p>
          <img src={ambulanceCar} alt="ambulance car" />
        </div>
        <div className={styles.patientHealth}>
          <img src={heartBeat} alt="heart beat" />
          <img src={bloodPressure} alt="blood pressure" />
          <img src={Hemoglobin} alt="Hemoglobin" />
          <img src={sugarLevel} alt="Sugar level" />
        </div>
        <div className={styles.diagnose}>
          <div className={styles.diagnoseTitle}>
            <h5>diagnose</h5>
            <p>Date</p>
          </div>
          <div className={styles.exams}>
            <img src={examOne} alt="" />
            <img src={examTwo} alt="" />
            <img src={examThree} alt="" />
            <img src={examFour} alt="" />
            <img src={examFive} alt="" />
            <img src={examSix} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
