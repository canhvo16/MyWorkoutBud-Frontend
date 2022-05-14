const ExerciseCard = ({ exerciseCard, chooseExercise }) => {
  return (
    <button onClick={() => chooseExercise(exerciseCard.id)}>{exerciseCard.name}</button>
  )
}

export default ExerciseCard