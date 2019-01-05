export const Types = {
    USER_REQUEST: 'user/REQUEST',
    USER_REQUEST_SUCCESS: 'user/REQUEST_SUCCESS',
    USER_REQUEST_FAILURE: 'user/REQUEST_FAILURE',
}


const INITIAL_STATE = {
    data: {
        userName: 'Anderson Costa',
        userAvatar: 'https://avatars0.githubusercontent.com/u/25548201'
    },
    loading: false,
    error: null,
}

export default user = (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case Types.USER_REQUEST:
            return { ...state, loading: true, error: null }
        case Types.USER_REQUEST_SUCCESS:
            return { data: action.payload.user, loading: false, error: null }
        case Types.USER_REQUEST_FAILURE:
            return { ...state, loading: false, error: action.payload.error }
        default:
            return state;
    }
}

export const Creators = {
    userRequest: () => ({
        type: Types.USER_REQUEST
    }),
    
    userRequestSuccess: user => ({
        type: Types.USER_REQUEST_SUCCESS,
        payload: { user },
    }),
    
    userRequestFailure: error => ({
        type: Types.USER_REQUEST_FAILURE,
        payload: { error },
    }),
}