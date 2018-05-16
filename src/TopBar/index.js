import React from "react";
import styles from "./styles.css";

// const TopBar = ({ children }) => (
//   <div className={styles.topbar}>
//     <div className={styles.name}>
//       <i className="fas fa-plane" />
//       FlightScanner
//     </div>
//   </div>
// );

const TopBar = ({ children }) => (
  <nav className={`navbar is-link ${styles.navbar}`}>
    { children }
    <div className={`navbar-brand ${styles.brand}`}>
      <div className={styles.name}>
        <i className="fas fa-plane" />
        FlightScanner
      </div>
    </div>
  </nav>
);

export default TopBar;
