import axios from 'axios';

export const createConnection = (data) => (dispatch) => {
    try {
        dispatch({ type: 'CREATE_CONNECTION', payload: data });
    } catch(error) {
        dispatch({ type: 'ERROR_CONNECTION', payload: error });
    }
};

export const breakConnection = (dispatch) => {
    dispatch({ type: 'BREAK_CONNECTION', payload: {} });
};

export const deleyTimeChange = (time) => async(dispatch) => {
    try {
        const result = await axios.post(`http://localhost:4000/${time}`);
        return result;
    } catch(error) {
        dispatch({ type: 'ERROR_CONNECTION', payload: error });
    }
};

// export const stockSymbolChange = (symbol) => (dispatch) => {
//     dispatch({ type: 'STOCK_SYMBOL', payload: symbol });
// };
