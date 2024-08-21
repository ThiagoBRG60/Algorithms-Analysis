import StyledButton from "./styles/StartButton.styled"
import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort, heapSort } from "../utilities/algorithms"
import { randomizeArray } from "./Header"

const algorithmsToRun = {
  'Bubble Sort': bubbleSort,
  'Selection Sort': selectionSort,
  'Insertion Sort': insertionSort,
  'Quick Sort': quickSort,
  'Merge Sort': mergeSort,
  'Heap Sort': heapSort
}

export function waitBarsUpdate(speed) {
  return new Promise((resolve) => setTimeout(resolve, parseInt(speed)));
}

const StartButton = () => {
  const {numbers, setNumbers, activeCategory, speed, size, isRunning, setIsRunning, setShowError} = useContext(GlobalContext)
  const [buttonText, setButtonText] = useState('Start Sorting')

  async function handleAlgorithms() {
    if (activeCategory === 'Algorithms') {
      setShowError(true)
      setTimeout(() => {setShowError(false)}, 3000)
      return
    }

    const isQuickOrMerge = activeCategory === 'Quick Sort' || activeCategory === 'Merge Sort'

    if (!isRunning) {
      setIsRunning(true)
      if (isQuickOrMerge) {
        await algorithmsToRun[activeCategory](numbers, setNumbers, speed, 0, numbers.length - 1)
        setIsRunning(false)
      } else {
        await algorithmsToRun[activeCategory](numbers, setNumbers, speed)
        setIsRunning(false)
      }
    }
    setButtonText('Randomize Array')
  }

  function resetButton() {
    if (isRunning) return
    randomizeArray(setNumbers, size)
    setButtonText('Start Sorting')
  }

  return (
    <StyledButton 
      onClick={async () => {buttonText === 'Start Sorting' ? await handleAlgorithms() : resetButton()}}>
        {buttonText}
    </StyledButton>
  )
}

export default StartButton