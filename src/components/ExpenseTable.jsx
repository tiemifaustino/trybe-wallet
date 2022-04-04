import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class ExpenseTable extends React.Component {
  render() {
    const { userExpenses } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                Descrição
              </th>
              <th>
                Tag
              </th>
              <th>
                Método de pagamento
              </th>
              <th>
                Valor
              </th>
              <th>
                Moeda
              </th>
              <th>
                Câmbio utilizado
              </th>
              <th>
                Valor convertido
              </th>
              <th>
                Moeda de conversão
              </th>
              <th>
                Editar/Excluir
              </th>
            </tr>
          </thead>

          <tbody>
            {
              userExpenses.map((
                { id, description, tag, method, value, exchangeRates, currency },
              ) => (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ Number(value).toFixed(2) }</td>
                  <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                  <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                  <td>{ (exchangeRates[currency].ask * value).toFixed(2) }</td>
                  <td>Real</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

ExpenseTable.propTypes = ({
  userExpenses: PropTypes.array,
}).isRequire;

const mapStateToProps = (state) => ({
  userExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
