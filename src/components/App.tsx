import React from 'react'
import styles from 'src/components/App.module.scss'
import Header from 'src/components/Header/Header'
import Board from 'src/components/List/Board'
import { IInfo } from 'src/classes/models/IInfo'

interface IProps {
  store: IInfo
}

const App = (props: IProps) => {
  const { store } = props

  return (
    <div className={styles.root}>
      <Header store={store} />
      <Board store={store} />
    </div>
  )
}

export default App
