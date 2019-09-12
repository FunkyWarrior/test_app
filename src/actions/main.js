import {
    GET_MAIN_INFO,
    GET_MAIN_INFO_SUCCESS,
    GET_MAIN_INFO_FAIL
}  from "../actionsTypes/actionsTypes";

import {mainPageApi} from '../api'


const getMainInfoRequest = () => ({
    type: GET_MAIN_INFO
});

const getMainInfoRequestSuccess = payload => ({
    type: GET_MAIN_INFO_SUCCESS,
    payload
});

const getMainInfoRequestFail = payload => ({
    type: GET_MAIN_INFO_FAIL,
    payload
});

export const getMainInfo = () => {
    return async dispatch => {
        dispatch(getMainInfoRequest());
        try {
            const {data} = await mainPageApi.get();
            dispatch(getMainInfoRequestSuccess(data))
        } catch(error) {
            dispatch(getMainInfoRequestFail(error))
        }
    }
};


