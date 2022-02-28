import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounterValue } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  counterValue$!: Observable<number>;
  counterSubscription!: Subscription;
  counterValue = 0;

  constructor(private store: Store<CounterState>) { }

  ngOnInit(): void {
    this.counterValue$ = this.store.select(getCounterValue);

    this.counterSubscription = this.store.select(getCounterValue).subscribe((counterValue) => {
      this.counterValue = counterValue;
    })
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

}
