import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchApi, getExchangesRates } from '../actions';
import Header from '../components/Header';
import TableDespesas from '../components/TableDespesas';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { currenciesApi } = this.props;
    currenciesApi();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClickSubmit = async (event) => {
    event.preventDefault();
    const { expensesDispatch } = this.props;
    expensesDispatch(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <div>
        <Header />
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="text"
              name="value"
              id="value"
              data-testid="value-input"
              onChange={ this.handleChange }
              value={ value }
              placeholder="Adicione uma Despesa"
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              name="description"
              id="description"
              onChange={ this.handleChange }
              value={ description }
              placeholder="Descrição"
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              className={ currency }
              onChange={ this.handleChange }
            >
              { currencies.map((currencie) => (
                <option
                  value={ currencie }
                  key={ currencie }
                >
                  { currencie }
                </option>))}
            </select>
          </label>
          <label htmlFor="method">
            Método de Pagamento:
            <select
              name="method"
              id="method"
              className={ method }
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              name="tag"
              id="tag"
              className={ tag }
              onChange={ this.handleChange }
              data-testid="tag-input"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Saúde">Saúde</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.handleClickSubmit }
          >
            Adicionar Despesas
          </button>
        </form>
        <TableDespesas />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currenciesApi: () => dispatch(fetchApi()),
  expensesDispatch: (expense) => dispatch(getExchangesRates(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  currenciesApi: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expensesDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
