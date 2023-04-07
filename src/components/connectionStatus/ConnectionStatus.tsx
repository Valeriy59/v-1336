import React from 'react'
import { CheckCircleOutlined, StopOutlined } from '@ant-design/icons'
import s from './ConnectionStatus.module.css'

type PropsType = {
  connectionStatus: number
}

export const ConnectionStatus = ({ connectionStatus }: PropsType) => {
  const finalClassName = connectionStatus === 0 ? s.error : s.success
  const connectionStatusTitle = connectionStatus === 0 ? 'Нет связи' : 'В норме'
  const connectionIcon =
    connectionStatus === 0 ? (
      <StopOutlined style={{ color: '#1890ff', padding: '5px' }} />
    ) : (
      <CheckCircleOutlined style={{ color: '#1890ff', padding: '5px' }} />
    )
  return (
    <>
      <span className={finalClassName}>
        <strong>Соединение: </strong>
      </span>
      <span className={finalClassName}>{connectionStatusTitle}</span>
      {connectionIcon}
    </>
  )
}
