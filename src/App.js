import './style//App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import {
  SignInUser,
  RegisterUser,
  CheckSession,
  GetUser,
  UpdateInfo,
  UpdatePassword,
  DestroyAccount
} from './services/Auth'
import {
  GetUserGoals,
  AddDaysCompleted,
  MinusDaysCompleted,
  CreateGoal,
  GetUserWorkoutLogs,
  GetExercises
} from './services/User'
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
  const [goalBody, setGoalBody] = useState({
    name: '',
    description: '',
    duration: '',
    daysCompleted: 0,
    completed: false,
    userId: null
  })
  const [editor, toggleEditor] = useState(false)
  const [passwordForm, togglePasswordForm] = useState(false)
  const [userEditor, setUserEditor] = useState({
    email: '',
    name: '',
    photo: ''
  })
  const [passwordEditor, setPasswordEditor] = useState({
    email: '',
    oldPassword: '',
    newPassword: ''
  })
  const [goals, setGoals] = useState(null)
  const [goalTrackerForm, toggleGoalTrackerForm] = useState(false)
  const [workoutLogs, setWorkoutLogs] = useState(null)
  const [viewExercises, toggleViewExercises] = useState(false)
  const [workoutForm, toggleWorkoutForm] = useState(false)
  const [exercises, setExercises] = useState(null)

  const showExercises = () => {
    toggleViewExercises(!viewExercises)
  }

  const showWorkoutForm = () => {
    toggleWorkoutForm(!workoutForm)
  }

  const checkToken = async () => {
    const payload = await CheckSession()
    setPayload(payload)
    const user = await GetUser(payload.id)
    setUser(user)
    const goals = await GetUserGoals(payload.id)
    setGoals(goals)
    const workoutLogs = await GetUserWorkoutLogs(payload.id)
    setWorkoutLogs(workoutLogs)
  }

  const addDay = async (id) => {
    await AddDaysCompleted(id)
    const goals = await GetUserGoals(payload.id)
    setGoals(goals)
  }

  const minusDay = async (id) => {
    await MinusDaysCompleted(id)
    const goals = await GetUserGoals(payload.id)
    setGoals(goals)
  }

  const destroyAccount = async () => {
    if (
      window.confirm(
        'This will permanently delete your account and all your data, are you sure you want to leave?'
      )
    ) {
      await DestroyAccount(payload.id)
      setPayload(null)
      localStorage.clear()
      navigate('/')
    }
  }

  const showGoalTrackerForm = () => {
    toggleGoalTrackerForm(!goalTrackerForm)
  }

  const onChangeGoal = (e) => {
    setGoalBody({
      ...goalBody,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitGoal = async (e) => {
    e.preventDefault()
    if (payload) {
      setGoalBody({ ...goalBody, userId: payload.id })
    }
    console.log(goalBody.userId)
    await CreateGoal(goalBody)
    toggleGoalTrackerForm(false)
    const goals = await GetUserGoals(payload.id)
    setGoals(goals)
  }

  const onChangePassword = (e) => {
    setPasswordEditor({
      ...passwordEditor,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitPassword = async (e) => {
    e.preventDefault()
    await UpdatePassword(passwordEditor)
    setPasswordEditor({ email: '', oldPassword: '', newPassword: '' })
    togglePasswordForm(false)
  }

  const showPasswordForm = () => {
    togglePasswordForm(!passwordForm)
    if (editor) {
      toggleEditor(false)
    }
  }

  const onChangeUserInfo = (e) => {
    setUserEditor({
      ...userEditor,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitUserInfo = async (e) => {
    e.preventDefault()
    await UpdateInfo(userEditor)
    setUserEditor({ email: '', name: '', photo: '' })
    const user = await GetUser(payload.id)
    setUser(user)
    toggleEditor(false)
  }

  const showEditor = () => {
    toggleEditor(!editor)
    if (passwordForm) {
      togglePasswordForm(false)
    }
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
    const goals = await GetUserGoals(payload.id)
    setGoals(goals)
    const workoutLogs = await GetUserWorkoutLogs(payload.id)
    setWorkoutLogs(workoutLogs)
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

  const getExercises = async () => {
    const exercises = await GetExercises()
    setExercises(exercises)
    console.log(exercises)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    getExercises()
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
              passwordForm={passwordForm}
              showPasswordForm={showPasswordForm}
              passwordEditor={passwordEditor}
              onChangePassword={onChangePassword}
              onSubmitPassword={onSubmitPassword}
              destroyAccount={destroyAccount}
              goals={goals}
              addDay={addDay}
              minusDay={minusDay}
              goalTrackerForm={goalTrackerForm}
              showGoalTrackerForm={showGoalTrackerForm}
              goalBody={goalBody}
              onChangeGoal={onChangeGoal}
              onSubmitGoal={onSubmitGoal}
            />
          }
        />
        <Route
          path="/workoutLogs"
          element={<WorkoutLogsPage workoutLogs={workoutLogs} />}
        />
        <Route
          path="/addWorkout"
          element={
            <AddWorkoutPage
              viewExercises={viewExercises}
              showExercises={showExercises}
              workoutForm={workoutForm}
              showWorkoutForm={showWorkoutForm}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
