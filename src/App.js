import './style//App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
