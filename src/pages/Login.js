import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateInputs);
  }

  validateInputs = () => {
    const emailREGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const { email, password } = this.state;
    const SIX = 6;
    if (emailREGEX.test(email) && password.length >= SIX) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { history, saveEmailLogin } = this.props;

    saveEmailLogin(email);
    history.push('/carteira');
  }

  render() {
    const { isButtonDisabled, password, email } = this.state;

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={ this.submitHandler }>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={ this.inputHandler }
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              id="password"
              value={ password }
              onChange={ this.inputHandler }
            />
          </label>

          <button
            type="submit"
            disabled={ isButtonDisabled }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmailLogin: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = ({
  saveEmailLogin: PropTypes.string,
}).isRequire;

export default connect(null, mapDispatchToProps)(Login);

/* Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test */
