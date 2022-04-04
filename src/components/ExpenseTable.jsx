// import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class ExpenseTable extends React.Component {
  render() {
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
            <tr>
              <td>
                Despesa 1
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// ExpenseTable.propTypes = ({
//   userEmail: PropTypes.string,
//   userExpenses: PropTypes.array,
// }).isRequire;

const mapStateToProps = (state) => ({
  userExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
