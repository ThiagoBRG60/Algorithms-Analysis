import StyledAlgorithmContainer from "./styles/AlgorithmContainer.styled"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

const AlgorithmContainer = () => {
   const { numbers } = useContext(GlobalContext)

  return (
   <StyledAlgorithmContainer>
      {numbers.map((num, index) => {
         return (
            <div key={index} className="bar" 
                 style={{height: `${num * 8}px`, filter: `hue-rotate(${num * 2}deg)`}}>
               {num}
            </div>
            )
         }
      )}
   </StyledAlgorithmContainer>
  )
}

export default AlgorithmContainer 