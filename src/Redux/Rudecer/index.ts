import {combineReducers} from "redux";
import {iTodo, reducer} from "./reducer";

export interface iRootReducer {
    user:iTodo,
    EditTable:iTodo,
    bColor:iTodo
}
export const rootReducer = combineReducers<iRootReducer>({
    user: reducer,
    EditTable: reducer,
    bColor:reducer
} )
