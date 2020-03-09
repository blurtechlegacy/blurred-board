import React from 'react'
import BoardStoreService from 'src/classes/services/BoardStoreService'
import Loader from 'src/components/shared/Loader'
import App from 'src/components/App'
import { ICommandInfo, IInfo } from '../classes/models/IInfo'
import { IFirstblood } from '../classes/models/IFirstblood'
import { IHistory, IRound, IService } from '../classes/models/IHistory'

export interface IBoard {
  info: IInfo
  firstblood?: IFirstblood[]
  history?: IHistory
  current?: IRound
}

const Main = () => {
  const [board, setBoard] = React.useState<IBoard>()

  React.useEffect(() => {
    // InitService.init() here
    // TO-DO? how do we draw loader ?
    BoardStoreService.getInfo().then(info => {
      if (info.status) {
        const information = info.data
        setBoard({
          info: information,
        })
        BoardStoreService.getHistory().then(history => {
          if (history.status) {
            const boardHistory = history.data
            const currentScroboard = boardHistory[boardHistory.length - 1]
            const cmds = information.teams
              .map((cmd: any) => {
                const cur = currentScroboard.scoreboard.find(
                  (i: any) => i.id === cmd.id
                )
                return { ...cmd, ...cur }
              })
              .map((cmd: ICommandInfo) => {
                const newServices = cmd.services.map(
                  (service: IService, index: number) => {
                    return {
                      ...service,
                      name: information.services[index],
                    }
                  }
                )
                return {
                  ...cmd,
                  services: newServices,
                }
              })
            setBoard({
              info: {
                ...information,
                teams: cmds,
              },
              current: currentScroboard,
              history: boardHistory,
            })
            BoardStoreService.getFistblood().then(fb =>
              setBoard({
                info: {
                  ...information,
                  teams: cmds,
                },
                current: currentScroboard,
                history: boardHistory,
                firstblood: fb.data,
              })
            )
          }
        })
      }
    })
  }, [])

  return board ? <App store={board} /> : <Loader />
}

export default Main
