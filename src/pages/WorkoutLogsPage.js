import WorkoutLog from '../components/WorkoutLog'

const WorkoutLogsPage = ({ workoutLogs }) => {
  let logs = workoutLogs?.map((workoutLog) => (
    <WorkoutLog key={workoutLog.id} workoutLog={workoutLog} />
  ))

  return <div>{logs}</div>
}

export default WorkoutLogsPage
