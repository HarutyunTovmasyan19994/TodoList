import {combineReducers} from "redux";
import {iTodo, reducer} from "./reducer";

export interface iRootReducer {
    user:iTodo
}
export const rootReducer = combineReducers<iRootReducer>({
    user: reducer,
} )
