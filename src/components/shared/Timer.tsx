import React from 'react'
import { getDateDifference } from 'src/classes/helpers/date'

interface IProps {
  start: Date
  end: Date
}

const Timer = (props: IProps) => {
  const { start, end } = props
  return <div>{getDateDifference(start, end).getTime()}</div> // TODO: rewrite to realtime countdown, time left until the end of the competition
}

export default Timer
