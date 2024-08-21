import StyledFooter from "./styles/Footer.styled"
import SizeInput from "./SizeInput"
import SpeedInput from "./SpeedInput"
import StartButton from "./StartButton"
import MuteButton from "./MuteButton"

const Footer = () => {
  return (
    <StyledFooter>
      <div className="control-inputs">
        <SizeInput />
        <SpeedInput />
        <MuteButton />
      </div>
      <StartButton />
    </StyledFooter>
  )
}

export default Footer