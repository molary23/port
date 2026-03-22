import {getInfo} from '@services/info-request'
import React, {useState, useEffect, useRef, createContext} from 'react'
import {loadInfoFallback} from '@fallbacks/info-fallback'

const InfoContext = createContext<RegularObject | undefined>(undefined)

const InfoContextProvider: React.FC<InfoContextProps> = ({children}) => {
  const [info, setInfo]: [
      RegularObject,
      React.Dispatch<React.SetStateAction<RegularObject>>,
    ] = useState({}),
    [isLoading, setIsLoading]: [
      boolean,
      React.Dispatch<React.SetStateAction<boolean>>,
    ] = useState(true),
    executedRef: React.RefObject<boolean> = useRef(false)

  const pullInfo = () => {
    getInfo().then(result => {
      setIsLoading(false)
      if (Object.keys(result).length === 0) {
        setInfo(loadInfoFallback())
      } else {
        setInfo(Object.values(result)[0])
      }
    })
  }

  useEffect(() => {
    if (executedRef.current) {
      return
    }
    pullInfo()
    executedRef.current = true
  }, [])

  return (
    <InfoContext.Provider value={{info, isLoading}}>
      {children}
    </InfoContext.Provider>
  )
}

export default InfoContextProvider
