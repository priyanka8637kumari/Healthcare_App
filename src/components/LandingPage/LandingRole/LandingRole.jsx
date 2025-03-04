import React from "react";
import styles from "./LandingRole.module.css";
import { useNavigate } from "react-router-dom";

// ......roles data......
const roles = [
  {
    name: "Doctor",
    image: "src/assets/landingPage/doctor.png",
    loginPath: "/login/doctor",
  },
  {
    name: "Lab Technician",
    image: "src/assets/landingPage/labTech1.jpg",
    loginPath: "/login/labTech",
  },
  {
    name: "Patient",
    image: "src/assets/landingPage/patient.png",
    loginPath: "/login/patient",
  },
];

//
const RoleSelection = () => {
  //......navigation to the login pages....

  const navigate = useNavigate();

  const handleLogin = (path) => {
    navigate(path);
  };

  return (
    <section className={styles.container} id="landingRole">
      <div className={styles.overlay}>
        <h2 className={styles.heading}>Welcome! Choose your role</h2>
        <div className={styles.roles}>
          {roles.map((role, index) => (
            <div key={index} className={styles.card}>
              <img src={role.image} alt={role.name} className={styles.image} />
              <p className={styles.roleName}>{role.name}</p>
              <button
                className={styles.loginButton}
                onClick={() => handleLogin(role.loginPath)}
              >
                LOGIN
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleSelection;
