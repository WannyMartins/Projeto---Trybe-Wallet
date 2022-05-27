import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { GiWallet } from 'react-icons/gi';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {
  render() {
    const { emailStore, expenses } = this.props;

    const getValueCurrency = expenses.map((item) => {
      const { currency } = item;
      const currencyValue = parseFloat(item.exchangeRates[currency].ask);
      const valor = parseFloat(item.value) * currencyValue;
      return valor;
    });
    const sumTotal = getValueCurrency.reduce((acc, cur) => {
      const soma = acc + cur;
      return soma;
    },
    0).toFixed(2);

    return (
      <div className="container-header">
        <h1>
          Trybe Wallet
          <GiWallet />
        </h1>
        <div className="dados-valor">
          <p data-testid="email-field">{ emailStore }</p>
          <div className="valor-content">
            <p data-testid="total-field" id="sumTotal" className="valor">
              <span>R$ </span>
              {sumTotal}
              <span data-testid="header-currency-field"> BRL</span>
            </p>
            {/* {clicked ?
               <MdAttachMoney className="icon-money" /> : <MdMoneyOffCsred />} */}

          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailStore: state.user.email,
  expenses: state.wallet.expenses,
});
// const mapDispatchToProps = (dispatch) => ({
//   dispatchSum: (total) => dispatch(subValue(total)),
// });

Header.propTypes = {
  emailStore: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
