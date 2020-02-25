import Logger from 'src/classes/utils/Logger'

export class HttpCancel {
  public canceled: boolean = false
  private cancelFunc: ((message: string) => void) | null = null

  public setCancelFunction(cancelFunc: () => void) {
    this.cancelFunc = cancelFunc
  }

  public cancel = (message: string = 'Cancel Request') => {
    this.canceled = true
    if (this.cancelFunc) {
      this.cancelFunc(message)
      this.cancelFunc = null
    } else {
      Logger.warn('Cancel function is not defined')
    }
  }
}
