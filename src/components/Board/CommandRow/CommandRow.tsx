import React from 'react'

import { ICommandData } from '../../../classes/models/IInfo'
import { IService } from '../../../classes/models/IHistory'
import { IFirstblood } from '../../../classes/models/IFirstblood'

import ServiceCell from './ServiceCell/ServiceCell'

import styles from './CommandRow.module.scss'
import InfoCell from './InfoCell/InfoCell'

interface IProps {
  commandPlace: number
  commandData: ICommandData
  firstblood?: IFirstblood
}

function getFlagPoints(services: IService[]): number {
  return services?.map((s: any) => s.fp).reduce((p: any, c: any) => p + c)
}

function isServiceFirstBlood(
  serviceName: string,
  firstblood: IFirstblood | undefined
): IFirstblood | undefined {
  return firstblood?.service === serviceName ? firstblood : undefined
}

export default function CommandRow(props: IProps) {
  const { commandPlace, commandData, firstblood } = props

  return (
    <div className={styles.command_row}>
      <InfoCell
        commandInfo={commandData}
        commandPlace={commandPlace}
        flagPoints={getFlagPoints(commandData.services)}
      />
      <div className={styles.command_services}>
        {commandData.services?.map((service: IService) => (
          <ServiceCell
            key={`${commandData.id}_${service.name}`}
            serviceData={service}
            firstblood={isServiceFirstBlood(service.name, firstblood)}
          />
        ))}
      </div>
    </div>
  )
}
