import React from 'react';
import styles from './MedicalRecordsDoc.module.css';
import HeaderDoctor from '../../components/Doctor/HeaderDoctor/HeaderDoctor';
import SideNavDoc from '../../components/Doctor/SideNavDoctor/SideNavDoc';
import patient1Image from "../../assets/minji/patient1.png";
import patient2Image from "../../assets/minji/patient2.png";
import patient3Image from "../../assets/minji/patient3.png";
import patient4Image from "../../assets/minji/patient4.png";
import patient5Image from "../../assets/minji/patient5.png";
import patient6Image from "../../assets/minji/patient6.png";
import patient7Image from "../../assets/minji/patient7.png";
import patient8Image from "../../assets/minji/patient8.png";
import bloodCount from "../../assets/minji/bloodcount.png";
import bloodPressure from "../../assets/minji/bloodpressure.png";
import heartRate from "../../assets/minji/heartrate.png";
import bloodSugar from "../../assets/minji/bloodsugar.png";
import urineAnalysis from "../../assets/minji/urineanalysis.png";
import greenTriangle from "../../assets/minji/greentriangle.png";
import redTriangle from "../../assets/minji/redtriangle.png";
import emailIcon from "../../assets/minji/emailicon.png";
import messageIcon1 from "../../assets/minji/messageIcon1.png";
import phoneIcon from "../../assets/minji/phoneicon.png";
import videoIcon from "../../assets/minji/videoIcon.png";
import createNewRecordIcon from "../../assets/minji/createnewrecord.png";
import sharerecordsIcon from "../../assets/minji/sharerecord.png"
import stetoskopIcon from "../../assets/minji/stetoskopicon.png"
import ellipsisIcon from "../../assets/minji/ellipsis-vertical.png";
import cloudIcon from "../../assets/minji/cloud.png"

