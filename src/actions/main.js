import * as types from "../actionsTypes/actionsTypes";
import axios from 'axios'


const getMainInfoRequest = payload => ({
    type: types.GET_MAIN_INFO,
    payload
});

const getMainInfoRequestSuccess = payload => ({
    type: types.GET_MAIN_INFO_SUCCESS,
    payload
});

const getMainInfoRequestFail = payload => ({
    type: types.GET_MAIN_INFO_FAIL,
    payload
});

export const getMainInfo = () => {
    return async dispatch => {
        dispatch(getMainInfoRequest(0));
        try {
            const {data} = await axios.get("https://api.publicapis.org/random");
            localStorage.setItem('mainInfo',JSON.stringify(data.entries[0]))
            dispatch(getMainInfoRequestSuccess(data))
        } catch(error) {
            dispatch(getMainInfoRequestFail(error))
        }
    }
};

export const clearMainInfo = payload => ({
    type: types.CLEAR_MAIN_INFO,
    payload
});

