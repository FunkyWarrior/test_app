import * as types from '../actionsTypes/actionsTypes'

const defaultState = {
    contacts:null,
    error:null,
    isFetching:false,
};

export const contactsReducer = (state = defaultState, action) => {
    switch(action.type){

        case types.GET_CONTACTS : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_CONTACTS_SUCCESS : {
            return {
                ...state,
                contacts:action.payload,
                isFetching: false
            };
        }

        case types.GET_CONTACTS_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            };
        }

        default:
            return state
    }
};