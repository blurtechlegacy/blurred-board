import React from 'react'
import styles from 'src/components/App.module.scss'
import Header from 'src/components/Header/Header'
import { Board } from 'src/components/Board/Board'
import { IBoard } from 'src/components/Main'
import Settings from 'src/components/Settings/Settings'

interface IProps {
  store: IBoard
}

const App = (props: IProps) => {
  const { store } = props

  return (
    <div className={styles.root}>
      <Settings />
      <Header store={store} />
      <Board store={store} />
    </div>
  )
}

export default App
