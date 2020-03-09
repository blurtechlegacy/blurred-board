import React from 'react'
import styles from 'src/components/Settings/Settings.module.scss'
import gear from 'src/assets/images/gear.svg'

const Settings = () => {
  return (
    <div className={styles.settings}>
      <img src={gear} alt={'Settings'} className={styles.gear} />
    </div>
  )
}

export default Settings
