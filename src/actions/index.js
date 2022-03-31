// Coloque aqui suas actions

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const RECEIVE_CURRENCY_SUCESS = 'RECEIVE_CURRENCY_SUCESS';
export const RECEIVE_CURRENCY_FAILURE = 'RECEIVE_CURRENCY_FAILURE';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

// export const saveCurrency = () => ({
//   type: SAVE_CURRENCY,
//   currencies: [],
//   expenses: [],
// });

export const receiveCurrencySucess = (currency) => ({
  type: RECEIVE_CURRENCY_SUCESS,
  currencies: currency,
  expenses: [],
});

export const receiveCurrencyFailure = (error) => ({
  type: RECEIVE_CURRENCY_FAILURE,
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
