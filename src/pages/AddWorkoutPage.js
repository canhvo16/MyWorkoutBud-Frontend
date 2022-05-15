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
    <div className="goal-container">
      <select
        className="dropDown"
        value={muscleGroup}
        onChange={chooseMuscleGroup}
      >
        <option value="All Exercises">All Exercises</option>
        <option value="Chest">Chest</option>
        <option value="Back">Back</option>
        <option value="Legs">Legs</option>
        <option value="Core/Abs">Core/Abs</option>
        <option value="Arms">Arms</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Full Body">Full Body</option>
      </select>
      <div className="exercise-box">{exercisegroup}</div>
    </div>
  ) : null

  let form = workoutForm ? (
    <div>
      <form className="form-container" onSubmit={onSubmitWorkoutLog}>
        <div className="form">
          <h3 className="formTitle">Name</h3>
          <input
            type="text"
            name="name"
            value={workoutLogBody.name}
            onChange={onChangeWorkoutLog}
          />
          <h3 className="formTitle">Notes</h3>
          <input
            type="text"
            name="notes"
            value={workoutLogBody.notes}
            onChange={onChangeWorkoutLog}
          />
        </div>
        <button className="loginButton">Create Workout Log</button>
      </form>
    </div>
  ) : null

  let currentLog = currentWorkoutLog ? (
    <WorkoutLog workoutLog={currentWorkoutLog} />
  ) : null

  let addExercise = currentWorkoutLog ? (
    <div className="buttons">
      <button className="loginButton" onClick={showMuscleCards}>
        Add Exercise
      </button>
      <button className="loginButton" onClick={showSetLogForm}>
        Add Set
      </button>
      <button className="loginButton" onClick={finishWorkout}>
        Finish Workout
      </button>
    </div>
  ) : null

  let setForm = setLogForm ? (
    <div>
      <form className="form-container" onSubmit={onSubmitSetLog}>
        <div className="form">
          <h3 className="formTitle">Weight/Distance</h3>
          <input
            type="number"
            name="weight"
            value={setLogBody.weight}
            onChange={onChangeSetLog}
          />
          <h3 className="formTitle">Metric</h3>
          <input
            type="text"
            name="metric"
            value={setLogBody.metric}
            onChange={onChangeSetLog}
          />
          <h3 className="formTitle">Repetitions</h3>
          <input
            type="number"
            name="repetitions"
            value={setLogBody.repetitions}
            onChange={onChangeSetLog}
          />
          <h3 className="formTitle">Duration</h3>
          <input
            type="number"
            name="duration"
            value={setLogBody.duration}
            onChange={onChangeSetLog}
          />
        </div>
        <button className="loginButton">Create Set Log</button>
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
    <div className="addWorkout">
      <div className="button-box">
        <button className="startButton" onClick={showExercises}>
          View Exercises
        </button>
        <button className="startButton" onClick={showWorkoutForm}>
          Add Workout
        </button>
      </div>
      <div>{workouts}</div>
      <div>
        {form}
        {currentLog}
        {addExercise}
        <div className="card-container">
          {muscles}
          {eCards}
        </div>
        {setForm}
      </div>
    </div>
  )
}

export default AddWorkoutPage
