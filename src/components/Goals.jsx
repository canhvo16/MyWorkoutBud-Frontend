const Goals = ({ goal, addDay, minusDay }) => {
  let daysLeft = goal.duration - goal.daysCompleted

  let completion = goal.completed ? "Congratualtions, goal completed!" : `Keep going, you have ${daysLeft} more to go!`

  return (
    <div className="goal-container">
      <h2 className="name">{goal.name}</h2>
      <p className="name">{goal.description}</p>
      <p className="name">Duration: {goal.duration} days</p>
      <p className="name">Days Completed: <button className="goalButton" onClick={() => minusDay(goal.id)}>-</button> {goal.daysCompleted} <button className="goalButton" onClick={() => addDay(goal.id)}>+</button></p>
      <p className="name">{completion}</p>
    </div>
  )
}

export default Goals