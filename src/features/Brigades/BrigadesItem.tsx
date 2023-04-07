import React from 'react'
import { Card } from 'antd'

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
  return (
    <Card title={brigade_name} bordered={false} style={{ width: 300 }}>
      <p>{departmentId}</p>
      <p>{connectionStateId}</p>
      <p>{cluster}</p>
      <p>{field}</p>
      <p>{well}</p>
    </Card>
  )
}
