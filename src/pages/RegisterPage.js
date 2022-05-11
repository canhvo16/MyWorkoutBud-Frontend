const RegisterPage = ({ registerBody, onChangeRegister, onSubmitRegister }) => {
  return (
    <div>
      <h1>Register</h1>
      <hr />
      <form onSubmit={onSubmitRegister}>
        <div>
          <h3>Name</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={registerBody.name}
            onChange={onChangeRegister}
          />
          <h3>Email</h3>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={registerBody.email}
            onChange={onChangeRegister}
          />
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={registerBody.password}
            onChange={onChangeRegister}
          />
          <h3>Confirm Password</h3>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={registerBody.confirmPassword}
            onChange={onChangeRegister}
          />
        </div>
        <button
          type="submit"
          disabled={
            !registerBody.name ||
            !registerBody.email ||
            !registerBody.password ||
            registerBody.confirmPassword !== registerBody.password
          }
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
