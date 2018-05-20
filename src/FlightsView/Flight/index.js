import React from 'react'
import Path from './Path'

import styles from './Flight.css'

const Flight = ({ flight }) => {
  const {
    price, outboundPath, inboundPath, id,
  } = flight
  return (
    <div className={styles.flight}>
      <div className={styles.paths}>
        <Path path={outboundPath} id={id} />
        <Path path={inboundPath} id={id} />
      </div>
      <div className={styles.price}>${price}</div>
    </div>
  )
}

export default Flight