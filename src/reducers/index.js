import {combineReducers} from "redux";


import {authReducer} from "./auth";
import {contactsReducer} from "./contacts";
import {mainReducer} from "./main";

export default combineReducers({
    auth: authReducer,
    contacts:contactsReducer,
    main:mainReducer
})