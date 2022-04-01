import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencyInitials } = this.props;
    getCurrencyInitials();
  }

  render() {
    const { currencies } = this.props;

    return (
      <div>
        <Header />

        <form>
          <label htmlFor="valor">
            Valor:
            <input
              data-testid="value-input"
              type="number"
              name="valor"
              id="valor"
            />
          </label>

          <label htmlFor="moeda">
            Moeda:
            <select
              name="moeda"
              id="moeda"
            >
              {
                currencies.map((currency, index) => (
                  <option key={ index + currency }>{ currency }</option>
                ))
              }
            </select>
          </label>

          <label htmlFor="pagamento">
            Método de pagamento:
            <select
              data-testid="method-input"
              name="pagamento"
              id="pagamento"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="categoria">
            Categoria:
            <select
              data-testid="tag-input"
              name="categoria"
              id="categoria"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>

          <label htmlFor="descricao">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              name="descricao"
              id="descricao"
            />
          </label>

          <button
            type="submit"
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
  currencies: PropTypes.string,
}).isRequire;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyInitials: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
