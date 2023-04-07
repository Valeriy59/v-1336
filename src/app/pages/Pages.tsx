import React from 'react'
import { BrigadesList } from '../../features/Brigades/BrigadesList/BrigadesList'
import { Departments } from '../../features/Departments/Departments'
import { ConnectionStates } from '../../features/ConnectionStates/ConnectionStates'
import s from './Pages.module.css'

export const Pages = () => {
  return (
    <>
      <div className={s.filterContainer}>
        <ConnectionStates />
        <Departments />
      </div>
      <BrigadesList />
    </>
  )
}
