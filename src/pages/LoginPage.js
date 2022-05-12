const LoginPage = ({ loginBody, onChangeLogin, onSubmitLogin }) => {
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <form onSubmit={onSubmitLogin}>
        <div className="form">
          <h3>Email</h3>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={loginBody.email}
            onChange={onChangeLogin}
          />
          <h3>Password</h3>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginBody.password}
            onChange={onChangeLogin}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  )
}

export default LoginPage
