import React from 'react'
import { brigadesSelector } from '../../../common/selectors/brigadesSelector'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { BrigadesItem } from '../BrigadesItem/BrigadesItem'
import s from './BrigadesList.module.css'

export const BrigadesList = () => {
  const brigades = useAppSelector(brigadesSelector)

  // const status = useAppSelector(appStatusSelector)

  return (
    <div className={s.container}>
      {brigades.map((item) => (
        // <Skeleton loading={status === 'loading'}>
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
        // </Skeleton>
      ))}
    </div>
  )
}
