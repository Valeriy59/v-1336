import React, { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { appStatusSelector } from '../common/selectors/appSelector'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { getBrigades } from '../features/Brigades/brigadesReducer'
import { Pages } from './pages/Pages'
import { getDepartments } from '../features/Departments/departmentsReducer'
import { getConnectionStates } from '../features/ConnectionStates/connectionStatesReducer'
import { Spin } from 'antd'
import { useAppNotification } from './hooks/useAppNotification'

function App() {
  const dispatch = useAppDispatch()
  const status = useAppSelector(appStatusSelector)
  const { message, notify, contextHolder } = useAppNotification()

  if (message) notify()

  useEffect(() => {
    dispatch(getBrigades())
    dispatch(getDepartments())
    dispatch(getConnectionStates())
  }, [])

  return (
    <div className="App">
      <Spin size="large" tip="Loading" spinning={status === 'loading'}>
        {contextHolder}
        <Pages />
      </Spin>
    </div>
  )
}

export default App
