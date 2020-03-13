import React, { useEffect, useState } from 'react'
import SkeletonText from './SkeletonText'

interface IProps {
  start: Date
  end: Date
}

interface ITime {
  hours: number
  minutes: number
  seconds: number
}

class Time implements ITime {
  public hours: number
  public minutes: number
  public seconds: number

  constructor(rawTime: number) {
    this.hours = Math.floor(rawTime / 1000 / 60 / 60) % 24
    this.minutes = Math.floor(rawTime / 1000 / 60) % 60
    this.seconds = Math.floor(rawTime / 1000) % 60
  }

  parse() {
    const dateValues: number[] = Object.values(this)

    return dateValues
      .map(value => {
        return Intl.NumberFormat('ru-Ru', { minimumIntegerDigits: 2 }).format(
          value
        )
      })
      .join(':')
  }
}

enum TimeStatus {
  Before,
  Now,
  End,
}

const calculateRemainingTime = (beginTime: number, endTime: number) => {
  const currentTime = new Date().getTime()

  if (currentTime < beginTime) {
    return {
      status: TimeStatus.Before,
      remainingTime: new Time(beginTime - currentTime),
    }
  } else if (currentTime < endTime) {
    return {
      status: TimeStatus.Now,
      remainingTime: new Time(endTime - currentTime),
    }
  } else {
    return {
      status: TimeStatus.End,
      remainingTime: undefined,
    }
  }
}

const getRemainingTime = (timeStatus: TimeStatus, remainingTime: Time) => {
  let innerHtml = ''
  switch (timeStatus) {
    case TimeStatus.Before:
      innerHtml = `Time before start: ${
        remainingTime ? remainingTime.parse() : <SkeletonText width={50} />
      }`
      break
    case TimeStatus.Now:
      innerHtml = `Time before end: ${
        remainingTime ? remainingTime.parse() : <SkeletonText width={50} />
      }`
      break
    case TimeStatus.End:
      innerHtml = `Competition is over.`
      break
    default:
      return new Error('Unknown time status.')
  }

  return <span>{innerHtml}</span>
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
      {timeStatus ? (
        getRemainingTime(timeStatus, remainingTime)
      ) : (
        <SkeletonText width={150} />
      )}
    </div>
  )
}

export default Timer
