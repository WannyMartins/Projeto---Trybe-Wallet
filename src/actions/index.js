export const USER_EMAIL = 'USER_EMAIL';
export const REQUEST_API = 'REQUEST_API';
export const RESPONSE_API = 'RESPONSE_API';

export const userEmail = (email) => ({ type: USER_EMAIL, email });
export const requestApi = (data) => ({ type: REQUEST_API, data });
export const responseApi = (data) => ({ type: RESPONSE_API, data });

// Coloque aqui suas actions

export function fetchApi() {
  return async (dispatch) => {
    try {
      dispatch(requestApi());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(responseApi(data));
    } catch (error) {
      return error;
    }
  };
}
