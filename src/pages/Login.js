import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>

        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              id="email"
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              id="password"
            />
          </label>

          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
