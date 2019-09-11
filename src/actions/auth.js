import * as types from "../actionsTypes/actionsTypes";
import axios from 'axios'


const getUserByFbRequest = payload => ({
    type: types.GET_USER_BY_FACEBOOK,
    payload
});

const getUserByFbRequestSuccess = payload => ({
    type: types.GET_USER_BY_FACEBOOK_SUCCESS,
    payload
});

const getUserByFbRequestFail = payload => ({
    type: types.GET_USER_BY_FACEBOOK_FAIL,
    payload
});

export const getUserByFb = () => {
    return async dispatch => {
        dispatch(getUserByFbRequest(0));
        try {
            const {data} = await axios.get("https://randomuser.me/api/");
            localStorage.setItem('userKey',JSON.stringify(data.results[0]));
            dispatch(getUserByFbRequestSuccess(data.results[0]))
        } catch(error) {
            dispatch(getUserByFbRequestFail(error))
        }
    }
};

export const clearUser = payload => ({
    type: types.CLEAR_USER,
    payload
});

export const changeShowHeaderFlag = payload => ({
    type: types.CHANGE_SHOW_HEADER_FLAG,
    payload
});
