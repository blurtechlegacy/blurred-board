import React from 'react'
import BoardStoreService from 'src/classes/services/BoardStoreService'
import Loader from 'src/components/shared/Loader'
import App from 'src/components/App'
import { IInfo } from '../classes/models/IInfo'

interface IBoard {
  info: IInfo
  history?: any
  current?: any
}

const Main = () => {
  const [board, setBoard] = React.useState<IBoard>()

  React.useEffect(() => {
    BoardStoreService.getInfo().then(result => {
      setBoard({
        info: result.data,
      })
      BoardStoreService.getHistory().then(res => {
        const currentScroboard = res.data[res.data.length - 1]
        const cmds = result.data.teams.map((cmd: any) => {
          const cur = currentScroboard.scoreboard.find(
            (i: any) => i.id === cmd.id
          )
          return { ...cmd, ...cur }
        })
        setBoard({
          info: {
            ...result.data,
            teams: cmds,
          },
          current: currentScroboard,
          history: res.data,
        })
      })
    })
  }, [])

  return board ? <App store={board} /> : <Loader />
}

export default Main
