import React from "react";
import Path from "./Path";

import styles from "./Flight.css";

const Flight = ({ flight }) => {
  const {
    price, outboundPath, inboundPath,
  } = flight;
  return (
    <div className={styles.flight}>
      <div className={styles.paths}>
        <Path path={outboundPath} />
        <Path path={inboundPath} />
      </div>
      <div className={styles.price}>${price}</div>
    </div>
  );
};

export default Flight;