const PasswordEditor = ({ passwordEditor, onChangePassword, onSubmitPassword }) => {
  return (
    <div>
      <form onSubmit={onSubmitPassword}>
        <h3>Email</h3>
        <input 
          type="text" 
          name="email" 
          placeholder="Email" 
          value={passwordEditor.email} 
          onChange={onChangePassword}
        />
        <h3>Old Password</h3>
        <input type="password" 
          name="oldPassword" 
          placeholder="Old Password" 
          value={passwordEditor.oldPassword} 
          onChange={onChangePassword} 
        />
        <h3>New Password</h3>
        <input type="password"  
          name="newPassword" 
          placeholder="New Password" 
          value={passwordEditor.newPassword} 
          onChange={onChangePassword}
        />
        <button>CHANGE PASSWORD</button>
      </form>
    </div>
  )
}

export default PasswordEditor