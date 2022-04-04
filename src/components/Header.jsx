import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends React.Component {
  render() {
    const { userEmail, userExpenses } = this.props;

    let changes = 0;

    userExpenses.forEach((expense) => {
      const { exchangeRates, currency, value } = expense;
      const conversion = Number(exchangeRates[currency].ask) * value;
      changes += conversion;
    });
    // Quando uma propriedade de um objeto é acessado com [], conseguimos acessar o valor dessa propriedade colocando o nome dela (em string) ou acessando com uma variável que no caso é a variável "currency" (Possui as siglas das moedas)
    // objeto[variavelQueContemONomeDaPropriedade]

    return (
      <header>
        <h2>TrybeWallet</h2>
        <div className="container-user">
          <span data-testid="email-field">{ userEmail }</span>
          <span className="user-expense ">Despesa total R$</span>
          <span data-testid="total-field">
            { +(parseFloat(changes.toFixed(2))) }
          </span>
          <span data-testid="header-currency-field">
            {' '}
            BRL
          </span>
        </div>

      </header>
    );
  }
}

Header.propTypes = ({
  userEmail: PropTypes.string,
  userExpenses: PropTypes.array,
}).isRequire;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

/* Source:
Percorrer um objeto:

https://www.horadecodar.com.br/2021/02/09/como-percorrer-um-objeto-em-javascript/

https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/javascript-es6-fluxo-de-excecao-e-objetos/d9bffb5f-e6b0-4807-9b64-30741a3d3d70/conteudos/aaffdb78-a36f-48ae-bbc9-e86ab248ae5e/objetos-parte-i-adicionando-novas-chaves-keys/6496a107-7a96-428b-b195-0c11dd30721d?use_case=side_bar
*/
