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
  return (
    <ExcelFile
      element={<button className={styles.exportButton}>Download Data</button>}
    >
      <ExcelSheet data={dataset} name="board">
        {fields.map(el => (
          <ExcelColumn key={nanoid(8)} label={el} value={el} />
        ))}
      </ExcelSheet>
    </ExcelFile>
  )
}
