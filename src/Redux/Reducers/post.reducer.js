import * as types from '../Actions/types';


const initialState = {
    isLoading: false,
    error: null,
    posts: null,
}

const getPostsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_POSTS_START:
            return{
                ...state,
                isLoading: true
            }
        case types.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            }
        case types.GET_POSTS_FAILURE:
            return{
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default getPostsReducer;