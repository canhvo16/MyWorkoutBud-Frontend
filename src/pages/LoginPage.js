const LoginPage = ({ loginBody, onChangeLogin, onSubmitLogin }) => {
  return (
    <div className="login">
      <h1 className="title1">Login</h1>
      <hr />
      <form className="form-container" onSubmit={onSubmitLogin}>
        <div className="form">
          <h3 className="formTitle">Email</h3>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={loginBody.email}
            onChange={onChangeLogin}
          />
          <h3 className="formTitle">Password</h3>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginBody.password}
            onChange={onChangeLogin}
          />
        </div>
        <button className="loginButton" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default LoginPage
