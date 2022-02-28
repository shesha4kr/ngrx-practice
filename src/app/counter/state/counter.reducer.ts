import { createReducer, on } from "@ngrx/store";
import { decrementCounter, incrementByvalueCounter, incrementCounter, resetCounter } from "./counter.actions";
import { initialCounterState } from "./counter.state";

export const counterReducer = createReducer(initialCounterState,
    on(incrementCounter, state => {
        return { ...state, value: state.value + 1 }
    }),
    on(decrementCounter, state => {
        return { ...state, value: state.value - 1 }
    }),
    on(resetCounter, state => {
        return { ...state, value: 0 }
    }),
    on(incrementByvalueCounter, (state, action) => {
        console.log('Action:' + JSON.stringify(action)); //action = {type: value1, value: value2}
        return { ...state, value: state.value + action.value }
    }),
)