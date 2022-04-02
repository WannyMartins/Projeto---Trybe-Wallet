import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailStore, expenses } = this.props;

    const getValueCurrency = expenses.map((item) => {
      const { currency } = item;
      const currencyValue = parseFloat(item.exchangeRates[currency].ask);
      const valor = parseFloat(item.value) * currencyValue;
      return valor;
    });
    const sumTotal = getValueCurrency.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    return (
      <div>
        <p data-testid="email-field">{ emailStore }</p>
        <p data-testid="total-field">{sumTotal}</p>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailStore: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  emailStore: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
