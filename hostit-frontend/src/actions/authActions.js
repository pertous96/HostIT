import axios from 'axios';
 
export const register = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/auth/register', userData);
        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'REGISTER_FAIL',
            payload: error.response.data,
        });
    }
};