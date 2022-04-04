import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';
import ImageLogo from '../images/wallet_image.png';
import './Login.css';

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
      <div className="container-login">
        <img src={ ImageLogo } alt="wallet" width="150px" />
        <h1>Trybewallet</h1>

        <form className="container-login__inputs" onSubmit={ this.submitHandler }>

          <input
            data-testid="email-input"
            type="email"
            name="email"
            id="email"
            value={ email }
            onChange={ this.inputHandler }
            placeholder="Email"
          />

          <input
            data-testid="password-input"
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ this.inputHandler }
            placeholder="Senha"
          />

          <button
            className={ isButtonDisabled ? 'button--disabled' : 'button--able' }
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

/* Source:
Método RegExp.prototype.test(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Validação de email: https://regexr.com/3e48o
*/
