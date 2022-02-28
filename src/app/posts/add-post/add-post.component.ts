import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../state/posts.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.addPostForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    })
  }

  addPost() {
    this.store.dispatch(addPost(
      { id: this.addPostForm.value.id, description: this.addPostForm.value.description, title: this.addPostForm.value.title })
    );

    this.router.navigate(['/posts']);
  }

  showIdErrorMsg(): string {
    if (this.addPostForm.get('id')?.touched && !this.addPostForm.get('id')?.valid) {
      return 'Please Enter the ID';
    }
    return '';
  }

  showTitleErrorMsg(): string {
    if (this.addPostForm.get('title')?.touched && !this.addPostForm.get('title')?.valid) {
      if (this.addPostForm.get('title')?.getError('required')) {
        return 'Please Enter the title';
      }

      if (this.addPostForm.get('title')?.getError('minlength')) {
        return 'Min. 6 characters are required';
      }
    }
    return '';
  }

  showDescErrorMsg(): string {
    if (this.addPostForm.get('description')?.touched && !this.addPostForm.get('description')?.valid) {
      if (this.addPostForm.get('description')?.getError('required')) {
        return 'Please Enter the Description';
      }

      if (this.addPostForm.get('description')?.getError('minlength')) {
        return 'Min. 10 characters are required';
      }
    }
    return '';
  }
}
