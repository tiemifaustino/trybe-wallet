import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { userEmail } = this.props;

    return (
      <div>
        <h2>TrybeWallet</h2>
        <p data-testid="email-field">{ userEmail }</p>
        <div>
          <span>Despesa total: R$</span>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">
            {' '}
            BRL
          </span>
        </div>

      </div>
    );
  }
}

Header.propTypes = ({
  userEmail: PropTypes.string,
}).isRequire;

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
