import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
    navBar: {
        library: {
            expanded: false
        }
    },
    sets: [],
    homePageState: {
        loaded: false
    }
}

const store = createStore(reducer, initialState)

export default store