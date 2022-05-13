import ExerciseLog from "./ExerciseLog"
import { GetUserExerciseLogs } from "../services/User"
import { useEffect, useState } from "react"

const WorkoutLog = ({ workoutLog }) => {
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
  }, [])

  return (
    <div>
      <p>{date}</p>
      <h2>{workoutLog.name}</h2>
      <p>{workoutLog.notes}</p>
      <div>
        {logs}
      </div>
    </div>
  )
}

export default WorkoutLog