
import './App.css'
import BgComponent from './components/background/BgComponent'
import Header from './components/header/Header'
import Description from './pages/description/Description'
import Projects from './pages/projects/Projects'

function App() {
  

  return (
    <>
      <BgComponent />
      <div>
        <Header />
        <Description />
        <Projects/>
      </div>
    </>
  )
}

export default App
