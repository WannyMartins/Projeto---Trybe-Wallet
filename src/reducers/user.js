import { USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: 'wanny@gefda.com',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
// Esse reducer será responsável por tratar as informações da pessoa usuária
