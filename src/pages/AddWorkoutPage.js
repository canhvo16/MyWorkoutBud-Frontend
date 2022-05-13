import Exercise from '../components/Exercise'

const AddWorkoutPage = ({
  viewExercises,
  showExercises,
  workoutForm,
  showWorkoutForm
}) => {
  let exercises = viewExercises ? <Exercise /> : null
  return (
    <div>
      <button>View Exercises</button>
      <button>Add Workout</button>
      <div>{exercises}</div>
    </div>
  )
}

export default AddWorkoutPage
