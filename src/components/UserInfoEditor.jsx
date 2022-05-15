const UserInfoEditor = ({ userEditor, onChangeUserInfo, onSubmitUserInfo }) => {
  return (
    <div>
      <form className="form-container" onSubmit={onSubmitUserInfo}>
        <div className="form">
          <h3 className="formTitle">Current Email</h3>
          <input 
            type="text" 
            name="email"
            value={userEditor.email}
            placeholder='Current Email'
            onChange={onChangeUserInfo}
          />
          <h3 className="formTitle">Update Name</h3>
          <input 
            type="text" 
            name="name"
            value={userEditor.name}
            placeholder='New Name'
            onChange={onChangeUserInfo}
          />
          <h3 className="formTitle">Update Photo</h3>
          <input 
            type="text" 
            name="photo"
            value={userEditor.photo}
            placeholder="Photo URL"
            onChange={onChangeUserInfo}
          />
        </div>
        <button className="loginButton">Submit Changes</button>
      </form>
    </div>
  )
}

export default UserInfoEditor