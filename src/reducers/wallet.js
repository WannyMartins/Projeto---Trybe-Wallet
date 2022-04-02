import { REQUEST_API, RESPONSE_API, SAVE_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isFetching: true,
    };
  case RESPONSE_API:
    return {
      ...state,
      isFetching: false,
      currencies: action.data,
    };
  case SAVE_DATA:
  {
    const expLength = state.expenses.length;
    const expenseObj = {
      ...action.expense,
      id: !expLength ? 0 : expLength };
    return {
      ...state,
      expenses: [...state.expenses, expenseObj],
    };
  }
  default:
    return state;
  }
};

export default wallet;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
