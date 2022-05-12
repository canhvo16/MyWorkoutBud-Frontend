const Goals = ({ goal, addDay, minusDay }) => {
  let daysLeft = goal.duration - goal.daysCompleted

  let completion = goal.completed ? "Congratualtions, goal completed!" : `Keep going, you have ${daysLeft} more to go!`

  return (
    <div>
      <h2>{goal.name}</h2>
      <p>{goal.description}</p>
      <p>Duration: {goal.duration} days</p>
      <p>Days Completed: <button onClick={() => minusDay(goal.id)}>-</button> {goal.daysCompleted} <button onClick={() => addDay(goal.id)}>+</button></p>
      <p>{completion}</p>
    </div>
  )
}

export default Goals