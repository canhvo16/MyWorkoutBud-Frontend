const HomePage = ({ registerButton }) => {
  return (
    <div>
      <h1>MyWorkoutBuddy</h1>
      <p>
        Want to exercise more consistently? Keep track of your workouts and goal
        with MyWorkoutBud!
      </p>
      <button onClick={registerButton}>START AS A NEW USER</button>
    </div>
  )
}

export default HomePage
