import React from 'react'

import styles from './Path.css'

const formatTime = (time) => {
  const hour = Math.floor(+time)
  const minutes = +time - hour

  const hourString = String(hour).padStart(2, '0')
  const minutesString = String(Math.floor(minutes * 60)).padStart(2, '0')

  return `${hourString}:${minutesString}`
}

const Path = ({ path, id }) => (
  <div className={styles.path}>
    <div className={styles.destination}>
      <p className={styles.time}>{formatTime(path[0].startHour)}</p>
      <p className={styles.airport}>{path[0].airportFrom}</p>
    </div>

    <div className={styles.line}>
      {new Array(path.length - 1).fill({}).map((v, i) =>
        (<div key={`${id}-${v.airportFrom}-${i}`} className={styles.transfer} />),
      )}
    </div>

    <div className={styles.destination}>
      <p className={styles.time}>
        {formatTime(path[path.length - 1].startHour + path[path.length - 1].length)}
      </p>
      <p className={styles.airport}>{path[path.length - 1].airportTo}</p>
    </div>
  </div>
)

export default Path