import React from 'react'
import styles from './Flags.module.scss'
import { ReactComponent as Flag } from 'src/assets/images/flag.svg'
import classNames from 'classnames'
import SkeletonText from 'src/components/shared/SkeletonText'
import FlagCharts from 'src/components/Board/CommandRow/ServiceCell/Flags/FlagCharts'
import { IService } from 'src/classes/models/IHistory'

interface IProps {
  serviceData?: IService
  totalFlags?: number
}

const Flags = (props: IProps) => {
  const { serviceData, totalFlags } = props

  return (
    <div>
      <div className={styles.flagBlock}>
        <Flag className={classNames(styles.flagIco, styles.flagWhite)} />
        {serviceData ? (
          <React.Fragment>
            <span className={styles.flags}>{serviceData?.flags}</span> /{' '}
            <span className={styles.sflags}>{serviceData?.sflags}</span>
          </React.Fragment>
        ) : (
          <SkeletonText width={40} />
        )}
      </div>
      {totalFlags && serviceData && serviceData.fpSum && (
        <FlagCharts
          totalFp={serviceData?.fpSum}
          flagsAmount={serviceData?.flags}
          sflagsAmount={serviceData?.sflags}
        />
      )}
    </div>
  )
}

export default Flags
