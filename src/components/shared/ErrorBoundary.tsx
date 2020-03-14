import React from 'react'
import Catch from 'src/components/shared/Catch'
import * as Sentry from '@sentry/browser'
import { toast } from 'react-toastify'

type Props = {
  children: React.ReactNode
}

const ErrorBoundary = Catch(function MyErrorBoundary(
  props: Props,
  error?: Error
) {
  if (error) {
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error)
    } else {
      toast.error(error.message)
    }
  }
  return <React.Fragment>{props.children}</React.Fragment>
})

export default ErrorBoundary
