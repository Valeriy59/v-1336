import React from 'react'
import { brigadesSelector } from '../../common/selectors/brigadesSelector'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { BrigadesItem } from './BrigadesItem'
import { appStatusSelector } from '../../common/selectors/appSelector'
import { Skeleton, Space } from 'antd'

export const BrigadesList = () => {
  const brigades = useAppSelector(brigadesSelector)
  const status = useAppSelector(appStatusSelector)

  return (
    <Space direction="vertical" size={16}>
      {brigades.map((item) => (
        <Skeleton loading={status === 'loading'}>
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
        </Skeleton>
      ))}
    </Space>
  )
}
