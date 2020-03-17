import React from 'react'
import { IStatus } from 'src/classes/models/IStatus'
import styles from './Status.module.scss'
import classNames from 'classnames'

interface IProps {
  status: IStatus
}

const Status = (props: IProps) => {
  const { status } = props
  const setColorClass = (status?: IStatus) => {
    return status ? `circle_${IStatus[status]}` : ''
  }

  return (
    <div className={classNames(styles.circle, styles[setColorClass(status)])}>
      {IStatus[status]}
    </div>
  )
}

export default Status
