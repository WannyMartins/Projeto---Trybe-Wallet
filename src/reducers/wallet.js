import {
  DELETE_DESPESA, EDITE_DESPESA, REQUEST_API,
  RESPONSE_API, SAVE_DATA,
} from '../actions';

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
  case DELETE_DESPESA:
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.id),
    };
  case EDITE_DESPESA:
    return {
      ...state,
      expenses: state.expenses.find((item) => item.id === action.id),
    };

  default:
    return state;
  }
};

export default wallet;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
