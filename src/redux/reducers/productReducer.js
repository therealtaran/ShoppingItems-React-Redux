import { ActionTypes } from "../constants/action-types"

const initialState={
    products:[],
}

export const ProductReducer=(state=initialState,{type,payload})=>{ //action is destructured
                                              //to type and payload
                                              //update state with the payload that we 
                                              //have received data from server
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}

export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload} //return whatever state we have and
                                        //destructure payload too
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}