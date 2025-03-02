import React from 'react';
import styles from './ViewAppointments.module.css';
import HeaderDoctor from '../../components/Doctor/HeaderDoctor/HeaderDoctor';
import SideNavDoc from '../../components/Doctor/SideNavDoctor/SideNavDoc';


const ViewAppointments = () => {

  const appointments = {
    "Feb 10 2025": [
      { time: "08AM-10AM", title: "Labor Ward Duty", details: ["Monitor Active Labor Cases", "Assist in Normal & C-Section Deliveries", "Manage Emergency Cases"] },
      { time: "12PM-01PM", title: "Mrs. Ebba Joseph", details: ["Uterine Fibroid Surgery", "Hysterectomy (removal of uterus)"] },
      { time: "03PM-04PM", title: "In - Patient rounds", details: ["New Admissions to Assess", "Post-Surgical Patients to Monitor"] }
    ],
    "Feb 11 2025": [
      { time: "09AM-11AM", title: "Documentation", details: ["Verify Patient Information", "Post-Surgical Reports", "Discharge Summaries", "Ensure Reports Are Signed & Approved", "Update Recent Lab Report"] },
      { time: "03PM-04PM", title: "Out - Patient consulting", details: ["New Patient Consultation", "Follow-up Visit", "Post-Surgical Review", "Second Opinion Consultation"] }
    ],
    "Feb 12 2025": [
      { time: "08AM-09AM", title: "Mrs.Maja Alvin", details: ["Fallopian Tube Surgery", "Removal of one fallopian tubes"] },
      { time: "10AM-12PM", title: "Ms.Elsa", details: ["Cervical Cerclage Surgery", "Stitching the cervix to prevent miscarriage"] },
      { time: "02PM-04PM", title: "In - Patient rounds", details: ["New Admissions to Assess", "Post-Surgical Patients to Monitor", "High-Risk Cases (e.g., ICU, post-op complications, infections)"] }
    ],
    "Feb 13 2025": [
      { time: "10AM-01PM", title: "Medical conference", details: ["Location: (Grand Medical Convention Center, Stockholm)", "Panel Discussions \"Managing High-Risk Pregnancies\"", "Update Medical Knowledge & Notes", "Follow up on New Contacts & Collaborations"] }
    ]
  };

  const days = Object.keys(appointments);

  const timeSlots = [
    "08 AM", "09 AM", "10 AM", "11 AM", "12 PM", "01 PM", "02 PM", "03 PM", "04 PM"
  ];
  return (
    <div className={styles.dashboardContainer}>
      <HeaderDoctor />
      <div className={styles.contentWrapper}>
        <SideNavDoc />
        <div className={styles.mainContent}>
        <div className={styles.header}>
        <h2>View Appointment</h2>
        <div className={styles.dateRange}>Feb 10 - Feb13</div>
        <div className={styles.icons}> {/*  Add Icons here */}</div>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.appointmentTable}>
          <thead>
            <tr>
              <th>Time</th>
              {days.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(time => (
              <tr key={time}>
                <td>{time}</td>
                {days.map(day => {
                  // Find appointments for this day that intersect with this time slot
                  const appointmentForTime = appointments[day].find(appt => {
                    const [startHour, endHour] = appt.time.split('-').map(t => parseInt(t));
                    const timeHour = parseInt(time);
                    return timeHour >= startHour && timeHour < endHour;
                  });

                  return (
                    <td key={`${day}-${time}`} className={styles.appointmentCell}>
                      {appointmentForTime && (
                        <div className={styles.appointment}>
                          <div className={styles.appointmentTitle}>{appointmentForTime.title}</div>
                          <ul>
                            {appointmentForTime.details.map((detail, index) => (
                              <li key={index}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAppointments
