import React from 'react'
import { Card } from 'antd'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { departmentsSelector } from '../../../common/selectors/departmentsSelector'
import { searchUtil } from '../../../common/utils/searchUtil'
import s from './BrigadesItem.module.css'
import { ConnectionStatus } from '../../../components/connectionStatus/ConnectionStatus'

type BrigadesItemPropsType = {
  id: number
  brigade_name: string
  connectionStateId: number
  departmentId: number
  field: string
  cluster: number
  well: number
}

export const BrigadesItem = ({
  brigade_name,
  connectionStateId,
  departmentId,
  field,
  cluster,
  well,
}: BrigadesItemPropsType) => {
  const departments = useAppSelector(departmentsSelector)

  return (
    <Card
      title={brigade_name}
      bordered={true}
      // style={s.card}
      className={s.card}
      bodyStyle={{ padding: '12px' }}
      headStyle={{ padding: '12px', fontSize: '14px' }}
      size={'small'}
    >
      <p className={s.department}>{searchUtil(departmentId, 'id', departments)}</p>
      <p className={s.paragraph}>
        <ConnectionStatus connectionStatus={connectionStateId} />
      </p>
      <p className={s.paragraph}>
        <span className={s.text}>Кластер: </span>
        <span>{cluster}</span>
      </p>
      <p className={s.paragraph}>
        <span className={s.text}>Поле: </span>
        <span>{field}</span>
      </p>
      <p className={s.paragraph}>
        <span className={s.text}>Скважина: </span>
        <span>{well}</span>
      </p>
    </Card>
  )
}
