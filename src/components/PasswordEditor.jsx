const PasswordEditor = () => {
  return (
    <div>
      <form>
        <h3>Email</h3>
        <input type="text" />
        <h3>Old Password</h3>
        <input type="password" />
        <h3>New Password</h3>
        <input type="password" />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default PasswordEditor