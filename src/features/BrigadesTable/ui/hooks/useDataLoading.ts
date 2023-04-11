import { useEffect, useState } from 'react'
import { BrigadeType } from '../../../../common/types'
import { useAppSelector } from '../../../../common/hooks/useAppSelector'
import { brigadesSelector } from '../../../../common/selectors/brigadesSelector'
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch'
import { getFilteredBrigades } from '../../state/brigadesReducer'
import { useWindowDeminsions } from './useWindowDeminsions'

export const useDataLoading = () => {
  const { filteredBrigades } = useAppSelector(brigadesSelector)
  const { filter } = useAppSelector(brigadesSelector)
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(true)

  const countOfCardsOnDisplay = useWindowDeminsions(setLoading)

  const [displayData, setDisplayData] = useState<BrigadeType[]>(
    filteredBrigades.slice(0, countOfCardsOnDisplay.allCards)
  )

  useEffect(() => {
    dispatch(getFilteredBrigades())
  }, [filter])

  useEffect(() => {
    setDisplayData(filteredBrigades.slice(0, countOfCardsOnDisplay.allCards))
  }, [filteredBrigades, countOfCardsOnDisplay])

  useEffect(() => {
    if (loading) {
      setDisplayData(
        filteredBrigades.slice(0, displayData.length + countOfCardsOnDisplay.widthCountCards)
      )
      setLoading(false)
    }
  }, [loading])

  return { displayData }
}
