import { IData } from '../../models/IFetchResult'
import { IService } from '../../models/IService'
import { ICommand } from '../../models/ICommand'
import { IBoard } from '../../models/IBoard'

class BoardApi {
  public fetchBoard = async (): Promise<IData<IBoard>> => {
    const services: IService[] = [
      {
        Id: 1,
        Name: 'Mirai',
        SLA: 100,
        Flags: 1000,
        Status: 'OK',
      },
      {
        Id: 2,
        Name: 'Faust',
        SLA: 10,
        Flags: 43,
        Status: 'CORRUPT',
      },
      {
        Id: 3,
        Name: 'n00bz_fighter',
        SLA: 25,
        Flags: 32,
        Status: 'MUMBLE',
      },
      {
        Id: 4,
        Name: 'Reverse',
        SLA: 0,
        Flags: 500,
        Status: 'DOWN',
      },
    ]
    const servicesGood: IService[] = [
      {
        Id: 1,
        Name: 'Mirai',
        SLA: 57,
        Flags: 12,
        Status: 'OK',
      },
      {
        Id: 2,
        Name: 'Faust',
        SLA: 100,
        Flags: 402,
        Status: 'OK',
      },
      {
        Id: 3,
        Name: 'n00bz_fighter',
        SLA: 25,
        Flags: 213,
        Status: 'OK',
      },
      {
        Id: 4,
        Name: 'Reverse',
        SLA: 30,
        Flags: 23,
        Status: 'OK',
      },
    ]
    const commands: ICommand[] = [
      {
        Id: 1,
        Name: 'n57u_n00bz',
        TotalSLA: 100,
        FlagPoints: 100,
        TotalFlags: 100,
        Services: servicesGood,
      },
      {
        Id: 2,
        Name: 'GEOLOGI',
        TotalSLA: 75,
        FlagPoints: 75,
        TotalFlags: 75,
        Services: services,
      },
      {
        Id: 3,
        Name: 'NSU',
        TotalSLA: 50,
        FlagPoints: 50,
        TotalFlags: 50,
        Services: services,
      },
      {
        Id: 4,
        Name: 'SIBGUTI',
        TotalSLA: 25,
        FlagPoints: 25,
        TotalFlags: 25,
        Services: services,
      },
      {
        Id: 5,
        Name: 'Blurred Technologies',
        TotalSLA: 0,
        FlagPoints: 0,
        TotalFlags: 0,
        Services: services,
      },
    ]
    const data: IBoard = {
      LastUpdate: new Date(),
      Commands: commands,
    }
    return {
      data,
      status: true,
    }
  }
}

export default new BoardApi()
