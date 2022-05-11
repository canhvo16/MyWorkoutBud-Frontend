import { NavLink } from "react-router-dom"

const NavBar = ({ payload }) => {

  let profileURL

  if (payload) {
    profileURL = `/profile/${payload.id}`
  }
  return (
    <div>
      {!payload && (
        <div> 
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink>
        </div>
        )
      } 
      {payload && (
        <div>
          <NavLink to={profileURL}>Profile</NavLink>
          <NavLink to='/workoutLogs'>Workout Logs</NavLink>
          <NavLink to='/addWorkout'>Add Workout</NavLink>
        </div>
      )} 
    </div>
  )
}

export default NavBar