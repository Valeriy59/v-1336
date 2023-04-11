import React from 'react'
import { BrigadesItem } from './BrigadesItem/BrigadesItem'
import s from './BrigadesList.module.css'
import { useDataLoading } from './hooks/useDataLoading'

export const BrigadesList = () => {
  const { displayData } = useDataLoading()

  return (
    <div className={s.container}>
      {displayData.map((item) => (
        <BrigadesItem
          key={item.id}
          id={item.id}
          brigade_name={item.brigade_name}
          departmentId={item.department.id}
          connectionStateId={item.connectionStateId}
          cluster={item.position.cluster}
          field={item.position.field}
          well={item.position.well}
        />
      ))}
    </div>
  )
}
