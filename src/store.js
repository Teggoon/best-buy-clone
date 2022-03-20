import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
    navBar: {
        menu: {
            expanded: false
        }
    },
    cart: {
        items: [],
        size: 0
    }
}

const store = createStore(reducer, initialState)

export default store