const MedicalRecordsDoc = () => {
  return (
    <div className={styles.dashboardContainer}>
      <HeaderDoctor />
      <div className={styles.contentWrapper}>
        <SideNavDoc />
        <div className={styles.mainContent}>
          <div className={styles.mainContainer}>
            {/* Search Bar */}
            <div className={styles.searchBar}>
      
           <input 
            type="text" 
             placeholder="Search patients, records, appointments..." 
             className={styles.searchBar} 
            />
              <button className={styles.createButton}>
              <img src={createNewRecordIcon} className={styles.searchbarIcon} alt="Patient" />
              Create new record</button>
              <button className={styles.shareButton}>
              <img src={sharerecordsIcon} className={styles.searchbarIcon}alt="Patient" />
              Share Record</button>
            </div>

            {/* Main Content Grid */}
            <div className={styles.contentGrid}>
              {/* Patients List */}
              <div className={styles.patientList}>
                <h3>Patients List</h3>
                <ul className={styles.appointmentList}>
                  <li className={styles.appointmentItem}>
                    <div className={styles.patientInfo}>
                      <img src={patient1Image} className={styles.patientImage} alt="Patient" />
                      <div className={styles.patientDetails}>
                        <span className={styles.patientName}>Minji Kim</span>
                        <span className={styles.visitReason}>Annual Check-up</span>
                      </div>
                      <img src={ellipsisIcon} alt="ellipsis" />
                    </div>
                   
                  </li>
                  <li className={styles.appointmentItem}>
                    <div className={styles.patientInfo}>
                      <img src={patient4Image} className={styles.patientImage} alt="Patient" />
                      <div className={styles.patientDetails}>
                        <span className={styles.patientName}>Swarna Lekha</span>
                        <span className={styles.visitReason}>Follow-up</span>
                      </div>
                      <img src={ellipsisIcon} alt="ellipsis" />
                    </div>
                   
                  </li>
                  <li className={styles.appointmentItem}>
                    <div className={styles.patientInfo}>
                      <img src={patient2Image} className={styles.patientImage} alt="Patient" />
                      <div className={styles.patientDetails}>
                        <span className={styles.patientName}>Nakashima Mika</span>
                        <span className={styles.visitReason}>Consultation</span>
                      </div>
                      <img src={ellipsisIcon} alt="ellipsis" />
                    </div>
                   
                  </li>
                  <li className={styles.appointmentItem}>
                    <div className={styles.patientInfo}>
                      <img src={patient3Image} className={styles.patientImage} alt="Patient" />
                      <div className={styles.patientDetails}>
                        <span className={styles.patientName}>Jamie Fox</span>
                        <span className={styles.visitReason}>Test Results</span>
                      </div>
                      <img src={ellipsisIcon} alt="ellipsis" />
                    </div>
              
                  </li>
                  <li className={styles.appointmentItem}>
                    <div className={styles.patientInfo}>
                      <img src={patient5Image} className={styles.patientImage} alt="Patient" />
                      <div className={styles.patientDetails}>
                        <span className={styles.patientName}>Emily Johnson</span>
                        <span className={styles.visitReason}>Prenatal Check-up</span>
                      </div>
                      <img src={ellipsisIcon} alt="ellipsis" />
                    </div>
              
                  </li>
                  <li className={styles.appointmentItem}>
                    <div className={styles.patientInfo}>
                      <img src={patient6Image} className={styles.patientImage} alt="Patient" />
                      <div className={styles.patientDetails}>
                        <span className={styles.patientName}>Agata Johansson</span>
                        <span className={styles.visitReason}>Allergy Consultation</span>
                      </div>
                      <img src={ellipsisIcon} alt="ellipsis" />
                    </div>
           
                  </li>
                  <li className={styles.appointmentItem}>
                    <div className={styles.patientInfo}>
                      <img src={patient7Image} className={styles.patientImage} alt="Patient" />
                      <div className={styles.patientDetails}>
                        <span className={styles.patientName}>Sophia Rodriguez</span>
                        <span className={styles.visitReason}>Follow-up</span>
                      </div>
                      <img src={ellipsisIcon} alt="ellipsis" />
                    </div>
                  
                  </li>
                  <li className={styles.appointmentItem}>
                    <div className={styles.patientInfo}>
                      <img src={patient8Image} className={styles.patientImage} alt="Patient" />
                      <div className={styles.patientDetails}>
                        <span className={styles.patientName}>Uros Mimic</span>
                        <span className={styles.visitReason}>Follow-up</span>
                      </div>
                      <img src={ellipsisIcon} alt="ellipsis" />
                    </div>
                  
                  </li>
                </ul>
              </div>

              {/* Right Section */}
              <div className={styles.rightSection}>
               

                {/* Profile Section */}
                <div className={styles.profileSection}>
                   <div className={styles.topProfileSection}>
                   <div className={styles.patientInfo}>
                      <img src={patient1Image} className={styles.patientImage} alt="Minji Kim" />
                      <div className={styles.patientDetails}>
                        <span className={styles.patientName}>Minji Kim</span>
                        <span className={styles.visitReason}>Chronic Rhinitis</span>
                      </div>
                    </div>
                    <div className={styles.profileIconWrapper}>
                      <img src={emailIcon} alt="Email" />
                      <img src={messageIcon1} alt="Message" />
                      <img src={phoneIcon} alt="Phone" />
                      <img src={videoIcon} alt="Video" />
                    </div>
                  </div>

                  <div className={styles.bottomProfileSection}>
                    <div>
                      <h5>Address</h5>
                      <h4>Stationsgatan 28 Uppsala- 75340</h4>
                    </div>
                    <div>
                      <h5>Patient ID</h5>
                      <h4>REW987</h4>
                    </div>
                    <div>
                      <h5>Date of Birth</h5>
                      <h4>09.10.2001</h4>
                    </div>
                    <div>
                      <h5>Gender</h5>
                      <h4>Female</h4>
                    </div>
                    <div>
                      <h5>Blood Type</h5>
                      <h4>O+</h4>
                    </div>
                    <div>
                      <h5>Weight</h5>
                      <h4>58 kg</h4>
                    </div>
                    <div>
                      <h5>Height</h5>
                      <h4>172 cm</h4>
                    </div>
                    <div>
                      <h5>SSN Number</h5>
                      <h4>751009-4421</h4>
                    </div>
                  </div>
                </div>
                 {/* Diagnosis History */}
                 <div className={styles.diagnosisHistory}>
                  <h3>Diagnosis History</h3>
                  <div className={styles.metrics}>
                    <div className={styles.metric}>
                      <img src={bloodCount} className={styles.metricIcons} />
                      <h4>Blood Count</h4>
                      <p>13/25</p>
                      <div className={styles.metricSignWrapper}>
                        <img src={greenTriangle} className={styles.triangleIcon} />
                        <span>Higher than average</span>
                      </div>
                    </div>
                    <div className={styles.metric}>
                      <img src={bloodPressure} className={styles.metricIcons} />
                      <h4>Blood Pressure</h4>
                      <p>120 - 139 mmHg</p>
                      <div className={styles.metricSignWrapper}>
                        <img src={redTriangle} className={styles.triangleredIcon} />
                        <span>Higher than normal</span>
                      </div>
                    </div>
                    <div className={styles.metric}>
                      <img src={heartRate} className={styles.metricIcons} />
                      <h4>Heart Rate</h4>
                      <p>120 bpm</p>
                      <div className={styles.metricSignWrapper}>
                        <img src={redTriangle} className={styles.triangleredIcon} />
                        <span>Higher than normal</span>
                      </div>
                    </div>
                    <div className={styles.metric}>
                      <img src={bloodSugar} className={styles.metricIcons} />
                      <h4>Blood Sugar</h4>
                      <p>70-99 mg</p>
                      <div className={styles.metricSignWrapper}>
                        <img src={greenTriangle} className={styles.triangleIcon} />
                        <span>Higher than average</span>
                      </div>
                    </div>
                    <div className={styles.metric}>
                      <img src={urineAnalysis} className={styles.metricIcons} />
                      <h4>Urine Analysis</h4>
                      <p>1.030</p>
                      <div className={styles.metricSignWrapper}>
                        <img src={redTriangle} className={styles.triangleredIcon} />
                        <span>Higher than normal</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Illness Diagnosis & Documents */}
                <div className={styles.detailSection}>
                  {/* Illness Diagnosis */}
                  <div className={styles.diagnosisWrapper}>
                    <h3>Illness Diagnosis</h3>
                    <ul>
                      <li><span>Name:</span> Chronic Rhinitis</li>
                      <li><span>Date:</span> 09.02.2025</li>
                      <li><span>Treatment:</span> Intranasal corticosteroids, Antihistamines, Saline nasal sprays</li>
                    </ul>
                    <hr className={styles.sectionSeparator} />
                    <h3>Diagnosis & Tests</h3>
                    <ul>
                      <li><img src={stetoskopIcon} alt="Stethoscope" />StethoscopePhysical Examination → Checks for nasal inflammation and congestion</li>
                      <li><img src={stetoskopIcon} alt="Stethoscope" />StethoscopeAllergy Tests → Skin prick or blood tests to rule out allergic causes</li>
                      <li><img src={stetoskopIcon} alt="Stethoscope" />StethoscopeCT Scan → Evaluates sinuses and nasal passages for structural issues</li>
                    </ul>
                  </div>

                  {/* Documents Section */}
                  <div className={styles.document}>
                    <div className={styles.documentHeader}>
                      <h3>Documents</h3>
                      <button className={styles.addButton}>➕Add Files</button>
                    </div>
                
                    <ul>
                      <li>Prescription
                        <div className={styles.documentIconWrapper}>
                        <img src={cloudIcon} alt="cloud" />
                        <img src={ellipsisIcon} alt="ellipsis" />
                      </div>
                      </li>
                      <li>Lab Test Reports
                       <div className={styles.documentIconWrapper}>
                          <img src={cloudIcon} alt="cloud" />
                          <img src={ellipsisIcon} alt="ellipsis" />
                        </div>
                      </li>
                      <li>Past Medical History
                        <div className={styles.documentIconWrapper}>
                          <img src={cloudIcon} alt="cloud" />
                          <img src={ellipsisIcon} alt="ellipsis" />
                        </div>
                      </li>
                      <li>Vaccination Records
                        <div className={styles.documentIconWrapper}>
                          <img src={cloudIcon} alt="cloud" />
                          <img src={ellipsisIcon} alt="ellipsis" />
                        </div>
                      </li>
                      <li>Allergy List
                        <div className={styles.documentIconWrapper}>
                          <img src={cloudIcon} alt="cloud" />
                          <img src={ellipsisIcon} alt="ellipsis" />
                        </div>
                      </li>
                      <li>Surgical Records
                        <div className={styles.documentIconWrapper}>
                          <img src={cloudIcon} alt="cloud" />
                          <img src={ellipsisIcon} alt="ellipsis" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalRecordsDoc;