const RegisterPage = ({ registerBody, onChangeRegister, onSubmitRegister }) => {
  return (
    <div className="login">
      <h1 className="title1">Register</h1>
      <hr />
      <form className="form-container" onSubmit={onSubmitRegister}>
        <div className="form">
          <h3 className="formTitle">Name</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={registerBody.name}
            onChange={onChangeRegister}
          />
          <h3 className="formTitle">Email</h3>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={registerBody.email}
            onChange={onChangeRegister}
          />
          <h3 className="formTitle">Password</h3>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={registerBody.password}
            onChange={onChangeRegister}
          />
          <h3 className="formTitle">Confirm Password</h3>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={registerBody.confirmPassword}
            onChange={onChangeRegister}
          />
        </div>
        <button
          className="loginButton"
          type="submit"
          disabled={
            !registerBody.name ||
            !registerBody.email ||
            !registerBody.password ||
            registerBody.confirmPassword !== registerBody.password
          }
        >
          SIGN UP
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
