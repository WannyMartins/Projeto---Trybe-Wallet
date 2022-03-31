import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailStore } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ emailStore }</p>
        <p data-testid="total-field">gastos: 0</p>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  emailStore: state.user.email,
});

Header.propTypes = {
  emailStore: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
