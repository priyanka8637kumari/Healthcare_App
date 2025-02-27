import React from "react";
import styles from "./LandingRole.module.css";

const roles = [
    {
      name: "Doctor",
      image: "src/assets/landingPage/doctor.png", 
    },
    {
      name: "Lab Technician",
      image: "src/assets/landingPage/labTech.png", 
    },
    {
      name: "Patient",
      image: "src/assets/landingPage/patient.png", 
    },
  ];

  const RoleSelection = () => {
    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>Welcome! Choose your role</h2>
        <div className={styles.roles}>
          {roles.map((role, index) => (
            <div key={index} className={styles.card}>
              <img src={role.image} alt={role.name} className={styles.image} />
              <p className={styles.roleName}>{role.name}</p>
              <button className={styles.loginButton}>LOGIN</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RoleSelection;