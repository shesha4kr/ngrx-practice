import { createAction, props } from "@ngrx/store";
import { CounterState } from "./counter.state";

const increment = '[Counter] increment';
const decrement = '[Counter] decrement';
const reset = '[Counter] reset';
const incrementByValue = '[Counter] incrementByValue';

export const incrementCounter = createAction(increment);
export const decrementCounter = createAction(decrement);
export const resetCounter = createAction(reset);

//Here I can take Type of props as CounterState only as I have to pass a number only similar to the state of Counter
export const incrementByvalueCounter = createAction(incrementByValue, props<CounterState>());