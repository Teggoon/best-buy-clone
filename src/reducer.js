import actions from "./actionTypes"

export default function reducer(state, action) {
    switch (action.type) {
        case actions.ADD_ITEM_TO_CART:

            break;
        case actions.REMOVE_ITEM_FROM_CART:

            break;
        default:
            return state;
    }
}