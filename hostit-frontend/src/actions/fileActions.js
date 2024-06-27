import axios from 'axios';
 
export const uploadFile = (file) => async (dispatch) => {
    const formData = new FormData();
    formData.append('file', file);
 
    try {
        const res = await axios.post('/api/files/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-auth-token': localStorage.getItem('token'),
            },
        });
 
        dispatch({
            type: 'UPLOAD_SUCCESS',
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: 'UPLOAD_FAIL',
            payload: err.response.data,
        });
    }
};