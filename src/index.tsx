import React from 'react'
import ReactDOM from 'react-dom'
import 'src/index.module.scss'
import Main from 'src/components/Main'
import * as serviceWorker from 'src/serviceWorker'

ReactDOM.render(<Main />, document.getElementById('root'))

serviceWorker.unregister()

