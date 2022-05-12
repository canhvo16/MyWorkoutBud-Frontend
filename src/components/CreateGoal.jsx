const CreateGoal = ({ goalBody, onChangeGoal, onSubmitGoal }) => {
  return (
    <div>
      <form onSubmit={onSubmitGoal}>
        <h3>Name</h3>
        <input 
          type="text"
          name="name"
          placeholder="Name your goal!" 
          value={goalBody.name}
          onChange={onChangeGoal}
        />
        <h3>Description</h3>
        <input 
          type="text" 
          name="description"
          placeholder="What do you have to do...?" 
          value={goalBody.description}
          onChange={onChangeGoal}
        />
        <h3>Duration</h3>
        <input 
          type="number" 
          name="duration"
          placeholder="How many days do you want to complete this for?" 
          value={goalBody.duration}
          onChange={onChangeGoal}
        />
        <button>Create Goal</button>
      </form>
    </div>
  )
}

export default CreateGoal