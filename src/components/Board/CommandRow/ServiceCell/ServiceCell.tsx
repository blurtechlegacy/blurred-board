import React from 'react'
import classNames from 'classnames'
import { IStatus } from 'src/classes/models/IStatus'
import { IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import styles from './ServiceCell.module.scss'
import { ReactComponent as Flag } from 'src/assets/images/flag.svg'
import SkeletonText from 'src/components/shared/SkeletonText'

const setColorClass = (status?: IStatus) => {
  return status ? `serviceStatus${IStatus[status]}` : 'skeleton'
}

interface IProps {
  serviceData?: IService
  firstblood?: IFirstblood
}

const ServiceCell = (props: IProps) => {
  const { serviceData, firstblood } = props
  return (
    <div
      className={classNames(
        styles[setColorClass(serviceData?.status)],
        styles.cell
      )}
    >
      <div className={styles.topInfo}>
        <span className={styles.serviceSla}>
          SLA:
          {serviceData ? (
              <b>{serviceData.sla}%</b>
          ) : (
            <SkeletonText width={40} />
          )}
        </span>
        <span className={styles.serviceFp}>
          FP:
          {serviceData ? (
            <b>{[serviceData?.fp]}</b>
          ) : (
            <SkeletonText width={40} />
          )}
        </span>
        {firstblood && <span>FIRSTBLOOD</span>}
      </div>
      <div className={styles.bottomInfo}>
        <Flag
          className={classNames(
            styles.flags,
            serviceData ? styles.flagBlack : styles.flagWhite
          )}
        />
        <span>
          {serviceData ? (
            `${serviceData.flags}/${serviceData.sflags}`
          ) : (
            <SkeletonText width={25} />
          )}{' '}
        </span>
      </div>
    </div>
  )
}

export default ServiceCell
