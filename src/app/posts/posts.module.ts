import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from '../app-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePostComponent } from './update-post/update-post.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    DialogModule, BrowserModule,
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
