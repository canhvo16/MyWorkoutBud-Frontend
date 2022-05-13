import SetLog from "./SetLog"
import { GetUserSetLogs, GetUserExercise, GetMuscleGroup } from "../services/User"
import { useEffect, useState } from "react"

const ExerciseLog = ({ exerciseLog }) => {
  const [setLogs, setSetLogs] = useState(null)
  const [exercise, setExercise] = useState(null)
  const [muscleGroup, setMuscleGroup] = useState(null)

  const getSetLogs = async () => {
    const sLogs = await GetUserSetLogs(exerciseLog.id)
    setSetLogs(sLogs)
  }

  const getExercise = async () => {
    const exercise = await GetUserExercise(exerciseLog.exerciseId)
    setExercise(exercise)
    const muscleGroup = await GetMuscleGroup(exercise.muscleGroupId)
    setMuscleGroup(muscleGroup)
  }

  let logs = setLogs?.map(setLog => <SetLog key={setLog.id} setLog={setLog} />)

  let exerciseName 
  let muscleName

  if (exercise) {
    exerciseName = exercise.name
  }
  if(muscleGroup) {
    muscleName = muscleGroup.name
  }

  useEffect(() => {
    if (exerciseLog) {
      getSetLogs()
      getExercise()
    }
  }, [])
  return (
    <div>
      <h3>{exerciseName}</h3>
      <p>{muscleName}</p>
      <div>{logs}</div>
    </div>
  )
}

export default ExerciseLog