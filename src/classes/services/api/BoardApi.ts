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
        Status: 'OK',
      },
      {
        Id: 2,
        Name: 'Faust',
        Status: 'CORRUPT',
      },
      {
        Id: 3,
        Name: 'n00bz_fighter',
        Status: 'MUMBLE',
      },
      {
        Id: 4,
        Name: 'Reverse',
        Status: 'DOWN',
      },
    ]
    const servicesGood: IService[] = [
      {
        Id: 1,
        Name: 'Mirai',
        Status: 'OK',
      },
      {
        Id: 2,
        Name: 'Faust',
        Status: 'OK',
      },
      {
        Id: 3,
        Name: 'n00bz_fighter',
        Status: 'OK',
      },
      {
        Id: 4,
        Name: 'Reverse',
        Status: 'OK',
      },
    ]
    const commands: ICommand[] = [
      {
        Id: 1,
        Name: 'n57u_n00bz',
        SLA: 100,
        FlagPoints: 100,
        Flags: 100,
        Services: servicesGood,
      },
      {
        Id: 2,
        Name: 'GEOLOGI',
        SLA: 75,
        FlagPoints: 75,
        Flags: 75,
        Services: services,
      },
      {
        Id: 3,
        Name: 'NSU',
        SLA: 50,
        FlagPoints: 50,
        Flags: 50,
        Services: services,
      },
      {
        Id: 4,
        Name: 'SIBGUTI',
        SLA: 25,
        FlagPoints: 25,
        Flags: 25,
        Services: services,
      },
      {
        Id: 5,
        Name: 'Blurred Technologies',
        SLA: 0,
        FlagPoints: 0,
        Flags: 0,
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
