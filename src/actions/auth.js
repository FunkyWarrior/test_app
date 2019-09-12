import {
    GET_USER_BY_FACEBOOK,
    GET_USER_BY_FACEBOOK_SUCCESS,
    GET_USER_BY_FACEBOOK_FAIL,
    CLEAR_USER,
    CHANGE_SHOW_HEADER_FLAG
} from "../actionsTypes/actionsTypes";
import {userApi} from '../api'


const getUserByFbRequest = () => ({
    type: GET_USER_BY_FACEBOOK
});

const getUserByFbRequestSuccess = payload => ({
    type: GET_USER_BY_FACEBOOK_SUCCESS,
    payload
});

const getUserByFbRequestFail = payload => ({
    type: GET_USER_BY_FACEBOOK_FAIL,
    payload
});

export const getUserByFb = () => {
    return async dispatch => {
        dispatch(getUserByFbRequest());
        try {
            const {data} = await userApi.get("?ext");
            localStorage.setItem('userKey',JSON.stringify(data));
            dispatch(getUserByFbRequestSuccess(data))
        } catch(error) {
            dispatch(getUserByFbRequestFail(error))
        }
    }
};

export const clearUser = () => ({
    type: CLEAR_USER
});

export const changeShowHeaderFlag = payload => ({
    type: CHANGE_SHOW_HEADER_FLAG,
    payload
});
