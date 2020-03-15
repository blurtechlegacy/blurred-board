import React from 'react'
import styles from './FlagCharts.module.scss'

interface IProps {
  totalFp: number
  flagsAmount: number
  sflagsAmount: number
}

const FlagCharts = (props: IProps) => {
  const { totalFp, flagsAmount, sflagsAmount } = props

  const flagPart = Math.floor((flagsAmount / 100) * totalFp)
  const sflagPart = Math.floor((sflagsAmount / 100) * totalFp)

  return (
    <svg className={styles.flagCharts}>
      <rect fill={'green'} width={flagPart} height={5} />
      <rect fill={'red'} x={flagPart} width={sflagPart} height={5} />
    </svg>
  )
}

export default FlagCharts
