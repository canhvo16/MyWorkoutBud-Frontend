import './style//App.css'
import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import WorkoutLogsPage from './pages/WorkoutLogsPage'
import AddWorkoutPage from './pages/AddWorkoutPage'

function App() {
  const PrivateOutlet = () => {
    return user ? <Outlet /> : <Navigate to="/" />
  }

  return (
    <div className="App">
      <header className="header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/profile/:id" element={<PrivateOutlet />}>
          <Route path="/workoutLogs" element={<WorkoutLogsPage />} />
          <Route path="/addWorkout" element={<AddWorkoutPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
