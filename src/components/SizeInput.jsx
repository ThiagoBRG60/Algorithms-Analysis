import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { randomizeArray } from "./Header"

const SizeInput = () => {
  const {setNumbers, size, setSize, isRunning, theme, sizeMax} = useContext(GlobalContext)

  function handleSize(e) {
    setSize(parseInt(e.target.value))
    randomizeArray(setNumbers, size)
  }

  const percentage = ((size - 5) / (sizeMax - 5)) * 100;

  return (
   <>
      <label htmlFor="size">Array Size:</label>
      <input
        style={{background: `linear-gradient(to right, #ae00ff ${percentage}%, ${theme ? '#ffffff99' : '#fff'} 0%)`}} 
        type="range" 
        name="size" 
        id="size"
        min={5} 
        max={sizeMax}
        value={size} 
        onChange={handleSize}
        disabled={isRunning}/>
   </>
  )
}

export default SizeInput