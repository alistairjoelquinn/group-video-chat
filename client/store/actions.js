import axios from '../src/axios';

export const retrieveUserData = () => {
    return async dispatch => {
        const { data } = await axios.get('/get-user-data');
        dispatch({
            type: "GET_USER_DATA",
            data
        });
    };
};