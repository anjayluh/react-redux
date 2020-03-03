import { increment, decrement, reset } from './counterActions';

const initialState = {
    count: 0
}

export default function reducer(state = initialState, action) {
    console.log('reducer', state.count, action);
    switch (action.type) {
        case increment:
            return {
                count: state.count + 1
            };
        case decrement:
            return {
                count: state.count - 1
            };
        case reset:
            return {
                count: 0
            };
        default:
            return state;
    }
}