import React, { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from '../common/hooks/useAppDispatch'
import { appStatusSelector } from '../common/selectors/appSelector'
import { useAppSelector } from '../common/hooks/useAppSelector'
import { getBrigades } from '../features/Brigades/brigadesReducer'
import { Pages } from './pages/Pages'
import { Progress } from 'antd'

function App() {
  const dispatch = useAppDispatch()
  const status = useAppSelector(appStatusSelector)

  useEffect(() => {
    dispatch(getBrigades())
  }, [])
  return (
    <div className="App">
      {status === 'loading' && <Progress showInfo={false} />}
      <Pages />
    </div>
  )
}

export default App
