import React from 'react'
import { ICommandData } from '../../../classes/models/IInfo'
import { IService } from '../../../classes/models/IHistory'

import InfoCell from '../InfoCell/InfoCell'
import ServiceCell from '../ServiceCell/ServiceCell'

import styles from './CommandRow.module.scss'

type ICommandInfo = Record<'flagPoints', Omit<ICommandData, 'services'>>

interface IProps {
  commandData: ICommandData
}

export default function CommandRow(props: IProps) {
  const commandServices: IService[] = props.commandData.services

  const flagPoints = commandServices
    ?.map((s: any) => s.fp)
    .reduce((p: any, c: any) => p + c)
  const commandInfo: ICommandInfo = { ...props.commandData, flagPoints }

  return (
    <div className={styles.command_row}>
      <InfoCell commandInfo={commandInfo} />
      {commandServices?.map(service => {
        return <ServiceCell service={service} />
      })}
    </div>

    // TODO: Firstblood
    /* {commandData.services?.map((service: IService) => (
        /!*<ServiceCell
          /!*          firstblood={
            store.firstblood &&
            store.firstblood.find(
              (fb: IFirstblood) =>
                fb.team === command.name && service.name === fb.service,
            )
          }*!/
          key={`${commandData.id}_${service.name}`}
          firstblood={}
          service={service}
        />*!/*/
  )
}
