import React, { useEffect, useState } from 'react'
import SkeletonText from './SkeletonText'
import styles from './Timer.module.scss'

interface IProps {
  start: Date
  end: Date
}

enum TimeStatus {
  Before,
  Now,
  End,
  Loading,
}

interface ITime {
  hours: number
  minutes: number
  seconds: number
}

const getITimeFromRaw = (rawTime: number) => {
  return {
    hours: Math.floor(rawTime / 60 / 60),
    minutes: Math.floor(rawTime / 60) % 60,
    seconds: Math.floor(rawTime) % 60,
  }
}

const parseITimeToString = (time: ITime) =>
  Object.values(time)
    .map(value => {
      return Intl.NumberFormat('ru-Ru', { minimumIntegerDigits: 2 }).format(
        value
      )
    })
    .join(':')

const calculateRemainingTime = (beginTime: number, endTime: number) => {
  const currentTime = new Date().getTime() / 1000

  if (isNaN(beginTime) || isNaN(endTime)) {
    return {
      status: TimeStatus.Loading,
      remainingTime: undefined,
    }
  }
  if (currentTime < beginTime) {
    return {
      status: TimeStatus.Before,
      remainingTime: getITimeFromRaw(beginTime - currentTime),
    }
  }
  if (currentTime < endTime) {
    return {
      status: TimeStatus.Now,
      remainingTime: getITimeFromRaw(endTime - currentTime),
    }
  }
  return {
    status: TimeStatus.End,
    remainingTime: undefined,
  }
}

const getRemainingTime = (timeStatus: TimeStatus, remainingTime: ITime) => {
  switch (timeStatus) {
    case TimeStatus.Before:
      return (
        <span className={styles.timerText}>
          Starts in:
          {remainingTime ? (
            parseITimeToString(remainingTime)
          ) : (
            <SkeletonText width={50} />
          )}
        </span>
      )
    case TimeStatus.Now:
      return (
        <span className={styles.timerText}>
          Time left:
          {remainingTime ? (
            parseITimeToString(remainingTime)
          ) : (
            <SkeletonText width={50} />
          )}
        </span>
      )
    case TimeStatus.End:
      return <span className={styles.timerText}>Competition is over</span>
    default:
      return new Error('Unknown time status.')
  }
}

const Timer = (props: IProps) => {
  const beginTime = new Date(props.start).getTime()
  const endTime = new Date(props.end).getTime()

  const [remainingTime, setRemainingTime] = useState()
  const [timeStatus, setTimeStatus] = useState()

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateRemainingTime(beginTime, endTime)
      setTimeStatus(time.status)
      setRemainingTime(time.remainingTime)
    }, 1000)
    return () => clearInterval(timer)
  }, [beginTime, endTime])

  return (
    <div>
      {!timeStatus || timeStatus === TimeStatus.Loading ? (
        <SkeletonText width={150} />
      ) : (
        getRemainingTime(timeStatus, remainingTime)
      )}
    </div>
  )
}

export default Timer
