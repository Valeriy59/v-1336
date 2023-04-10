import React from 'react'
import { Select } from 'antd'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { departmentsSelector } from '../../common/selectors/departmentsSelector'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { setFilter } from '../Brigades/brigadesReducer'
import s from './Departments.module.css'

export const Departments = () => {
  const departments = useAppSelector(departmentsSelector)

  const dispatch = useAppDispatch()
  const options = departments.map((dep) => ({ value: dep.id, label: dep.name }))
  const handleChange = (value: number | undefined) => {
    // if (value !== undefined) {
    dispatch(setFilter({ filter: { departmentId: value } }))

    // }
    console.log('departmentId' + ' ' + value)
  }

  return (
    <div className={s.container}>
      <span className={s.text}>Департамент:</span>
      <Select
        defaultValue={null}
        style={{ width: 220 }}
        allowClear
        options={options}
        onChange={handleChange}
      />
    </div>
  )
}
