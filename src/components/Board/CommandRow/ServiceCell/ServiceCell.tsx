import React, { useEffect, useRef } from 'react'
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
  const messageWrap = useRef<HTMLDivElement>(null)

  const showInfo = (info: string) => {
    if (messageWrap && messageWrap.current) {
      messageWrap.current.innerHTML = info
      messageWrap.current.classList.add(styles.cell_infoWrap__show)
      setTimeout(() => {
        if (messageWrap && messageWrap.current) {
          messageWrap.current.classList.remove(styles.cell_infoWrap__show)
        }
      }, 1000)
    }
  }

  useEffect(() => {
    firstblood && showInfo('Firstblood!')
  }, [firstblood])

  return (
    <div
      className={classNames(
        styles[setColorClass(serviceData?.status)],
        styles.cell
      )}
    >
      <div ref={messageWrap} className={styles.cell_infoWrap} />
      <div className={styles.topInfo}>
        <span className={styles.serviceFp}>
          {serviceData ? (
            <b>{[serviceData.fp.toFixed(2)]}</b>
          ) : (
            <SkeletonText width={40} />
          )}
        </span>
        <div className={styles.flags}>
          <Flag
            className={classNames(
              styles.flagIco,
              serviceData ? styles.flagBlack : styles.flagWhite
            )}
          />
          <span>
            {serviceData ? (
              `${serviceData.flags}/-${serviceData.sflags}`
            ) : (
              <SkeletonText width={40} />
            )}{' '}
          </span>
        </div>
      </div>
      <div className={styles.bottomInfo}>
        <span className={styles.serviceSla}>
          {serviceData ? (
            <b>{serviceData.sla?.toFixed(0)}%</b>
          ) : (
            <SkeletonText width={40} />
          )}
        </span>
      </div>
    </div>
  )
}

export default ServiceCell
