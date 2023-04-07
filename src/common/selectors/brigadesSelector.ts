import { AppRootStateType } from '../../app/store'

export const brigadesSelector = (state: AppRootStateType) => state.brigades.brigades
export const filterSelector = (state: AppRootStateType) => state.brigades.filter
