import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostsComponent } from './posts/posts/posts.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: 'posts', component: PostsComponent, children: [
      { path: 'add', component: AddPostComponent },
      { path: 'update/:id', component: UpdatePostComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
