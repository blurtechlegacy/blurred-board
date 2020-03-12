import React from 'react'
import ReactDOM from 'react-dom'
import { initStore } from './store'
import { Provider } from 'react-redux'
import * as Sentry from '@sentry/browser'
import ErrorBoundary from 'src/components/shared/ErrorBoundary'
import './index.module.scss'
import App from 'src/components/App'
import * as BoardStoreService from 'src/classes/services/BoardStoreService'

const store = initStore()
process.env.REACT_APP_SENTRY &&
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY })

const Root = () => {
  React.useEffect(() => {
    BoardStoreService.init()
  })

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
