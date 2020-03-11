import React from 'react'
import ReactDOM from 'react-dom'
import 'src/index.module.scss'
import { Main } from 'src/components/Main'
import { initStore } from './store'
import { Provider } from 'react-redux'
import * as Sentry from '@sentry/browser'
import ErrorBoundary from 'src/components/shared/ErrorBoundary'

const store = initStore()
process.env.REACT_APP_SENTRY &&
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY })

const Root = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Main />
      </Provider>
    </ErrorBoundary>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
