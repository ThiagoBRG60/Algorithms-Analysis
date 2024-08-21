import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

const SpeedInput = () => {
  const {speed, setSpeed, isRunning, theme} = useContext(GlobalContext)

  function handleSpeedChange(e) {
    setSpeed(e.target.value)
  }

  return (
    <>
      <label htmlFor="speed">Speed:</label>
      <input
        style={{background: `linear-gradient(to right, #ae00ff ${speed / 3}%, ${theme ? '#ffffff99' : '#fff'} 0%)`}}
        min={0} 
        max={300} 
        type="range" 
        name="speed" 
        id="speed"
        value={speed}
        onChange={handleSpeedChange}
        disabled={isRunning}/>
    </>
  )
}

export default SpeedInput