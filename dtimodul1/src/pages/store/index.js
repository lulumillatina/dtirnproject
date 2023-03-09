import { createStore } from "redux"

const initialValue = {
    number: 0,
    name: "lulu"
}

const reducer = (state = initialValue, action) =>{
    if(action.type === "ADD"){
        return {...state, number : state.number + 1}
    }
    if(action.type === "MINUS"){
        return {...state, number : state.number -1}
    }
    return state;
}

const Store = createStore(reducer)

export default Store;