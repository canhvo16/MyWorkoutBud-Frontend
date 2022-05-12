const Goals = ({ goal }) => {
  let daysLeft = goal.duration - goal.daysCompleted

  let completion = goal.completed ? "Congratualtions, goal completed!" : `Keep going, you have ${daysLeft} more to go!`

  return (
    <div>
      <h2>{goal.name}</h2>
      <p>{goal.description}</p>
      <p>Duration: {goal.duration} days</p>
      <p>Days Completed: {goal.daysCompleted}</p>
      <p>{completion}</p>
    </div>
  )
}

export default Goals