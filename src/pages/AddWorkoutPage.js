import Exercise from '../components/Exercise'
import WorkoutLog from '../components/WorkoutLog'
import MuscleGroupCard from '../components/MuscleGroupCard'
import ExerciseCard from '../components/ExerciseCard'

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
  chooseMuscleGroup,
  workoutLogBody,
  onChangeWorkoutLog,
  onSubmitWorkoutLog,
  currentWorkoutLog,
  allMuscleGroups,
  muscleCards,
  showMuscleCards,
  viewExerciseCards,
  showExerciseCards,
  exerciseCards,
  chooseExercise,
  setLogForm,
  showSetLogForm,
  setLogBody,
  onChangeSetLog,
  onSubmitSetLog,
  finishWorkout
}) => {
  let exercisegroup

  if (muscleGroup === 'All Exercises') {
    exercisegroup = exercises?.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Chest') {
    exercisegroup = chestExercises?.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Back') {
    exercisegroup = backExercises?.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Legs') {
    exercisegroup = legExercises?.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Core/Abs') {
    exercisegroup = coreExercises?.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Arms') {
    exercisegroup = armExercises?.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Shoulders') {
    exercisegroup = shoulderExercises?.map((exercise) => (
      <Exercise exercise={exercise} key={exercise.id} />
    ))
  } else if (muscleGroup === 'Full Body') {
    exercisegroup = fullBodyExercises?.map((exercise) => (
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

  let form = workoutForm ? (
    <div>
      <form onSubmit={onSubmitWorkoutLog}>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          value={workoutLogBody.name}
          onChange={onChangeWorkoutLog}
        />
        <h3>Notes</h3>
        <input
          type="text"
          name="notes"
          value={workoutLogBody.notes}
          onChange={onChangeWorkoutLog}
        />
        <button>Create Workout Log</button>
      </form>
    </div>
  ) : null

  let currentLog = currentWorkoutLog ? (
    <WorkoutLog workoutLog={currentWorkoutLog} />
  ) : null

  let addExercise = currentWorkoutLog ? (
    <div>
      <button onClick={showMuscleCards}>Add Exercise</button>
      <button onClick={showSetLogForm}>Add Set</button>
      <button onClick={finishWorkout}>Finish Workout</button>
    </div>
  ) : null

  let setForm = setLogForm ? (
    <div>
      <form onSubmit={onSubmitSetLog}>
        <h3>Weight/Distance</h3>
        <input
          type="number"
          name="weight"
          value={setLogBody.weight}
          onChange={onChangeSetLog}
        />
        <h3>Metric</h3>
        <input
          type="text"
          name="metric"
          value={setLogBody.metric}
          onChange={onChangeSetLog}
        />
        <h3>Repetitions</h3>
        <input
          type="number"
          name="repetitions"
          value={setLogBody.repetitions}
          onChange={onChangeSetLog}
        />
        <h3>Duration</h3>
        <input
          type="number"
          name="duration"
          value={setLogBody.duration}
          onChange={onChangeSetLog}
        />
        <button>Create Set Log</button>
      </form>
    </div>
  ) : null

  let allMuscleCards = allMuscleGroups
    ? allMuscleGroups.map((muscle) => (
        <MuscleGroupCard
          key={muscle.id}
          muscle={muscle}
          showExerciseCards={showExerciseCards}
        />
      ))
    : null

  let muscles = muscleCards ? allMuscleCards : null

  let eCards = viewExerciseCards
    ? exerciseCards?.map((exerciseCard) => (
        <ExerciseCard
          key={exerciseCard.id}
          exerciseCard={exerciseCard}
          chooseExercise={chooseExercise}
        />
      ))
    : null

  return (
    <div>
      <button onClick={showExercises}>View Exercises</button>
      <button onClick={showWorkoutForm}>Add Workout</button>
      <div>{workouts}</div>
      <div>
        {currentLog}
        {addExercise}
        {setForm}
        {form}
        {muscles}
        <div>{eCards}</div>
      </div>
    </div>
  )
}

export default AddWorkoutPage
