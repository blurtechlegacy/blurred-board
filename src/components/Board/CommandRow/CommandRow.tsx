import React from 'react'
import { ICommandData } from 'src/classes/models/IInfo'
import { IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'
import InfoCell from 'src/components/Board/CommandRow/InfoCell/InfoCell'
import ServiceCell from 'src/components/Board/CommandRow/ServiceCell/ServiceCell'
import styles from './CommandRow.module.scss'

interface IProps {
  commandPlace: number
  commandData: ICommandData
  firstblood?: IFirstblood
  servicesAmount: number
}

function getFlagPoints(services: IService[]): number {
  return services?.map((s: any) => s.fp).reduce((p: any, c: any) => p + c)
}

function isServiceFirstBlood(
  serviceName?: string,
  firstblood?: IFirstblood
): IFirstblood | undefined {
  return firstblood?.service === serviceName ? firstblood : undefined
}

export default function CommandRow(props: IProps) {
  const { servicesAmount, commandPlace, commandData, firstblood } = props

  const renderServices = () => {
    const resultServices = []
    for (let i = 0; i < servicesAmount; i++) {
      const service =
        commandData && commandData.services
          ? commandData.services[i]
          : undefined
      resultServices.push(
        <ServiceCell
          key={service ? service.name : i}
          serviceData={commandData ? service : undefined}
          firstblood={
            firstblood && service
              ? isServiceFirstBlood(service.name, firstblood)
              : undefined
          }
        />
      )
    }

    return resultServices
  }

  return (
    <div className={styles.commandRow}>
      <InfoCell
        commandData={commandData}
        commandPlace={commandPlace}
        flagPoints={
          commandData ? getFlagPoints(commandData.services) : undefined
        }
      />
      <div className={styles.commandServices}>{renderServices()}</div>
    </div>
  )
}
