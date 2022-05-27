import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteDespesa, editeDespesa } from '../actions';

class TableDespesas extends Component {
  render() {
    const { expenses, dispatchDelete, dispatchEdite } = this.props;

    const getValueCurrency = expenses.map((item) => {
      const { currency } = item;
      const currencyValue = item.exchangeRates[currency].ask;
      return parseFloat(currencyValue);
    });

    const getNameCurrency = expenses.map((item) => {
      const { currency } = item;
      const nameCurrency = item.exchangeRates[currency].name;
      const splitName = nameCurrency.split('/', 1);// aqui localiza o / divide em duas strings e retorna somente a 1 === ref >>>https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
      return splitName;
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Índice</th>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((item, index) => (
              <tr key={ item.id }>
                <td>{item.id + 1}</td>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{parseFloat(item.value).toFixed(2)}</td>
                <td>{getNameCurrency[index]}</td>
                <td>{getValueCurrency[index].toFixed(2)}</td>
                <td id="valueConv">
                  {(item.value * getValueCurrency[index]).toFixed(2)}

                </td>
                {/* sintaxe retirada do site do alura */}
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => dispatchEdite(item.id) }
                  >
                    Editar

                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => dispatchDelete(item.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDelete: (id) => dispatch(deleteDespesa(id)),
  dispatchEdite: (id) => dispatch(editeDespesa(id)),
});

TableDespesas.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchDelete: PropTypes.func.isRequired,
  dispatchEdite: PropTypes.func.isRequired,
};

// referencia para tag <th> ....... https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role

export default connect(mapStateToProps, mapDispatchToProps)(TableDespesas);
