import React from 'react'
import settings from 'src/config/settings'
import styles from './Header.module.scss'
import nanoid from 'nanoid'
import { IBoard } from 'src/components/Main'
import Timer from '../shared/Timer'

interface IProps {
  store: IBoard
}

const Header = (props: IProps) => {
  const { store } = props
  const [services, setServices] = React.useState<string[]>()

  React.useEffect(() => {
    setServices(store.info.services)
  }, [store])

  return (
    <header>
      <div>
        <h1 className={styles.boardName}>{settings.name}</h1>
        <span>Rounds: {store.history?.length}</span>
        <br />
        <Timer start={store.info.start} end={store.info.end} />
      </div>
      <div className={styles.serviceList}>
        {services?.map((service: string) => (
          <div key={nanoid(8)} className={styles.serviceName}>
            {service}
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header
