import react from "react";
import styles from "./DoctorMessage.module.css";
import HeaderDoctor from "../../components/Doctor/HeaderDoctor/HeaderDoctor";
import SideNavDoc from "../../components/Doctor/SideNavDoctor/SideNavDoc";

const chatData = [
  {
    name: "John Doe",
    role: "Patient",
    time: "09:30 AM",
    message: "I need to reschedule my appointment...",
    count: 3,
  },
  {
    name: "Dr. Emily Smith",
    role: "Doctor",
    time: "10:15 AM",
    message: "Please review the patient’s blood test...",
    count: 5,
  },
  {
    name: "Mary Johnson",
    role: "Lab Technician",
    time: "10:20 AM",
    message: "Thank you for the excellent care durin...",
    count: 2,
  },
  {
    name: "Dr. Michael Brown",
    role: "Doctor",
    time: "10:40 AM",
    message: "You're welcome, Dr. Brown. If you need an...",
  },
  {
    name: "Susan Lee",
    role: "Lab Technician",
    time: "01:20 PM",
    message: "I have a few questions about my treat...",
    count: 1,
  },
  {
    name: "Kevin White",
    role: "Patient",
    time: "02:10 PM",
    message: "The symptoms have worsened. Shoul...",
    count: 1,
  },
  {
    name: "Dr. Linda Green",
    role: "Doctor",
    time: "02:45 PM",
    message: "Please update the preventive care gui...",
    count: 2,
  },
  {
    name: "Jennifer Adams",
    role: "Lab Technician",
    time: "03:30 PM",
    message: "Can you send me the details of my last ap...",
  },
  {
    name: "Dr. Samuel Thompson",
    role: "Doctor",
    time: "Yesterday",
    message: "Thank you. Can you please provide me th...",
  },
  {
    name: "Mateus Fernandes",
    role: "Patient",
    time: "29/06/28",
    message: "Great, thanks for the information. I'll be pr...",
  },
];

const DoctorMessage = () => {
  return (
    <div className={styles.dashboardContainer}>
      <HeaderDoctor />
      <div className={styles.contentWrapper}>
        <SideNavDoc />
        <div className={styles.mainContent}>
          <div className={styles.header}>
            <input
              type="text"
              placeholder="Search name, chat, etc"
            className={styles.topSearchBar}
            />
          </div>
          <div className={styles.messageContent}>
            {/* <div className={styles.sidebar}>
          <input
              type="text"
              placeholder="Search name, chat, etc"
              className={styles.searchBar}
            />
            <div className={styles.chatList}>
              {[
                {
                  name: "John Doe",
                  role: "Patient",
                  time: "09:30 AM",
                  unread: 3,
                },
                {
                  name: "Dr. Emily Smith",
                  role: "Doctor",
                  time: "10:15 AM",
                  unread: 2,
                },
                {
                  name: "Mary Johnson",
                  role: "Lab Technician",
                  time: "10:20 AM",
                  unread: 2,
                },
                {
                  name: "Dr. Michael Brown",
                  role: "Doctor",
                  time: "10:40 AM",
                  unread: 0,
                },
                {
                  name: "Susan Lee",
                  role: "Lab Technician",
                  time: "01:20 PM",
                  unread: 1,
                },
                {
                  name: "Kevin White",
                  role: "Patient",
                  time: "02:10 PM",
                  unread: 2,
                },
              ].map((chat, index) => (
                <div key={index} className={styles.chatItem}>
                  <div>
                    <strong>{chat.name}</strong>{" "}
                    <span className={styles.role}>{chat.role}</span>
                  </div>
                  <div className={styles.chatInfo}>
                    <span className={styles.time}>{chat.time}</span>
                    {chat.unread > 0 && (
                      <span className={styles.unread}>{chat.unread}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
            <div className={styles.chatContainer}>
              <div className={styles.searchBar}>
                <input type="text" placeholder="Search name, chat, etc" />
                {/* <FaFilter className={styles.filterIcon} /> */}
              </div>
              <div className={styles.chatList}>
                {chatData.map((chat, index) => (
                  <div key={index} className={styles.chatItem}>
                    <div className={styles.avatar}></div>
                    <div className={styles.chatContent}>
                      <div className={styles.chatHeader}>
                        <span className={styles.chatName}>{chat.name}</span>
                        <span
                          className={`${styles.role} ${
                            styles[chat.role.replace(/ /g, "").toLowerCase()]
                          }`}
                        >
                          {chat.role}
                        </span>
                        <span className={styles.chatTime}>{chat.time}</span>
                      </div>
                      <div className={styles.chatMessage}>{chat.message}</div>
                    </div>
                    {chat.count && (
                      <div className={styles.unreadCount}>{chat.count}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className={styles.chatWindow}>
              <div className={styles.chatHeaderRight}>Dr. Michael Brown</div>
              <div className={styles.chatMessages}>
                <div className={styles.messageBox}>
                  <div className={styles.message}>
                    Sure, Dr. Brown. Let me check the schedule for you.
                  </div>
                  <div className={styles.response}>
                    The Geriatric Care session is scheduled for 2:00 PM to 4:00
                    PM tomorrow.
                  </div>
                  <div className={styles.message}>
                    Thank you. Can you provide me the list of patients and their
                    conditions?
                  </div>
                  <div className={styles.response}>
                    Of course. The patients are:
                    <ul>
                      <li>James Wilson - Arthritis Management</li>
                      <li>Mary Johnson - Diabetes Monitoring</li>
                      <li>Susan Lee - Hypertension Check-Up</li>
                      <li>Robert Brown - Heart Disease Follow-Up</li>
                      <li>Emily Thompson - Medication Review</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.chatInput}>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className={styles.inputField}
                />
                <button className={styles.sendButton}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorMessage;
