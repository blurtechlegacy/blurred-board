import React from 'react'
import classNames from 'classnames'
import { IStatus } from 'src/classes/models/IStatus'
import { IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import flag from 'src/assets/images/flag.svg'
import styles from './ServiceCell.module.scss'

const setColorClass = (status: IStatus) => {
  return `serviceStatus${IStatus[status]}`
}

interface IProps {
  width?: number
  serviceData: IService
  firstblood?: IFirstblood
}

const ServiceCell = (props: IProps) => {
  const { width, serviceData, firstblood } = props
  return (
    <div
      className={classNames(
        styles[setColorClass(serviceData.status)],
        styles.serviceCell
      )}
      style={{ width }}
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
        <img src={flag} alt={'flag'} className={styles.serviceFlags} />
        <span>{`${serviceData.flags}/${serviceData.sflags}`}</span>
      </div>
    </div>
  )
}

export default ServiceCell
