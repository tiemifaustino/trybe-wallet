// Coloque aqui suas actions

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const RECEIVE_CURRENCY_SUCESS = 'RECEIVE_CURRENCY_SUCESS';
export const RECEIVE_CURRENCY_FAILURE = 'RECEIVE_CURRENCY_FAILURE';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

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
      const initials = Object.keys(data);
      const filteredArr = initials.filter((money) => money !== 'USDT');

      // const arrayObj = Object.entries(data); // forma um array de arrays com a chave e objeto [ ['USD', {...}], ['CAD', {...}] ]
      // const filteredArr = arrayObj.filter((money) => money[0] !== 'USDT'); // retorna um array como o anterior sem a opçãp 'USDT'
      // const onlyObjects = filteredArr.map((item) => item[1]); // retorna um array só com os objetos [ {...}, {...} ]

      dispatch(receiveCurrencySucess(filteredArr));
    } catch (error) {
      dispatch(receiveCurrencyFailure(error));
    }
  };
}
