import StyledThemeButton from "./styles/ThemeButton.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

const ThemeButton = () => {
   const {theme, setTheme} = useContext(GlobalContext)

   const toggleTheme = () => {
      setTheme(prev => !prev)
   }

   return (
      <StyledThemeButton onClick={toggleTheme}>
         <FontAwesomeIcon icon={faSun} className={`sun ${theme ? 'hide-sun' : ''}`}/>
         <span className={`ball ${theme ? 'move' : ''}`}></span>
         <FontAwesomeIcon icon={faMoon} className={`moon ${theme ? '' : 'hide-moon'}`}/>
      </StyledThemeButton>
   )
}

export default ThemeButton