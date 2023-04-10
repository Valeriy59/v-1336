import { useAppSelector } from '../../common/hooks/useAppSelector'
import { setAppMessage } from '../appSlice'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { appMessageSelector } from '../../common/selectors/appSelector'
import { notification } from 'antd'

export const useAppNotification = () => {
  const dispatch = useAppDispatch()
  const message = useAppSelector(appMessageSelector)
  const [api, contextHolder] = notification.useNotification()

  const notify = () => {
    api.info({
      message: `Notification`,
      description: message,
      placement: 'bottomLeft',
    })
    dispatch(setAppMessage(null))
  }

  return { message, notify, contextHolder }
}
