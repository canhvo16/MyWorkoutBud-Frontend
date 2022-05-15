const HomePage = ({ registerButton, payload }) => {
  let button = payload ? null : (
    <button className="startButton" onClick={registerButton}>
      START AS A NEW USER
    </button>
  )
  return (
    <div className="homepage">
      <h1 className="title">MyWorkoutBud</h1>
      <p className="description">
        Want to exercise more consistently? Keep track of your workouts and goal
        with MyWorkoutBud!
      </p>
      {button}
    </div>
  )
}

export default HomePage
