import Exercise from '../components/Exercise'

const AddWorkoutPage = ({
  viewExercises,
  showExercises,
  workoutForm,
  showWorkoutForm,
  exercises
}) => {
  let workouts = viewExercises ? (
    <div>
      {exercises.map((exercise) => (
        <Exercise exercise={exercise} key={exercise.id} />
      ))}
    </div>
  ) : null
  return (
    <div>
      <button onClick={showExercises}>View Exercises</button>
      <button onClick={showWorkoutForm}>Add Workout</button>
      <div>{workouts}</div>
    </div>
  )
}

export default AddWorkoutPage
