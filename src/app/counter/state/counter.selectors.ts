import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterFeature = createFeatureSelector<CounterState>('counter');

export const getCounterValue = createSelector(getCounterFeature, (state) => { return state.value });

