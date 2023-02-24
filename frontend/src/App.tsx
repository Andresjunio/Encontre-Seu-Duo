import './Styles/main.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  InitPage  from './Screens/InitPage'
import Home from './Screens/Home'
import Sign from './Screens/Sign'
import AddList from './Screens/AddList'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitPage/>}/>
        <Route path="/games/all" element={<Home/>}/>
        <Route path="/player/new" element={<Sign/>}/>
        <Route path="/ads/:id/all" element={<AddList/>}/>
      </Routes>
    </Router>
  )
}

export default App
