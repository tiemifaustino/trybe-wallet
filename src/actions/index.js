// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const RECEIVE_CURR_SUCESS = 'RECEIVE_CURR_SUCESS';
export const RECEIVE_CURR_FAILURE = 'RECEIVE_CURR_FAILURE';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const saveExpenses = (expenses, exchangeRates) => ({
  type: SAVE_EXPENSES,
  expenses: { ...expenses, exchangeRates },
});

export const receiveCurrencySucess = (currency) => ({
  type: RECEIVE_CURR_SUCESS,
  currencies: Object.keys(currency).filter((money) => money !== 'USDT'),
});

export const receiveCurrencyFailure = (error) => ({
  type: RECEIVE_CURR_FAILURE,
  error,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();

      dispatch(receiveCurrencySucess(data));
    } catch (error) {
      dispatch(receiveCurrencyFailure(error));
    }
  };
}

export function fetchRates(expenses) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();

      dispatch(saveExpenses(expenses, data));
    } catch (error) {
      dispatch(receiveCurrencyFailure(error));
    }
  };
}
