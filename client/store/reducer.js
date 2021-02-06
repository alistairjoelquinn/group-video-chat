const initialState = {
    allUsers: [
        {
            userId: '6016fc14885fda4ce8a81dfc',
            name: 'Alistair',
            online: false,
            image: '/user.png'
        },
        {
            userId: '6016fd542eb90f4d64b4c5e0',
            name: 'Katie',
            online: false,
            image: '/user.png'
        },
        {
            userId: '6016fd9c19338d4d902a3538',
            name: 'Mum',
            online: false,
            image: '/user.png'
        },
        {
            userId: '6016fd9c19338d4d902a3539',
            name: 'Dad',
            online: false,
            image: '/user.png'
        },
        {
            userId: '6016fd9c19338d4d902a353a',
            name: 'Fizz',
            online: false,
            image: '/user.png'
        },
        {
            userId: '6016fd9d19338d4d902a353b',
            name: 'Abi',
            online: false,
            image: '/user.png'
        },
    ],
    currentUser: {
        userId: '',
        name: '',
        image: ''
    },
    chatMessages: []
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
    if (action.type === "GET_MESSAGES") {
        console.log('running');
        console.log('action.msgs: ', action.msgs);
        return {
            ...state,
            chatMessages: action.msgs
        };
    }
    if (action.type === "CHAT_MESSAGE") {
        return {
            ...state,
            chatMessages: [
                ...state.chatMessages,
                action.msg
            ]
        };
    }
    return state;
};