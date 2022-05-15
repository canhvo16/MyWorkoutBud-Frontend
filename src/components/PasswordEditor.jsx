const PasswordEditor = ({ passwordEditor, onChangePassword, onSubmitPassword }) => {
  return (
    <div>
      <form className="form-container" onSubmit={onSubmitPassword}>
        <div className="form">
          <h3 className="formTitle">Email</h3>
          <input 
            type="text" 
            name="email" 
            placeholder="Email" 
            value={passwordEditor.email} 
            onChange={onChangePassword}
          />
          <h3 className="formTitle">Old Password</h3>
          <input type="password" 
            name="oldPassword" 
            placeholder="Old Password" 
            value={passwordEditor.oldPassword} 
            onChange={onChangePassword} 
          />
          <h3 className="formTitle">New Password</h3>
          <input type="password"  
            name="newPassword" 
            placeholder="New Password" 
            value={passwordEditor.newPassword} 
            onChange={onChangePassword}
          />
        </div>
        <button className="loginButton">CHANGE PASSWORD</button>
      </form>
    </div>
  )
}

export default PasswordEditor