import WorkoutLog from '../components/WorkoutLog'

const WorkoutLogsPage = ({ workoutLogs, destroyWorkoutLog }) => {
  let logs = workoutLogs?.map((workoutLog) => (
    <WorkoutLog
      key={workoutLog.id}
      workoutLog={workoutLog}
      destroyWorkoutLog={destroyWorkoutLog}
    />
  ))

  return <div className="workoutLogs-container">{logs}</div>
}

export default WorkoutLogsPage
