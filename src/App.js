import './style//App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import {
  SignInUser,
  RegisterUser,
  CheckSession,
  GetUser
} from './services/Auth'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import WorkoutLogsPage from './pages/WorkoutLogsPage'
import AddWorkoutPage from './pages/AddWorkoutPage'

function App() {
  let navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [payload, setPayload] = useState(null)
  const [loginBody, setLoginBody] = useState({
    email: '',
    password: ''
  })
  const [registerBody, setRegisterBody] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [editor, toggleEditor] = useState(false)
  const [userEditor, setUserEditor] = useState({
    email: '',
    name: '',
    photo: ''
  })

  const onChangeUserInfo = (e) => {
    setUserEditor({
      ...userEditor,
      [e.target.name]: e.target.name
    })
  }

  const onSubmitUserInfo = async (e) => {
    e.preventDefault()
  }

  const showEditor = () => {
    toggleEditor(!editor)
  }

  const onChangeLogin = (e) => {
    setLoginBody({
      ...loginBody,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitLogin = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(loginBody)
    setLoginBody({ email: '', password: '' })
    setPayload(payload)
    const user = await GetUser(payload.id)
    setUser(user)
    navigate(`/profile/${payload.id}`)
  }

  const onChangeRegister = (e) => {
    setRegisterBody({
      ...registerBody,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitRegister = async (e) => {
    e.preventDefault()
    const user = await RegisterUser({
      name: registerBody.name,
      email: registerBody.email,
      password: registerBody.password
    })
    if (user.msg) {
      alert(user.msg)
    } else {
      setRegisterBody({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      navigate('/login')
    }
  }

  const registerButton = () => {
    navigate('/register')
  }

  const logout = () => {
    setPayload(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const payload = await CheckSession()
    setPayload(payload)
    const user = await GetUser(payload.id)
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header className="header">
        <NavBar payload={payload} logout={logout} />
      </header>
      <Routes>
        <Route
          path="/"
          element={<HomePage registerButton={registerButton} />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              loginBody={loginBody}
              onChangeLogin={onChangeLogin}
              onSubmitLogin={onSubmitLogin}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage
              registerBody={registerBody}
              onChangeRegister={onChangeRegister}
              onSubmitRegister={onSubmitRegister}
            />
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProfilePage
              user={user}
              editor={editor}
              showEditor={showEditor}
              userEditor={userEditor}
              onChangeUserInfo={onChangeUserInfo}
              onSubmitUserInfo={onSubmitUserInfo}
            />
          }
        />
        <Route path="/workoutLogs" element={<WorkoutLogsPage />} />
        <Route path="/addWorkout" element={<AddWorkoutPage />} />
      </Routes>
    </div>
  )
}

export default App
