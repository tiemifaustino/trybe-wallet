import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencyInitials } = this.props;
    getCurrencyInitials();
  }

  render() {
    return (
      <div>
        <Header />

      </div>
    );
  }
}

Wallet.propTypes = ({
  getCurrencyInitials: PropTypes.func,
}).isRequire;

const mapDispatchToProps = (dispatch) => ({
  getCurrencyInitials: () => dispatch(fetchCurrencies()),
});

export default connect(null, mapDispatchToProps)(Wallet);
