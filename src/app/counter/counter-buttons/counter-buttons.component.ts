import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { decrementCounter, incrementByvalueCounter, incrementCounter, resetCounter } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  val = 0;
  size = 5;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(incrementCounter());
  }

  decrement() {
    this.store.dispatch(decrementCounter());
  }

  reset() {
    this.store.dispatch(resetCounter());
  }

  incrementBy() {
    this.store.dispatch(incrementByvalueCounter({ value: this.val }));
  }

}
