import React from 'react'
import styles from './Crossed.module.scss'
import { getState, setNextState } from '../../store'

interface IProps {
  children: JSX.Element
  type: 'notifications' | 'sound'
}

const Crossed = (props: IProps) => {
  const { children, type } = props
  const state = getState()

  return (
    <del
      className={styles.cross}
      onClick={() => {
        setNextState({
          ...state,
          settings: {
            ...state.settings,
            [type]: true,
          },
        })
      }}
    >
      {children}
    </del>
  )
}

export default Crossed
