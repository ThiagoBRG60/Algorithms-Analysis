import { createContext, useState, useEffect } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
   const barsViewport = useScreenSize()
   const [size, setSize] = useState(Math.ceil(barsViewport / 27))
   const [numbers, setNumbers] = useState(Array(size).fill(size).map((num) => Math.floor(Math.random() * num) + 1))
   const [activeCategory, setActiveCategory] = useState('Algorithms')
   const [speed, setSpeed] = useState(150)
   const [isRunning, setIsRunning] = useState(false)
   const [showError, setShowError] = useState(false)
   const [isMuted, setIsMuted] = useState(false)
   const [theme, setTheme] = useState(false)
   const [sizeMax, setSizeMax] = useState(Math.ceil(barsViewport / 27))

   useEffect(() => {
      const newSize = Math.ceil(barsViewport / 27)
      setSize(newSize)
      setSizeMax(newSize)
    }, [barsViewport])
  
    useEffect(() => {
      setNumbers(Array(size).fill(size).map((num) => Math.floor(Math.random() * num) + 1))
    }, [size])
   
   return (
      <GlobalContext.Provider
         value={{
            barsViewport, size, setSize, numbers, setNumbers,
            activeCategory, setActiveCategory, speed, setSpeed,
            isRunning, setIsRunning, showError, setShowError,
            isMuted, setIsMuted, theme, setTheme, sizeMax
         }}>
         {children}
      </GlobalContext.Provider>
   )
}

export default GlobalProvider