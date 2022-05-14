const HomePage = ({ registerButton }) => {
  return (
    <div className="homepage">
      <h1 className="title">MyWorkoutBuddy</h1>
      <p className="description">
        Want to exercise more consistently? Keep track of your workouts and goal
        with MyWorkoutBud!
      </p>
      <button className="startButton" onClick={registerButton}>
        START AS A NEW USER
      </button>
    </div>
  )
}

export default HomePage
