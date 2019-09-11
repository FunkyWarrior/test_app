import * as types from '../actionsTypes/actionsTypes'

const defaultState = {
    mainInfo:localStorage.getItem('mainInfo') ? JSON.parse(localStorage.getItem('mainInfo')) : null,
    error:null,
    isFetching:false,
};

export const mainReducer = (state = defaultState, action) => {
    switch(action.type){

        case types.GET_MAIN_INFO : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_MAIN_INFO_SUCCESS : {
            return {
                ...state,
                mainInfo:action.payload.entries[0],
                isFetching: false
            };
        }

        case types.GET_MAIN_INFO_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            };
        }

        case types.CLEAR_MAIN_INFO : {
            return {
                ...state,
                mainInfo:null,
                isFetching: false
            };
        }

        default:
            return state
    }
};