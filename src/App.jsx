import Hero from './Pages/Hero'
import Navbar from './Pages/Navbar'
import Github from './Pages/Github'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/github' element={<Github />} />
      </Routes>
    </Router>
  )
}

export default App
