export interface IFetchResult<T> {
  items: T[]
  total: number
}

export interface IData<T> {
  data: T
  status: boolean
}
