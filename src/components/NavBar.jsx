import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      {!user && (
        <div>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink>
        </div>
        )
      }
      {user && (
        <div>
          <NavLink to='/profile/:id'>Profile</NavLink>
          <NavLink to='/workoutLogs'>Workout Logs</NavLink>
          <NavLink to='/addWorkout'>Add Workout</NavLink>
        </div>
      )}
    </div>
  )
}

export default NavBar