const MuscleGroupCard = ({ muscle, showExerciseCards }) => {
  return (
    <button onClick={() => showExerciseCards(muscle.id)}>{muscle.name}</button>
  )
}

export default MuscleGroupCard