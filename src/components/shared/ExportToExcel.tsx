import React from 'react'
import ReactExport from 'react-data-export'
import nanoid from 'nanoid'
import styles from './ExportToExcel.module.scss'

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn

interface IProps {
  dataset: IObjectAny
  fields: string[]
}
export const ExportToExcel = ({ dataset, fields }: IProps) => {
  const data = dataset.map((el: any) => {
    const servicesObj =
      el.services &&
      Object.assign(
        {},
        ...el.services.map((el: any) => ({
          [el.name]: `flags:${el.flags} ,fp:${el.fp}, sflags:${el.sflags}, status:${el.status}`,
        }))
      )
    return el.services
      ? {
          ...el,
          ...servicesObj,
        }
      : { ...el }
  })

  return (
    <ExcelFile
      element={
        <button disabled={!dataset} className={styles.exportButton}>
          Download Data
        </button>
      }
    >
      <ExcelSheet data={data} name="board">
        {fields.map(el => (
          <ExcelColumn key={nanoid(8)} label={el} value={el} />
        ))}
      </ExcelSheet>
    </ExcelFile>
  )
}
