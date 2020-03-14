import React from 'react'
import styles from 'src/components/App.module.scss'
import { Header } from 'src/components/Header/Header'
import { Board } from 'src/components/Board/Board'
import { Settings } from 'src/components/Settings/Settings'

const App = () => {
  return (
    <div className={styles.root}>
      <Settings />
      <Header />
      <Board />
    </div>
  )
}

export default App
