import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  render() {
    const { currencies } = this.props;

    return (
      <div>
        <Header />
        <form>
          <label htmlFor="Valor">
            Valor:
            <input
              type="text"
              data-testid="value-input"
              placeholder="Adicione uma Despesa"
            />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              placeholder="Descrição"
            />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda" id="moeda">
              <option value="" key={ currencies }>{ currencies }</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de Pagamento:
            <select name="pagamento" id="pagamento" data-testid="method-input">
              <option value="dinheiro">Dinheiro</option>
              <option value="cartaoDebito">Cartão de Débito</option>
              <option value="cartaoCredito">Cartão de Crédito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select name="tag" id="tag" data-testid="method-input">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="saude">Saúde</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchApi()),
});

Wallet.propTypes = {
  currencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
