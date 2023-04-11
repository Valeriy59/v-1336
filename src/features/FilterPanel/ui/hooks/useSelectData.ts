import { useAppDispatch } from '../../../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../../../common/hooks/useAppSelector'
import { connectionStatesSelector } from '../../../../common/selectors/connectionStatesSelector'
import { departmentsSelector } from '../../../../common/selectors/departmentsSelector'
import { useCallback, useMemo } from 'react'
import {
  setFilterConnection,
  setFilterDepartment,
} from '../../../BrigadesTable/state/brigadesReducer'

export const useSelectData = () => {
  const dispatch = useAppDispatch()
  const connectionStates = useAppSelector(connectionStatesSelector)
  const departments = useAppSelector(departmentsSelector)

  const makeOptionsForSelect = (
    data: Record<string, any>[],
    valueKey: string,
    labelKey: string
  ) => {
    return data.map((el) => ({ value: el[valueKey], label: el[labelKey] }))
  }

  const ConnectionsOptions = useMemo(
    () => makeOptionsForSelect(connectionStates, 'connectionStateId', 'name'),
    [connectionStates]
  )
  const DepartmentsOptions = useMemo(
    () => makeOptionsForSelect(departments, 'id', 'name'),
    [departments]
  )

  const handleChange = (value: number | undefined, nameOfFilter: 'connections' | 'departments') => {
    switch (nameOfFilter) {
      case 'connections': {
        return dispatch(setFilterConnection({ filter: { connectionStateId: value } }))
      }
      case 'departments': {
        return dispatch(setFilterDepartment({ filter: { departmentId: value } }))
      }
      default: {
        return null
      }
    }
  }

  return {
    ConnectionsOptions,
    onChangeConnections: useCallback(
      (value: number | undefined) => handleChange(value, 'connections'),
      []
    ),
    DepartmentsOptions,
    onChangeDepartments: useCallback(
      (value: number | undefined) => handleChange(value, 'departments'),
      []
    ),
  }
}
