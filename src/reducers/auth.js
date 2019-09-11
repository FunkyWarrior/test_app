import * as types from '../actionsTypes/actionsTypes'

const defaultState = {
    user:localStorage.getItem('userKey') ? JSON.parse(localStorage.getItem('userKey')) : null,
    showHeader:true,
    error:null,
    isFetching:false,
};

export const authReducer = (state = defaultState, action) => {
    switch(action.type){

        case types.GET_USER_BY_FACEBOOK : {
            return {
                ...state,
                isFetching: true
            };
        }

        case types.GET_USER_BY_FACEBOOK_SUCCESS : {
            return {
                ...state,
                user:action.payload,
                isFetching: false
            };
        }

        case types.GET_USER_BY_FACEBOOK_FAIL : {
            return {
                ...state,
                error:action.payload,
                isFetching: false
            };
        }

        case types.CLEAR_USER : {
            return {
                ...state,
                user:null,
            };
        }

        case types.CHANGE_SHOW_HEADER_FLAG : {
            return {
                ...state,
                showHeader:action.payload
            };
        }



        default:
            return state
    }
};