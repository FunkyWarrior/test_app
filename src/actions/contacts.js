import {
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAIL
}  from "../actionsTypes/actionsTypes";

import {userApi} from '../api'


const getContactsRequest = () => ({
    type: GET_CONTACTS
});

const getContactsRequestSuccess = payload => ({
    type: GET_CONTACTS_SUCCESS,
    payload
});

const getContactsRequestFail = payload => ({
    type: GET_CONTACTS_FAIL,
    payload
});

export const getContacts = () => {
    return async dispatch => {
        dispatch(getContactsRequest());
        try {
            const {data} = await userApi.get("?amount=25");
            dispatch(getContactsRequestSuccess(data))
        } catch(error) {
            dispatch(getContactsRequestFail(error))
        }
    }
};



