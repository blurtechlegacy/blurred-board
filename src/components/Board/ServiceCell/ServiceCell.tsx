import React from 'react'
import classNames from 'classnames'
import { IService } from 'src/classes/models/IService'
import flag from 'src/assets/images/ico-flag.svg'
import styles from './ServiceCell.module.scss'

interface IProps {
  className: string
  service: IService
}

export default function ServiceCell(props: IProps) {
  const service: IService = props.service

  return (
    <div className={classNames(props.className, styles.service_cell)}>
      <div className={styles.top_info}>
        <span className={styles.service_status}>
          STATUS: <b>{service.Status}</b>
        </span>
        <span className={styles.service_sla}>SLA: {service.SLA}%</span>
      </div>
      <div className={styles.bottom_info}>
        <img src={flag} alt={'flag'} className={styles.service_flags} />
        <span>{service.Flags}</span>
      </div>
    </div>
  )
}
