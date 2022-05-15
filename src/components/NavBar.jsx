import { NavLink } from "react-router-dom"

const NavBar = ({ payload, logout }) => {

  let profileURL

  if (payload) {
    profileURL = `/profile/${payload.id}`
  }
  return (
    <div>
      {!payload && (
        <div className="nav1"> 
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink>
        </div>
        )
      } 
      {payload && (
        <div className="nav">
          <h1 className="navTitle">MyWorkoutBud</h1>
          <div className="navButtons">
            <NavLink to={profileURL}>Profile</NavLink>
            <NavLink to='/workoutLogs'>Workout Logs</NavLink>
            <NavLink to='/addWorkout'>Add Workout</NavLink>
            <NavLink to='/' onClick={logout}>Logout</NavLink>
          </div>
        </div>
      )} 
    </div>
  )
}

export default NavBar