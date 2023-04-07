import { AppRootStateType } from '../../app/store'

export const departmentsSelector = (state: AppRootStateType) => state.departments.departments
