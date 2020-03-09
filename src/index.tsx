import React from 'react'
import ReactDOM from 'react-dom'
import 'src/index.module.scss'
import { Main } from 'src/components/Main'
import { initStore } from './store'
import { Provider } from 'react-redux'

const store = initStore()

const Root = () => {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
