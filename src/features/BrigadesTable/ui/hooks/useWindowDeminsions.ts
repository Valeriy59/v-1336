import { useCallback, useEffect, useState } from 'react'
import {
  brigadeCardHeight,
  brigadeCardWidth,
  FilterHeightBlock,
} from '../../../../common/constants/style-constants'

export const useWindowDeminsions = (setLoading: (value: boolean) => void) => {
  const [countOfCardsOnDisplay, setCountOfCardsOnDisplay] = useState({
    allCards: 0,
    widthCountCards: 0,
  })
  const findCountCardOfDeminsionsWindow = useCallback(() => {
    const widthCountCards = Math.floor(window.innerWidth / brigadeCardWidth)
    const heightCountCards = Math.floor(
      (window.innerHeight - FilterHeightBlock) / brigadeCardHeight
    )
    return { allCards: widthCountCards * heightCountCards + widthCountCards, widthCountCards }
  }, [window.innerWidth, window.innerHeight])

  const handleScroll = (e: Event) => {
    const target = e.target as Document
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setLoading(true)
    }
  }

  const addListenerToDocumentAndWindow = (window: Window, document: Document) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    window.addEventListener('resize', resizeListener)
    document.addEventListener('scroll', handleScroll)
  }

  const removeListenerToDocumentAndWindow = (window: Window, document: Document) => {
    document.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    window.removeEventListener('resize', resizeListener)
  }

  const resizeListener = () => setCountOfCardsOnDisplay(findCountCardOfDeminsionsWindow())

  useEffect(() => {
    resizeListener()
    addListenerToDocumentAndWindow(window, document)
    return function () {
      removeListenerToDocumentAndWindow(window, document)
    }
  }, [])

  return countOfCardsOnDisplay
}
