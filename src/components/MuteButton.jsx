import StyledMuteButton from "./styles/MuteButton.styled"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { setMute } from "../utilities/sounds"

const MuteButton = () => {
   const {isMuted, setIsMuted} = useContext(GlobalContext)

   const handleMute = () => {
      setIsMuted(prev => !prev)
   }

   useEffect(() => {
      setMute(isMuted)
   }, [isMuted])

  return (
    <StyledMuteButton>
      <p>Sound:</p>
      <div className={`volume-control ${isMuted ? 'off' : ''}`} onClick={handleMute}>
        <div className={isMuted ? 'off' : 'on'}></div>
      </div>
    </StyledMuteButton>
   )
}

export default MuteButton