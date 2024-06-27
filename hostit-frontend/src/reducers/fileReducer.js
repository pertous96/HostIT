const initialState = {
    files: [],
    loading: true,
};
 
const fileReducer = (state = initialState, action) => {
    const { type, payload } = action;
 
    switch (type) {
        case 'GET_FILES':
            return {
                ...state,
                files: payload,
                loading: false,
            };
        case 'UPLOAD_FILE':
            return {
                ...state,
                files: [payload, ...state.files],
                loading: false,
            };
        case 'DELETE_FILE':
            return {
                ...state,
                files: state.files.filter(file => file._id !== payload),
                loading: false,
            };
        default:
            return state;
    }
};
 
export default fileReducer;