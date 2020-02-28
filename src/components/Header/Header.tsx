import settings from '../../config/settings'
import React from 'react'
import { IBoard } from '../../classes/models/IBoard'
import { IService } from '../../classes/models/IService'
import styles from './Header.module.scss'

interface IProps {
  store: IBoard
}

interface IServicePartitial {
  Id: number
  Name: string
}

const Header = (props: IProps) => {
  const { store } = props
  const [services, setServices] = React.useState<IServicePartitial[]>()

  React.useEffect(() => {
    setServices(
      store.Commands[0].Services.map((service: IService) => {
        return {
          Id: service.Id,
          Name: service.Name,
        }
      })
    )
  }, [store])

  return (
    <header>
      <h1 className={styles.boardName}>{settings.name}</h1>
      <div className={styles.serviceList}>
        {services?.map((service: any) => (
          <div className={styles.serviceName}>{service.Name}</div>
        ))}
      </div>
    </header>
  )
}

export default Header
