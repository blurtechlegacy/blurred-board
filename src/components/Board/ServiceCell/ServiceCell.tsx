import React from 'react'
import classNames from 'classnames'
import { IService } from 'src/classes/models/IHistory'
import flag from 'src/assets/images/flag.svg'
import styles from './ServiceCell.module.scss'
import { IStatus } from 'src/classes/models/IStatus'
import { IFirstblood } from 'src/classes/models/IFirstblood'

interface IProps {
  firstblood?: IFirstblood
  className: string
  service: IService
}

const ServiceCell = (props: IProps) => {
  const { service, firstblood } = props

  return (
    <div className={classNames(props.className, styles.service_cell)}>
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
