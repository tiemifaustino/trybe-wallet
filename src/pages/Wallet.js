import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies, fetchRates } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      currency: '',
      tag: '',
      method: '',
      description: '',
    };
  }

  componentDidMount() {
    const { getCurrencyInitials } = this.props;
    getCurrencyInitials();
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { getFetchRates } = this.props;

    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));

    getFetchRates(this.state);

    this.setState({
      value: '',
      currency: '',
      tag: '',
      method: '',
      description: '',
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, tag, method, description } = this.state;

    return (
      <div>
        <Header />

        <form>
          <label htmlFor="value">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              name="value"
              id="value"
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
            type="submit"
            onClick={ this.submitHandler }
          >
            Adicionar Despesa

          </button>
        </form>
      </div>
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
  getFetchRates: (expenses) => dispatch(fetchRates(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
