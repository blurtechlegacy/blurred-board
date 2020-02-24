import React from 'react'
import { IBoard } from 'src/classes/models/IBoard'
import BoardStoreService from 'src/classes/services/BoardStoreService'
import Loader from 'src/components/shared/Loader'
import App from 'src/components/App'

const Main = () => {
  const [board, setBoard] = React.useState<IBoard | undefined>()
  React.useEffect(() => {
    setTimeout(
      () => BoardStoreService.getBoard().then(result => setBoard(result.data)),
      200
    )
  }, [])
  return board ? <App store={board} /> : <Loader />
}
export default Main
