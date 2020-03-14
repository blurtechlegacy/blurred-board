import React from 'react'
import styles from './FixNotify.module.scss'

const FixNotify = () => {
  return (
    <div className={styles.fixNotify}>
      <img
        className={styles.fixMan}
        alt="Fixeam!"
        src="./assets/images/fix.jpg"
      />
      <span>Websocket error</span>
    </div>
  )
}

export default FixNotify
