const MuscleGroupCard = ({ muscle, showExerciseCards }) => {
  return (
    <button className="loginButton" onClick={() => showExerciseCards(muscle.id)}>{muscle.name}</button>
  )
}

export default MuscleGroupCard