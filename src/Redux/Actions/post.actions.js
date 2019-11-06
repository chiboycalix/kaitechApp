import axios from 'axios';

import * as types from './types';

export const getPostsStart = () => {
    return {
        type: types.GET_POSTS_START
    }
}

export const getPostsSuccess = (payload) => {
    return {
        type: types.GET_POSTS_SUCCESS,
        payload,
    }
}

export const getPostsFailure = (error) => {
    return {
        type: types.GET_POSTS_FAILURE,
        error,
    }
}
export const getPosts = () => async (dispatch) => {
    dispatch(getPostsStart());
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        return dispatch(getPostsSuccess(response.data))
    } catch (error) {
        return dispatch(getPostsFailure(error.response))
    }
}