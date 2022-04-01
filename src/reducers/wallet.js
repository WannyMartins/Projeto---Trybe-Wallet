import { REQUEST_API, RESPONSE_API } from '../actions';

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
      currencies: Object.keys(action.data).filter((element) => element !== 'USDT'),
    };
  default:
    return state;
  }
};

export default wallet;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
