const CreateGoal = ({ goalBody, onChangeGoal, onSubmitGoal }) => {
  return (
    <div>
      <form className="form-container" onSubmit={onSubmitGoal}>
        <div className="form">
          <h3 className="formTitle">Name</h3>
          <input 
            type="text"
            name="name"
            placeholder="Name your goal!" 
            value={goalBody.name}
            onChange={onChangeGoal}
          />
          <h3 className="formTitle">Description</h3>
          <input 
            type="text" 
            name="description"
            placeholder="What do you have to do...?" 
            value={goalBody.description}
            onChange={onChangeGoal}
          />
          <h3 className="formTitle">Duration</h3>
          <input 
            type="number" 
            name="duration"
            placeholder="How many days do you want to complete this for?" 
            value={goalBody.duration}
            onChange={onChangeGoal}
          />
        </div>
        <button className="loginButton">Create Goal</button>
      </form>
    </div>
  )
}

export default CreateGoal