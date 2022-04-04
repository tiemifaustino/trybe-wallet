// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  FILTERED_EXPENSES, RECEIVE_CURR_FAILURE,
  RECEIVE_CURR_SUCESS, SAVE_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURR_SUCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case RECEIVE_CURR_FAILURE:
    return {
      ...state,
      error: action.error,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case FILTERED_EXPENSES:
    return {
      ...state,
      expenses: action.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
