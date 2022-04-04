// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const RECEIVE_CURR_SUCESS = 'RECEIVE_CURR_SUCESS';
export const RECEIVE_CURR_FAILURE = 'RECEIVE_CURR_FAILURE';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

// A chave expenses é um array de objetos
// O array é definido no estado inicial do reducer "wallet"
// Com o spread operator, o objeto recebido da API (exchangeRates) é adicionado no objeto junto ao expensesDetails que são as informações salvas no estado do Componente Wallet:
// ( id, value, currency, tag, method, description )
export const saveExpenses = (expensesDetails, exchangeRates) => ({
  type: SAVE_EXPENSES,
  expenses: { ...expensesDetails, exchangeRates },
});

export const receiveCurrencySucess = (currencies) => ({
  type: RECEIVE_CURR_SUCESS,
  currencies,
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
      const initials = Object.keys(data);
      const filteredArr = initials.filter((money) => money !== 'USDT');

      dispatch(receiveCurrencySucess(filteredArr));
    } catch (error) {
      dispatch(receiveCurrencyFailure(error));
    }
  };
}

export function fetchRates(expensesDetails) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const exchangeRates = await response.json();

      dispatch(saveExpenses(expensesDetails, exchangeRates));
    } catch (error) {
      dispatch(receiveCurrencyFailure(error));
    }
  };
}
