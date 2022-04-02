// import PropTypes from 'prop-types'
import React, { Component } from 'react';

class TableDespesas extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
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
      </table>
    );
  }
}

// referencia para tag <th> ....... https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role

export default TableDespesas;
