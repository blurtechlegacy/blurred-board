import React from 'react'
import settings from 'src/config/settings'
import styles from './Header.module.scss'
import { IInfo } from 'src/classes/models/IInfo'

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
      <h1>{settings.name}</h1>
      <div className={styles.serviceList}>
        {services?.map((service: any) => (
          <div>{service.Name}</div>
        ))}
      </div>
    </header>
  )
}

export default Header
