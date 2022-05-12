const UserInfoEditor = ({ userEditor, onChangeUserInfo, onSubmitUserInfo }) => {
  return (
    <div>
      <form onSubmit={onSubmitUserInfo}>
        <h3>Current Email</h3>
        <input 
          type="text" 
          name="email"
          value={userEditor.email}
          placeholder='Current Email'
          onChange={onChangeUserInfo}
        />
        <h3>Update Name</h3>
        <input 
          type="text" 
          name="name"
          value={userEditor.name}
          placeholder='New Name'
          onChange={onChangeUserInfo}
        />
        <h3>Update Photo</h3>
        <input 
          type="text" 
          name="photo"
          value={userEditor.photo}
          placeholder="Photo URL"
          onChange={onChangeUserInfo}
        />
        <button>Submit Changes</button>
      </form>
    </div>
  )
}

export default UserInfoEditor