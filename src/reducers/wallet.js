// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCY_FAILURE, RECEIVE_CURRENCY_SUCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY_SUCESS:
    return {
      ...state,
      currencies: action.currencies,
      expenses: action.expenses,
    };
  case RECEIVE_CURRENCY_FAILURE:
    return {
      ...state,
      error: action.cerror,
    };
  default:
    return state;
  }
};

export default wallet;
