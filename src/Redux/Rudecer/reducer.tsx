import React from 'react'
import {iAction, iUserData} from "../../interface";
import {IUserVal} from "../../Form/form";

export interface iTodo {
    user:iUserData[]
    EditTable:boolean | IUserVal
}

const defaultState: iTodo = {
    user: [],
    EditTable: false
}


export const reducer = (state = defaultState, action: iAction) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, user: [...state.user,action.payload]}
        case"CUT_TODO":
            return  {...state,user:state.user.filter(user => user.id !== action.payload)}
        case "SORT_USER":
            return  {...state,user: action.payload}
        case "DEFAULT_REDUX":
            return defaultState
        case "EDIT_USER":
            return {...state,EditTable:action.payload}
        default:
            return state
    }
}