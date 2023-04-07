import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './appSlice'
import { brigadesReducer } from '../features/Brigades/brigadesReducer'
import { departmentsReducer } from '../features/Departments/departmentsReducer'
import { connectionStatesReducer } from '../features/ConnectionStates/connectionStatesReducer'

export const store = configureStore({
  reducer: {
    app: appReducer,
    brigades: brigadesReducer,
    departments: departmentsReducer,
    connectionStates: connectionStatesReducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
