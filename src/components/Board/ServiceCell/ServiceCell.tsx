import React from 'react'
import classNames from 'classnames'
import { IService } from 'src/classes/models/IHistory'
import { IStatus } from 'src/classes/models/IStatus'
import { IFirstblood } from 'src/classes/models/IFirstblood'

import flag from 'src/assets/images/ico-flag.svg'
import styles from './ServiceCell.module.scss'

const setColorClass = (status: IStatus) => {
  return `service_status_${status}`
}

interface IProps {
  firstblood?: IFirstblood
  service: IService
}

const ServiceCell = (props: IProps) => {
  const { service, firstblood } = props
  const service_color = setColorClass(service.status)

  return (
    <div className={classNames(styles.service_cell, styles[service_color])}>
      <div className={styles.top_info}>
        <span className={styles.service_status}>
          STATUS: <b>{IStatus[service.status]}</b>
        </span>
        <span className={styles.service_sla}>SLA: {service.SLA}%</span>
        <span className={styles.service_fp}>FP: {service.fp}</span>
        {firstblood && <span>FIRSTBLOOD</span>}
      </div>
      <div className={styles.bottom_info}>
        <img src={flag} alt={'flag'} className={styles.service_flags} />
        <span>{`${service.flags}/${service.sflags}`}</span>
      </div>
    </div>
  )
}

export default ServiceCell
