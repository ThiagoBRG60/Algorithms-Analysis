import StyledHeaderMenu from "./styles/HeaderMenu.styled"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

const algorithmsList = [
   'Bubble Sort', 'Selection Sort', 'Insertion Sort', 
   'Quick Sort', 'Merge Sort', 'Heap Sort'
]

const HeaderMenu = ({className, setActiveMenu}) => {
   const {activeCategory, setActiveCategory} = useContext(GlobalContext)

   function handleActiveCategory(algorithm, e) {
      e.stopPropagation()
      setActiveCategory(algorithm)
      setTimeout(() => {setActiveMenu(prev => !prev)}, 500)
   }

  return (
    <StyledHeaderMenu className={className}>
      <ul>
         {algorithmsList.map((algorithm, index) => {
            return (
               <li key={index}>
                  <p 
                     className={activeCategory === algorithm ? 'active' : ''} 
                     onClick={(e) => handleActiveCategory(algorithm, e)}>
                     {algorithm}
                  </p>
               </li>
            )
         })}
      </ul>
    </StyledHeaderMenu>
  )
}

export default HeaderMenu