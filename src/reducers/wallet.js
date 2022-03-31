// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCY_SUCESS, RECEIVE_CURRENCY_FAILURE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY_SUCESS:
    return {
      ...state,
      currencies: [...state.currencies, action.currencies],
    };
  default:
    return state;
  }
};

export default wallet;
