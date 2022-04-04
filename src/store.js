import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
    navBar: {
        library: {
            expanded: false
        }
    },
    sets: {
        items: [],
        size: 0
    },
    homePageState: {
        loaded: false
    }
}

const store = createStore(reducer, initialState)

export default store