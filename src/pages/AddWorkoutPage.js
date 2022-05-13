import Exercise from '../components/Exercise'

const AddWorkoutPage = ({
  viewExercises,
  showExercises,
  workoutForm,
  showWorkoutForm,
  exercises,
  chestExercises,
  backExercises,
  legExercises,
  coreExercises,
  armExercises,
  shoulderExercises,
  fullBodyExercises,
  muscleGroup,
  chooseMuscleGroup
}) => {
  let exercisegroup

  if (muscleGroup === 'All Exercises') {
    exercisegroup = exercises.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Chest') {
    exercisegroup = chestExercises.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Back') {
    exercisegroup = backExercises.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Legs') {
    exercisegroup = legExercises.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Core/Abs') {
    exercisegroup = coreExercises.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Arms') {
    exercisegroup = armExercises.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Shoulders') {
    exercisegroup = shoulderExercises.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Full Body') {
    exercisegroup = fullBodyExercises.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  }

  let workouts = viewExercises ? (
    <div>
      <select value={muscleGroup} onChange={chooseMuscleGroup}>
        <option value="All Exercises">All Exercises</option>
        <option value="Chest">Chest</option>
        <option value="Back">Back</option>
        <option value="Legs">Legs</option>
        <option value="Core/Abs">Core/Abs</option>
        <option value="Arms">Arms</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Full Body">Full Body</option>
      </select>
      <div>{exercisegroup}</div>
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
