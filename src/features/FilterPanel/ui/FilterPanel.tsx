import React from 'react'
import s from '../../../app/pages/Pages.module.css'
import { BasicSelect } from '../../../components/BasicSelect/BasicSelect'
import { useSelectData } from './hooks/useSelectData'

export const FilterPanel = () => {
  const selectData = useSelectData()
  return (
    <div className={s.filterContainer}>
      <BasicSelect
        options={selectData.ConnectionsOptions}
        onChange={selectData.onChangeConnections}
        title={'Соединение:'}
      />
      <BasicSelect
        options={selectData.DepartmentsOptions}
        onChange={selectData.onChangeDepartments}
        title={'Департамент:'}
      />
    </div>
  )
}
