import { AppRootStateType } from '../../app/store'

export const connectionStatesSelector = (state: AppRootStateType) =>
  state.connectionStates.connectionStates
