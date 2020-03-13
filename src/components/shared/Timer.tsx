import React, { useEffect, useState } from 'react'

interface IProps {
  start: Date
  end: Date
}

interface IDate {
  hours: number
  minutes: number
  seconds: number
}

const Timer = (props: IProps) => {
  const { start, end } = props
  const [remainingTime, setRemainingTime] = useState()

  useEffect(() => {
    const timer = setInterval(calculateRemainingTime, 1000)
    return () => clearInterval(timer)
  }, [start, end])

  const calculateRemainingTime = () => {
    const remainingRaw = Math.floor(
      (new Date(2020, 3, 13, 15, 0, 0).getTime() - new Date().getTime()) / 1000
    )
    const remainingParsed: IDate = {
      hours: Math.floor(remainingRaw / 60 / 60) % 24,
      minutes: Math.floor(remainingRaw / 60) % 60,
      seconds: remainingRaw % 60,
    }
    setRemainingTime(remainingParsed)
  }

  const getRemainingTime = () => {
    const dateValues: number[] = Object.values(remainingTime)

    return dateValues
      .map(value => {
        return Intl.NumberFormat('ru-Ru', { minimumIntegerDigits: 2 }).format(
          value
        )
      })
      .join(':')
  }

  return <div>{remainingTime && getRemainingTime()}</div>
}

export default Timer
