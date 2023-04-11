import React from 'react'
import { BrigadesList } from '../../features/BrigadesTable/ui/BrigadesList'
import { FilterPanel } from '../../features/FilterPanel/ui/FilterPanel'

export const Pages = () => {
  return (
    <>
      <FilterPanel />
      <BrigadesList />
    </>
  )
}
