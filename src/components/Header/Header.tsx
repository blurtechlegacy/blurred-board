import React from 'react'
import settings from 'src/config/settings'
import styles from './Header.module.scss'
import nanoid from 'nanoid'

const Header = (props: any) => {
  const { store } = props
  const [services, setServices] = React.useState<string[]>()

  React.useEffect(() => {
    console.log(store.info)
    setServices(store.info.services)
  }, [store])

  return (
    <header>
      <div>
        <h1 className={styles.boardName}>{settings.name}</h1>
        <span>Rounds: {store.history?.length}</span>
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
