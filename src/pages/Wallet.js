import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies, fetchRates } from '../actions';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import GitHub from '../images/github_logo_icon.png';
import LinkedIn from '../images/linkedin.png';
import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      tag: '',
      method: '',
      description: '',
      isButtonDisabled: true,
    };
  }

  componentDidMount() {
    const { getCurrencyInitials } = this.props;
    getCurrencyInitials();
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateInputs);
  }

  validateInputs = () => {
    const { currency, tag, method, value } = this.state;
    if ((currency !== '') && (tag !== '') && (method !== '') && (value !== '')) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { getFetchRates } = this.props;
    const { id, value, currency, tag, method, description } = this.state;

    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));

    const newState = { id, value, currency, tag, method, description };

    getFetchRates(newState);

    this.setState({
      value: '',
      currency: '',
      tag: '',
      method: '',
      description: '',
      isButtonDisabled: true,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, tag, method, description, isButtonDisabled } = this.state;

    return (
      <>
        <Header />

        <form>
          <label htmlFor="value">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              name="value"
              id="value"
              min="0"
              className="value"
              value={ value }
              onChange={ this.inputHandler }
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              data-testid="currency-input"
              name="currency"
              id="currency"
              value={ currency }
              onChange={ this.inputHandler }
            >
              {
                currencies.map((money, index) => (
                  <option key={ index + money }>{ money }</option>
                ))
              }
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento:
            <select
              data-testid="method-input"
              name="method"
              id="method"
              value={ method }
              onChange={ this.inputHandler }
            >
              <option>Selecione...</option>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria:
            <select
              data-testid="tag-input"
              name="tag"
              id="tag"
              value={ tag }
              onChange={ this.inputHandler }
            >
              <option>Selecione...</option>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              name="description"
              id="description"
              value={ description }
              onChange={ this.inputHandler }
            />
          </label>

          <button
            className={ isButtonDisabled ? 'button--disabled' : 'button--able' }
            type="submit"
            onClick={ this.submitHandler }
            disabled={ isButtonDisabled }
          >
            Adicionar Despesa

          </button>
        </form>

        <ExpenseTable />
        <footer>
          <div>
            Desenvolvido por Tiemi Faustino
            <a href="https://github.com/tiemifaustino">
              <img src={ GitHub } width="30px" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/tiemifaustino/">
              <img src={ LinkedIn } width="30px" alt="LinkedIn" />
            </a>
          </div>
        </footer>
      </>
    );
  }
}

Wallet.propTypes = ({
  getCurrencyInitials: PropTypes.func,
  getFetchRates: PropTypes.func,
  currencies: PropTypes.string,
}).isRequire;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyInitials: () => dispatch(fetchCurrencies()),
  getFetchRates: (expensesDetails) => dispatch(fetchRates(expensesDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
