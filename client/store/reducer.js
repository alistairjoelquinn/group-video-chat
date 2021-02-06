const initialState = {
    userId: '',
    name: '',
    image: ''
};

export default (state = initialState, action) => {
    if (action.type === "GET_USER_DATA") {
        return {
            ...action.data
        };
    }
    return state;
};