const ExerciseCard = ({ exerciseCard, chooseExercise }) => {
  return (
    <button className="loginButton" onClick={() => chooseExercise(exerciseCard.id)}>{exerciseCard.name}</button>
  )
}

export default ExerciseCard