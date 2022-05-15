import ExerciseLog from "./ExerciseLog"
import { GetUserExerciseLogs } from "../services/User"
import { useEffect, useState } from "react"

const WorkoutLog = ({ workoutLog, destroyWorkoutLog }) => {
  const [exerciseLogs, setExerciseLogs] = useState(null)

  const getExerciseLogs = async () => {
    const eLogs = await GetUserExerciseLogs(workoutLog.id)
    setExerciseLogs(eLogs)
  }
  
  let logs = exerciseLogs?.map(exerciseLog => <ExerciseLog key={exerciseLog.id} exerciseLog={exerciseLog}/>)

  let date = workoutLog.date.slice(0, 10)

  useEffect(() => {
    if (workoutLog) {
      getExerciseLogs()
    }
  }, [workoutLog])

  return (
    <div className="goal-container workoutLog">
      <p className="name">{date}</p>
      <h2 className="name">{workoutLog.name}</h2>
      <p className="name">{workoutLog.notes}</p>
      <div className="exerciseLogs">
        {logs}
      </div>
      <button className="editButton delete" onClick={() => destroyWorkoutLog(workoutLog.id)}>Delete</button>
    </div>
  )
}

export default WorkoutLog