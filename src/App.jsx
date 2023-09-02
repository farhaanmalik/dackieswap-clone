import BottomNav from './components/BottomNav'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollTop from './components/ScrollTop'
import Home from './pages/Home'
import { useState } from "react"

function App() {

  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <>
      <div className={darkTheme ? 'dark' : ''}>
        <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
        <BottomNav />
        <Home />
        <Footer />
        <ScrollTop />
      </div>
    </>
  )
}

export default App
