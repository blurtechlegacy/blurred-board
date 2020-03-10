import React from 'react'
import classNames from 'classnames'

import { IStatus } from 'src/classes/models/IStatus'
import { IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'

import flag from 'src/assets/images/flag.svg'
import styles from './ServiceCell.module.scss'

const setColorClass = (status: IStatus) => {
  return `service_status_${IStatus[status]}`
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
        styles.service_cell
      )}
    >
      <div className={styles.top_info}>
        <span className={styles.service_status}>
          STATUS: <b>{IStatus[serviceData.status]}</b>
        </span>
        <span className={styles.service_sla}>SLA: {serviceData.SLA}%</span>
        <span className={styles.service_fp}>FP: {serviceData.fp}</span>
        {firstblood && <span>FIRSTBLOOD</span>}
      </div>
      <div className={styles.bottom_info}>
        <img src={flag} alt={'flag'} className={styles.service_flags} />
        <span>{`${serviceData.flags}/${serviceData.sflags}`}</span>
      </div>
    </div>
  )
}

export default ServiceCell
