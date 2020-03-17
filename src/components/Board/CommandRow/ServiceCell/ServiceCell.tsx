import React from 'react'
import classNames from 'classnames'
import { IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import styles from './ServiceCell.module.scss'
import SkeletonText from 'src/components/shared/SkeletonText'
import Status from 'src/components/Board/CommandRow/ServiceCell/Status/Status'
import Flags from 'src/components/Board/CommandRow/ServiceCell/Flags/Flags'

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
    <div className={styles.cell}>
      <div
        className={classNames(
          styles.cellInfoWrap,
          fbAnimation && styles.cellInfoWrapShow
        )}
      >
        Firstblood!
      </div>
      <div className={styles.topInfo}>
        {serviceData ? (
          <Status status={serviceData?.status} />
        ) : (
          <SkeletonText width={50} />
        )}
        <span>
          {serviceData ? (
            serviceData.fp.toFixed(2)
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
