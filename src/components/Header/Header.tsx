import React from 'react'
import settings from 'src/config/settings'
import styles from './Header.module.scss'
import nanoid from 'nanoid'
import { IBoard } from 'src/components/Main'
import { getDateDifference } from '../../classes/helpers/DateDifference'

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
        <span>
          Time diff:{' '}
          {getDateDifference(store.info.start, store.info.end).getTime()}
        </span>
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
