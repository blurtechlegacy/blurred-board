import React from 'react'
import classNames from 'classnames'
import { IStatus } from 'src/classes/models/IStatus'
import { IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import styles from './ServiceCell.module.scss'
import SkeletonText from 'src/components/shared/SkeletonText'
import Flags from 'src/components/Board/CommandRow/ServiceCell/Flags/Flags'

const setColorClass = (status?: IStatus) => {
  return status ? `serviceStatus${IStatus[status]}` : 'skeleton'
}

interface IProps {
  totalFlags?: number
  serviceData?: IService
  firstblood?: IFirstblood
}

const ServiceCell = (props: IProps) => {
  const { totalFlags, serviceData, firstblood } = props
  const [fbAnimation, setFbAnimation] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (firstblood) {
      setFbAnimation(true)
      setTimeout(() => setFbAnimation(false), 1000)
    }
  }, [firstblood])

  return (
    <div
      className={classNames(
        styles[setColorClass(serviceData?.status)],
        styles.cell
      )}
    >
      <div
        className={classNames(
          styles.cellInfoWrap,
          fbAnimation && styles.cellInfoWrapShow
        )}
      >
        Firstblood!
      </div>

      <div className={styles.topInfo}>
        <span className={styles.serviceFp}>
          {serviceData ? (
            <b>{[serviceData.fp.toFixed(2)]}</b>
          ) : (
            <SkeletonText width={40} />
          )}
        </span>
        <Flags serviceData={serviceData} totalFlags={totalFlags} />
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
