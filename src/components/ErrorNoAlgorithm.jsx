import StyledErrorNoAlgorithm from "./styles/ErrorNoAlgorithm.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

const ErrorNoAlgorithm = () => {
   const {showError} = useContext(GlobalContext)

  return (
    <StyledErrorNoAlgorithm className={showError ? 'showError' : ''}>
      Select an algorithm first!
      <FontAwesomeIcon icon={faXmark}/>
   </StyledErrorNoAlgorithm>
  )
}

export default ErrorNoAlgorithm