import { StoreStructure } from "../entities/StoreStructure";
import { ActionTypeBase } from "../actions/actionTypes";
import { Reducer } from "redux";
import { LOAD_NEWS, ADD_NEWS } from "../actions/newsActions";

const initialState: StoreStructure = {
    articles: [],
    read: [],
    favorite: [],
    withComplains: []
}

export const newsReducer: Reducer<any> = (state: StoreStructure = initialState, action: ActionTypeBase) => {
    switch(action.type){
        case LOAD_NEWS:
            console.log('action LOAD_NEWS')
            break;
        case ADD_NEWS:
            console.log('action ADD NEWS')
            break;
        default:
            return state
    }
}

