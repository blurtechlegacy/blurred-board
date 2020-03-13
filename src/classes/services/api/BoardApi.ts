import { IFetchResult } from 'src/classes/models/IFetchResult'
import { IInfo, rawCastInfo } from 'src/classes/models/IInfo'
import * as Rest from 'src/classes/http/Rest'
import { IHistory } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import { ICurrent, rawCastCurrent } from '../../models/ICurrent'

export const fetchInfo = async (): Promise<IFetchResult<IInfo>> => {
  const data = await Rest.get('/api/info')
  const castedData = data ? rawCastInfo(data) : ({} as IInfo)
  return {
    data: castedData || {},
    status: !!data,
  }
}

export const fetchCurrent = async (): Promise<IFetchResult<ICurrent>> => {
  const data = await Rest.get('/scoreboard.json')
  const castedData = data ? rawCastCurrent(data) : ({} as ICurrent)
  return {
    data: castedData || {},
    status: !!data,
  }
}

export const fetchHistory = async (): Promise<IFetchResult<IHistory>> => {
  const data = await Rest.get('/history/scoreboard.json')
  return {
    data: data || [],
    status: !!data,
  }
}

export const fetchFirstblood = async (): Promise<IFetchResult<
  IFirstblood[]
>> => {
  const data = await Rest.get('/fb.json')
  return {
    data: data || [],
    status: !!data,
  }
}
