declare interface IObjectAny {
  [key: string]: any
}

declare interface ILogger {
  debug: (...args: any[]) => void
  info: (...args: any[]) => void
  warn: (...args: any[]) => void
  error: (...args: any[]) => void
}

declare module 'react-data-export'
