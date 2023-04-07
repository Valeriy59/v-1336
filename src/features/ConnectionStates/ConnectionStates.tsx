import React from 'react'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { getFilteredBrigades, setFilter1 } from '../Brigades/brigadesReducer'
import { Select } from 'antd'
import { connectionStatesSelector } from '../../common/selectors/connectionStatesSelector'
import s from './ConnectionState.module.css'

export const ConnectionStates = () => {
  const connectionStates = useAppSelector(connectionStatesSelector)
  const dispatch = useAppDispatch()
  const options = connectionStates.map((connection) => ({
    value: connection.connectionStateId,
    label: connection.name,
  }))
  const handleChange = (value: number | undefined) => {
    // if (value !== undefined) {
    dispatch(setFilter1({ filter: { connectionStateId: value } }))
    dispatch(getFilteredBrigades())
    // }

    console.log('connectionStateId' + ' ' + value)
  }

  return (
    <div className={s.container}>
      <span className={s.text}>Соединение:</span>
      <Select
        defaultValue={undefined}
        style={{ width: 220 }}
        allowClear
        options={options}
        onChange={handleChange}
      />
    </div>
  )
}
