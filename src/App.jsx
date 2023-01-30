import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import styles from './App.module.scss'
import CharacterContainer from "./pages/CharacterContainer/CharacterContainer"
import Navbar from "./components/Navbar/Navbar"
import Favorites from "./pages/Favorites/Favorites"

function App() {

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/character/:idCharacter' element={<CharacterContainer/>}/>
            <Route exact path='/favorites' element={<Favorites/>}/> 
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
