import logo from '/src/assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import  StyledHeader from './styles/Header.styled'
import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import HeaderMenu from './HeaderMenu'
import ErrorNoAlgorithm from './ErrorNoAlgorithm'
import ThemeButton from './ThemeButton'

export function randomizeArray(setNumbers, size,) {
  setNumbers(Array(size).fill(size).map((num) => Math.floor(Math.random() * num) + 1))
}

const Header = () => {
  const {setNumbers, size, isRunning} = useContext(GlobalContext)
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <StyledHeader>
      <div className="logo-info">
         <img src={logo} alt="logo image"/>
         <h1>Algorithms Analysis</h1>
      </div>
      <ul>
        <li 
          onClick={() => !isRunning && randomizeArray(setNumbers, size)}>
          <p>Randomize Array</p>
        </li>
        <li 
          onClick={() => setActiveMenu(prev => !prev)}>
          <p className={activeMenu ? 'active' : ''}>Algorithms</p>
          <FontAwesomeIcon className={activeMenu ? 'arrow arrow-move' : 'arrow'} icon={faChevronDown}/> 
          <HeaderMenu className={activeMenu ? 'active' : ''} setActiveMenu={setActiveMenu}/>
        </li>
      </ul>
      <ErrorNoAlgorithm/>
      <ThemeButton/>
    </StyledHeader>
  )
}

export default Header