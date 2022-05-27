import PropTypes from 'prop-types';
import React from 'react';
import { GiWallet } from 'react-icons/gi';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userEmail } from '../actions';
import './login.css';
// GiWallet

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  isDisabled = () => {
    const { password, email } = this.state;
    const minLength = 6;
    const passwordValid = password.length < minLength;
    const emailValid = !email.includes('@' && '.com');
    if (!emailValid && !passwordValid) {
      return false;
    }
    return true;
  };

  render() {
    const { email, password } = this.state;
    const { emailDispatch } = this.props;
    return (
      <div className="container">
        <form className="form">
          <h1>
            Trybe Wallet
            <GiWallet />
          </h1>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Digite seu email..."
              onChange={ (event) => this.setState({ email: event.target.value }) }
              value={ email }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              placeholder="Digite sua Senha..."
              name="password"
              onChange={ (event) => this.setState({ password: event.target.value }) }
              value={ password }
              data-testid="password-input"
            />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              onChange={ this.handleChange }
              disabled={ this.isDisabled() }
              onClick={ () => emailDispatch(email) }
              className="button-login"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (value) => dispatch(userEmail(value)),
});

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
