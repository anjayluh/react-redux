import { increment, decrement, reset } from '../actions/counterActions.jsx';

const initialState = {
    count: 5
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case increment().type:
            console.log(state)
            return {
                ...state,
                count: state.count + 1
            };
        case decrement().type:
            return {
                count: state.count - 1
            };
        case reset().type:
            return {
                count: 0
            };
        default:
            return state;
    }
}