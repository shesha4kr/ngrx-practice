import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';

//Primeng Modules
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';



@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  exports: [
    CounterComponent, CounterButtonsComponent, CounterOutputComponent
  ]
})
export class CounterModule { }
