export const retrieveUserData = () => {
    return async dispatch => {
        const res = await fetch('/get-user-data');
        const { data } = await res.json();
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

export const getMessages = msgs => {
    return async dispatch => {
        dispatch({
            type: "GET_MESSAGES",
            msgs
        });
    };
};

export const chatMessage = msg => {
    return async dispatch => {
        dispatch({
            type: "CHAT_MESSAGE",
            msg
        });
    };
};

export const newUser = userId => {
    return async dispatch => {
        dispatch({
            type: "NEW_USER",
            userId
        });
    };
};

export const userLoggedOff = userId => {
    return async dispatch => {
        dispatch({
            type: "USER_LOGGED_OFF",
            userId
        });
    };
};

export const currentlyOnline = onlineUsers => {
    return async dispatch => {
        dispatch({
            type: "CURRENTLY_ONLINE",
            onlineUsers
        });
    };
};