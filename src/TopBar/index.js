import React from "react";
import styles from "./styles.css";

const TopBar = ({ children }) => (
  <div className={styles.topbar}>
    { children }
    <div className={styles.name}>
      <i className="fas fa-plane" />
      FlightScanner
    </div>
  </div>
);

export default TopBar;