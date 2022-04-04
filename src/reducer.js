import actions from "./actionTypes"

export default function reducer(state, action) {
    switch (action.type) {
        case actions.SET_USER_SETS:
            console.log("reduced to ashes")
            return {
                ...state, 
                sets: action.payload.setsObject,
                homePageState: {
                    loaded: true
                }
            }
            break;
        default:
            return state;
    }
}