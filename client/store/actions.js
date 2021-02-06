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

export const logUserOut = () => {
    return async (dispatch, getState) => {
        const { currentUser } = getState();
        dispatch({
            type: "LOG_USER_OUT",
            userId: currentUser.userId
        });
    };
};