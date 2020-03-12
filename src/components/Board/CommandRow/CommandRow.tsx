import React from 'react'
import { ICommandData } from 'src/classes/models/IInfo'
import { IService } from 'src/classes/models/IHistory'
import { IFirstblood } from 'src/classes/models/IFirstblood'

import InfoCell from 'src/components/Board/CommandRow/InfoCell/InfoCell'
import SkeletonServiceCell from './SkeletonCells/SkeletonServiceCell'
import ServiceCell from 'src/components/Board/CommandRow/ServiceCell/ServiceCell'

import styles from './CommandRow.module.scss'
import SkeletonInfoCell from './SkeletonCells/SkeletonInfoCell'

interface IProps {
  commandPlace: number
  commandData?: ICommandData
  firstblood?: IFirstblood
  servicesAmount: number
}

function getFlagPoints(services: IService[]): number {
  return services?.map((s: any) => s.fp).reduce((p: any, c: any) => p + c)
}

function renderServiceCells(
  commandData: ICommandData,
  firstblood?: IFirstblood
) {
  return commandData.services?.map((service: IService) => (
    <ServiceCell
      key={`${commandData.id}_${service.name}`}
      serviceData={service}
      firstblood={isServiceFirstBlood(service.name, firstblood)}
    />
  ))
}

function renderSkeletonServiceCells(servicesAmount: number) {
  const skeletons = []
  for (let i = 0; i < servicesAmount; i++) {
    skeletons.push(<SkeletonServiceCell key={i} />)
  }

  return skeletons
}

function isServiceFirstBlood(
  serviceName: string,
  firstblood?: IFirstblood
): IFirstblood | undefined {
  return firstblood?.service === serviceName ? firstblood : undefined
}

export default function CommandRow(props: IProps) {
  const { servicesAmount, commandPlace, commandData, firstblood } = props

  return (
    <div className={styles.commandRow}>
      {commandData ? (
        <InfoCell
          commandInfo={commandData}
          commandPlace={commandPlace}
          flagPoints={getFlagPoints(commandData.services)}
        />
      ) : (
        <SkeletonInfoCell />
      )}
      {
        <div className={styles.commandServices}>
          {commandData?.services
            ? renderServiceCells(commandData, firstblood)
            : renderSkeletonServiceCells(servicesAmount)}
        </div>
      }
    </div>
  )
}
