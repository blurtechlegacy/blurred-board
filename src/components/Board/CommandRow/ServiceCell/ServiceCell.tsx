import React from 'react'
import classNames from 'classnames'
import { IStatus } from 'src/classes/models/IStatus'
import { IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'

import styles from './ServiceCell.module.scss'
import flag from 'src/assets/images/flagBlack.svg'

const setColorClass = (status: IStatus) => {
  return `serviceStatus${IStatus[status]}`
}

interface IProps {
  serviceData: IService
  firstblood?: IFirstblood
}

const ServiceCell = (props: IProps) => {
  const { serviceData, firstblood } = props
  return (
    <div
      className={classNames(
        styles[setColorClass(serviceData.status)],
        styles.cell
      )}
    >
      <div className={styles.topInfo}>
        <span className={styles.service_status}>
          STATUS: <b>{IStatus[serviceData.status]}</b>
        </span>
        <span className={styles.serviceSla}>SLA: {serviceData.SLA}%</span>
        <span className={styles.serviceFp}>FP: {serviceData.fp}</span>
        {firstblood && <span>FIRSTBLOOD</span>}
      </div>
      <div className={styles.bottomInfo}>
        <img className={styles.flags} src={flag} alt={'flagIco'} />
        <span>{`${serviceData.flags}/${serviceData.sflags}`}</span>
      </div>
    </div>
  )
}

export default ServiceCell
