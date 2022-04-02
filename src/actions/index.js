export const USER_EMAIL = 'USER_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';
export const SAVE_DATA = 'SAVE_DATA';

export const userEmail = (email) => ({ type: USER_EMAIL, email });
export const requestApi = (data) => ({ type: REQUEST_API, data });
export const responseApi = (data) => ({ type: RESPONSE_API, data });
export const saveData = (expense, exchangeRates) => (
  { type: SAVE_DATA,
    expense: { ...expense, exchangeRates },
  });

// Coloque aqui suas actions

export function fetchApi() {
  return async (dispatch) => {
    try {
      dispatch(requestApi());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
      dispatch(responseApi(currencies));
    } catch (error) {
      return error;
    }
  };
}

export function getExchangesRates(expense) {
  return async (dispatch) => {
    try {
      dispatch(requestApi());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(saveData(expense, data));
    } catch (error) {
      return error;
    }
  };
}
