import { useAppSelector } from '../../common/hooks/useAppSelector'
import { setAppMessage } from '../appSlice'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { appMessageSelector } from '../../common/selectors/appSelector'

export const useNotification = () => {
  const dispatch = useAppDispatch()
  const message = useAppSelector(appMessageSelector)

  // const { colorMode } = useColorMode()

  const notify = () => {
    // toast.info(message, {
    //   position: toast.POSITION.TOP_CENTER,
    //   theme: colorMode,
    // })
    dispatch(setAppMessage(null))
  }

  return { message, notify }
}
