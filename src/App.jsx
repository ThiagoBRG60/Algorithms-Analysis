import Header from "./components/Header"
import AlgorithmContainer from "./components/AlgorithmContainer"
import Footer from "./components/Footer"
import { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { themeColors } from "./components/styles/Global"
import GlobalStyles from './components/styles/Global.jsx'
import { GlobalContext } from "./context/GlobalContext.jsx"

const App = () => {
  const {theme} = useContext(GlobalContext)

  return (
    <ThemeProvider theme={theme ? themeColors.dark : themeColors.light}>
      <GlobalStyles/>
      <Header/>
      <main>
        <AlgorithmContainer/>
      </main>
      <Footer/>
    </ThemeProvider>
  )
}

export default App