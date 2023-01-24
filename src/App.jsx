import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import styles from './App.module.scss'
import CharacterContainer from "./pages/CharacterContainer/CharacterContainer"

function App() {

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/character/:idCharacter' element={<CharacterContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
