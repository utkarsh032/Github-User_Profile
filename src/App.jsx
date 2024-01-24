import Hero from './Pages/Hero'
import Navbar from './Pages/Navbar'
import Github from './Pages/Github'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Loader from './Pages/Loader'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/github' element={<Github />} />
        <Route path='/loader' element={<Loader />} />
      </Routes>
    </Router>
  )
}

export default App
