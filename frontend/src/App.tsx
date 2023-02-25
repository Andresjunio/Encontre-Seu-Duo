import './Styles/main.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  InitPage  from './Screens/InitPage'
import Home from './Screens/Home'
import Sign from './Screens/Sign'
import AddList from './Screens/AddList'
import AddAds from './Screens/AddAds'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitPage/>}/>
        <Route path="/games/all" element={<Home/>}/>
        <Route path="/player/new" element={<Sign/>}/>
        <Route path="/ads/:idGame/all" element={<AddList/>}/>
        <Route path="/ads/add" element={<AddAds/>}/>
      </Routes>
    </Router>
  )
}

export default App
