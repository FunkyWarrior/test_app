import * as types from "../actionsTypes/actionsTypes";
import axios from 'axios'


const getContactsRequest = payload => ({
    type: types.GET_CONTACTS,
    payload
});

const getContactsRequestSuccess = payload => ({
    type: types.GET_CONTACTS_SUCCESS,
    payload
});

const getContactsRequestFail = payload => ({
    type: types.GET_CONTACTS_FAIL,
    payload
});

export const getContacts = () => {
    return async dispatch => {
        dispatch(getContactsRequest(0));
        try {
            const {data} = await axios.get("https://randomuser.me/api/?page=3&results=10&seed=abc");
            localStorage.setItem('contacts',JSON.stringify(data.results));
            dispatch(getContactsRequestSuccess(data))
        } catch(error) {
            dispatch(getContactsRequestFail(error))
        }
    }
};

export const clearContacts = payload => ({
    type: types.CLEAR_CONTACTS,
    payload
});


