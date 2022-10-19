
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './views/Home'
import Navbar from './components/Navbar'
import Contacto from './views/Contacto'
import NotFound from './views/NotFound'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/contacto' element={ <Contacto/> }></Route>
        <Route path='*' element={ <NotFound/> }></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
