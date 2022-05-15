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
  GetExercises,
  GetExerciseByMuscleGroup,
  CreateWorkoutLog,
  GetWorkoutLogById,
  GetAllMuscleGroups,
  CreateExerciseLog,
  CreateSetLog,
  GetExerciseLogById,
  DestroyWorkoutLog
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
  const [chestExercises, setChestExercises] = useState(null)
  const [backExercises, setBackExercises] = useState(null)
  const [legExercises, setLegExercises] = useState(null)
  const [coreExercises, setCoreExercises] = useState(null)
  const [armExercises, setArmExercises] = useState(null)
  const [shoulderExercises, setShoulderExercises] = useState(null)
  const [fullBodyExercises, setFullBodyExercises] = useState(null)
  const [muscleGroup, setMuscleGroup] = useState('All Exercises')
  const [workoutLogBody, setWorkoutLogBody] = useState({
    name: '',
    notes: '',
    userId: null
  })
  const [currentWorkoutLog, setCurrentWorkoutLog] = useState(null)
  const [allMuscleGroups, setAllMuscleGroups] = useState(null)
  const [muscleCards, toggleMuscleCards] = useState(false)
  const [viewExerciseCards, toggleExerciseCards] = useState(false)
  const [exerciseCards, setExerciseCards] = useState(null)
  const [currentExerciseLog, setCurrentExerciseLog] = useState(null)
  const [setLogForm, toggleSetLogForm] = useState(false)
  const [setLogBody, setSetLogBody] = useState({
    weight: null,
    metric: '',
    repetitions: null,
    duration: null
  })

  const destroyWorkoutLog = async (id) => {
    await DestroyWorkoutLog(id)
    const workoutLogs = await GetUserWorkoutLogs(payload.id)
    setWorkoutLogs(workoutLogs.reverse())
  }

  const finishWorkout = async () => {
    setCurrentWorkoutLog(null)
    setCurrentExerciseLog(null)
    const workoutLogs = await GetUserWorkoutLogs(payload.id)
    setWorkoutLogs(workoutLogs.reverse())
    navigate('/workoutLogs')
  }

  const onChangeSetLog = (e) => {
    setSetLogBody({ ...setLogBody, [e.target.name]: e.target.value })
  }

  const onSubmitSetLog = async (e) => {
    e.preventDefault()
    let setBody = {
      weight: setLogBody.weight,
      metric: setLogBody.metric,
      repetitions: setLogBody.repetitions,
      duration: setLogBody.duration,
      exerciseLogId: currentExerciseLog.id
    }
    await CreateSetLog(setBody)
    await GetWorkoutLogById(currentWorkoutLog.id).then((e) =>
      setCurrentWorkoutLog(e)
    )
    await GetExerciseLogById(currentExerciseLog.id).then((e) =>
      setCurrentExerciseLog(e)
    )
    setSetLogBody({
      weight: null,
      metric: '',
      repetitions: null,
      duration: null
    })
    toggleSetLogForm(false)
  }

  const showSetLogForm = () => {
    toggleSetLogForm(!setLogForm)
  }

  const chooseExercise = async (id) => {
    let exerciseLogBody = { exerciseId: id, workoutLogId: currentWorkoutLog.id }
    await CreateExerciseLog(exerciseLogBody).then((e) =>
      setCurrentExerciseLog(e)
    )
    await GetWorkoutLogById(currentWorkoutLog.id).then((e) =>
      setCurrentWorkoutLog(e)
    )
    toggleExerciseCards(false)
  }

  const showExerciseCards = async (id) => {
    toggleExerciseCards(!viewExerciseCards)
    showMuscleCards()
    const exerciseCards = await GetExerciseByMuscleGroup(id)
    setExerciseCards(exerciseCards)
  }

  const showMuscleCards = () => {
    toggleMuscleCards(!muscleCards)
  }

  const getAllMuscleGroups = async () => {
    const allMuscleGroups = await GetAllMuscleGroups()
    setAllMuscleGroups(allMuscleGroups)
  }

  const onChangeWorkoutLog = (e) => {
    setWorkoutLogBody({
      ...workoutLogBody,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitWorkoutLog = async (e) => {
    e.preventDefault()
    let banana = {
      userId: payload.id,
      name: workoutLogBody.name,
      notes: workoutLogBody.notes
    }
    const workoutLog = await CreateWorkoutLog(banana)
    setWorkoutLogBody({ name: '', notes: '', userId: null })
    toggleWorkoutForm(false)
    await GetWorkoutLogById(workoutLog.id).then((e) => setCurrentWorkoutLog(e))
  }

  const chooseMuscleGroup = (e) => {
    setMuscleGroup(e.target.value)
  }

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
    setWorkoutLogs(workoutLogs.reverse())
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
    setWorkoutLogs(workoutLogs.reverse())
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
  }

  const getChestExercises = async () => {
    const exercises = await GetExerciseByMuscleGroup(1)
    setChestExercises(exercises)
  }

  const getBackExercises = async () => {
    const exercises = await GetExerciseByMuscleGroup(2)
    setBackExercises(exercises)
  }

  const getLegExercises = async () => {
    const exercises = await GetExerciseByMuscleGroup(3)
    setLegExercises(exercises)
  }

  const getCoreExercises = async () => {
    const exercises = await GetExerciseByMuscleGroup(4)
    setCoreExercises(exercises)
  }

  const getArmExercises = async () => {
    const exercises = await GetExerciseByMuscleGroup(5)
    setArmExercises(exercises)
  }

  const getShoulderExercises = async () => {
    const exercises = await GetExerciseByMuscleGroup(6)
    setShoulderExercises(exercises)
  }

  const getFullBodyExercises = async () => {
    const exercises = await GetExerciseByMuscleGroup(7)
    setFullBodyExercises(exercises)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    getExercises()
    getArmExercises()
    getBackExercises()
    getChestExercises()
    getCoreExercises()
    getFullBodyExercises()
    getLegExercises()
    getShoulderExercises()
    getAllMuscleGroups()
  }, [])

  return (
    <div className="App">
      <header className="header">
        <NavBar payload={payload} logout={logout} />
      </header>
      <main>
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
            element={
              <WorkoutLogsPage
                workoutLogs={workoutLogs}
                destroyWorkoutLog={destroyWorkoutLog}
              />
            }
          />
          <Route
            path="/addWorkout"
            element={
              <AddWorkoutPage
                viewExercises={viewExercises}
                showExercises={showExercises}
                workoutForm={workoutForm}
                showWorkoutForm={showWorkoutForm}
                exercises={exercises}
                chestExercises={chestExercises}
                backExercises={backExercises}
                legExercises={legExercises}
                coreExercises={coreExercises}
                armExercises={armExercises}
                shoulderExercises={shoulderExercises}
                fullBodyExercises={fullBodyExercises}
                muscleGroup={muscleGroup}
                chooseMuscleGroup={chooseMuscleGroup}
                workoutLogBody={workoutLogBody}
                onChangeWorkoutLog={onChangeWorkoutLog}
                onSubmitWorkoutLog={onSubmitWorkoutLog}
                currentWorkoutLog={currentWorkoutLog}
                allMuscleGroups={allMuscleGroups}
                muscleCards={muscleCards}
                showMuscleCards={showMuscleCards}
                viewExerciseCards={viewExerciseCards}
                showExerciseCards={showExerciseCards}
                exerciseCards={exerciseCards}
                chooseExercise={chooseExercise}
                setLogForm={setLogForm}
                showSetLogForm={showSetLogForm}
                setLogBody={setLogBody}
                onChangeSetLog={onChangeSetLog}
                onSubmitSetLog={onSubmitSetLog}
                finishWorkout={finishWorkout}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
