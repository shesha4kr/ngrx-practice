import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { clearallPosts, deletePost } from '../state/posts.action';
import { getPosts } from '../state/posts.selector';
import { Post } from '../state/posts.state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$!: Observable<Post[]>;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  addPost() {
    this.router.navigate(['/posts', 'add']);
  }

  updatePost(id: number) {
    this.router.navigate(['/posts', 'update', id]);
  }

  deletePost(id: any) {
    this.store.dispatch(deletePost({ id }));
  }

  clearAllPosts() {
    this.store.dispatch(clearallPosts());
  }

}
