import React from 'react'
import { getDateDifference } from 'src/classes/helpers/date'

interface IProps {
  start: Date
  end: Date
}

const Timer = (props: IProps) => {
  // TODO: rewrite to realtime countdown, time left until the end of the competition
  const { start, end } = props
  return <div>{start && end && getDateDifference(start, end).getTime()}</div>
}

export default Timer
