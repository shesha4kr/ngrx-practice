import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { counterReducer } from './counter/state/counter.reducer';
import { HomeComponent } from './home/home.component';
import { PostsModule } from './posts/posts.module';
import { postsReducer } from './posts/state/posts.reducer';
import { appReducer } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      autoPause: true,
    }),
    CounterModule,
    PostsModule,
    StoreModule.forRoot(appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
