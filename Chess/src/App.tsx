import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './Landing'
import { Game } from './Game'
import { WannaPlay } from './WannaPlay'
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Game' element={<Game/>}/>
        <Route path='/wannaPlay' element={<WannaPlay/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
