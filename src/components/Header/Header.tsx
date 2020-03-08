import React from 'react'
import settings from 'src/config/settings'
import styles from './Header.module.scss'
import { IInfo } from 'src/classes/models/IInfo'
import nanoid from 'nanoid'

interface IProps {
  store: IInfo
}

const Header = (props: IProps) => {
  const { store } = props
  const [services, setServices] = React.useState<string[]>()

  React.useEffect(() => {
    setServices(store.services)
  }, [store])

  return (
    <header>
      <h1 className={styles.boardName}>{settings.name}</h1>
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
