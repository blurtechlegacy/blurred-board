/* tslint:disable:no-console */

const Logger = {
  log: (...args: any[]) => console.log(new Date().toISOString(), ...args),
  debug: (...args: any[]) => console.debug(new Date().toISOString(), ...args),
  error: (...args: any[]) => console.error(new Date().toISOString(), ...args),
  info: (...args: any[]) => console.info(new Date().toISOString(), ...args),
  warn: (...args: any[]) => console.warn(new Date().toISOString(), ...args),
}

export default Logger
