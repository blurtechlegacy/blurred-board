import React from 'react'
import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.word}>LOADING...</div>
      <div className={styles.overlay} />
    </div>
  )
}

export default Loader
