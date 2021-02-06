import axios from './axios';

export const retrieveUserData = () => {
    console.log('loggy');
    return async dispatch => {
        const { data } = await axios.get('/get-user-data');
        console.log('data on page load: ', data);
        dispatch({
            type: "GET_USER_DATA",
            data
        });
    };
};