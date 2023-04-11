import { useEffect, useState } from 'react'
import { BrigadeType } from '../../../../common/types'
import { useAppSelector } from '../../../../common/hooks/useAppSelector'
import { brigadesSelector } from '../../../../common/selectors/brigadesSelector'
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch'
import { getFilteredBrigades } from '../../brigadesReducer'

export const useLoading = () => {
  const { filteredBrigades } = useAppSelector(brigadesSelector)
  const { filter } = useAppSelector(brigadesSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFilteredBrigades())
  }, [filter])

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<BrigadeType[]>(filteredBrigades.slice(0, 11))
  const [currentItemsCount, setCurrentItemsCount] = useState(11)

  const handleScroll = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setLoading(true)
    }
  }
  useEffect(() => {
    setData(filteredBrigades.slice(0, currentItemsCount))
  }, [filteredBrigades])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return function () {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (loading) {
      setData(filteredBrigades.slice(0, currentItemsCount))
      setCurrentItemsCount((prev) => prev + 4)
      setLoading(false)
    }
  }, [loading])

  return { data }
}
