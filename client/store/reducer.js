const initialState = {
    allUsers: [
        {
            userId: '6016fc14885fda4ce8a81dfc',
            name: 'Alistair',
            online: false
        },
        {
            userId: '6016fd542eb90f4d64b4c5e0',
            name: 'Katie',
            online: false
        },
        {
            userId: '6016fd9c19338d4d902a3538',
            name: 'Mum',
            online: false
        },
        {
            userId: '6016fd9c19338d4d902a3539',
            name: 'Dad',
            online: false
        },
        {
            userId: '6016fd9c19338d4d902a353a',
            name: 'Fizz',
            online: false
        },
        {
            userId: '6016fd9d19338d4d902a353b',
            name: 'Abi',
            online: false
        },
    ],
    currentUser: {
        userId: '',
        name: '',
        image: ''
    }
};

export default (state = initialState, action) => {
    if (action.type === "GET_USER_DATA") {
        const userIndex = state.allUsers.findIndex(user => user.userId === action.data.userId);
        const updatedAllUsers = state.allUsers.map((user, idx) => {
            if (idx === userIndex) {
                return {
                    ...user,
                    online: true
                };
            } else {
                return user;
            }
        });
        return {
            ...state,
            allUsers: updatedAllUsers,
            currentUser: {
                ...action.data
            }
        };
    }
    if (action.type === "LOG_USER_OUT") {
        const userIndex = state.allUsers.findIndex(user => user.userId === action.userId);
        const updatedAllUsers = state.allUsers.map((user, idx) => {
            if (idx === userIndex) {
                return {
                    ...user,
                    online: false
                };
            } else {
                return user;
            }
        });
        return {
            ...state,
            allUsers: updatedAllUsers,
            currentUser: {}
        };
    }
    return state;
};