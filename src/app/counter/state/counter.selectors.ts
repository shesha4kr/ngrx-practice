import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const counterSelector = createFeatureSelector<CounterState>('counter');

export const getCounterValue = createSelector(counterSelector, (state) => { return state.value });

