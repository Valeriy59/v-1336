import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './appSlice'
import { brigadesReducer } from '../features/Brigades/brigadesReducer'

export const store = configureStore({
  reducer: {
    app: appReducer,
    brigades: brigadesReducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
