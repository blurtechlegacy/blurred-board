import { IFetchResult } from 'src/classes/models/IFetchResult'
import { IInfo, rawCastInfo } from 'src/classes/models/IInfo'
import * as Rest from 'src/classes/http/Rest'
import { IHistory } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import { ICurrent, rawCastCurrent } from 'src/classes/models/ICurrent'

const fetchData = async (url: string) => {
  let data = await Rest.get(url)
  switch (url) {
    case '/api/info':
      data = data ? rawCastInfo(data) : ({} as IInfo)
      break
    case '/scoreboard.json':
      data = data ? rawCastCurrent(data) : ({} as ICurrent)
      break
  }
  return {
    data: data,
    status: !!data,
  }
}

export const fetchInfo = async (): Promise<IFetchResult<IInfo>> =>
  await fetchData('/api/info')

export const fetchCurrent = async (): Promise<IFetchResult<ICurrent>> =>
  await fetchData('/scoreboard.json')

export const fetchHistory = async (): Promise<IFetchResult<IHistory>> =>
  await fetchData('/history/scoreboard.json')

export const fetchFirstblood = async (): Promise<IFetchResult<IFirstblood[]>> =>
  await fetchData('/fb.json')
