import React from 'react'
import styles from 'src/components/Settings/Settings.module.scss'
import { ReactComponent as Gear } from 'src/assets/images/gear.svg'

const Settings = () => {
  return (
    <div className={styles.settings}>
      <Gear className={styles.gear} />
    </div>
  )
}

export default Settings
