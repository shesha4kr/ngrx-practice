import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { updatePost } from '../state/posts.action';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit, OnDestroy {

  updatePostForm!: FormGroup;
  id!: number;
  title!: string;
  description!: string;

  postSubscription!: Subscription;
  enableUpdateBtn = false;

  constructor(private fb: FormBuilder,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      const idFromParam = params.get('id') || '0';
      this.id = parseInt(idFromParam, 10);
    })

    this.getPostById();

    this.initialiseForm();
  }

  updatePost() {
    this.store.dispatch(updatePost(
      {
        id: this.updatePostForm.value.id,
        title: this.updatePostForm.value.title,
        description: this.updatePostForm.value.description
      }));

    this.router.navigate(['/posts']);
  }

  getPostById() {
    this.postSubscription = this.store.select(getPostById(this.id)).subscribe((post) => {
      this.title = post?.title || '';
      this.description = post?.description || '';
    });
  }

  initialiseForm() {
    this.updatePostForm = this.fb.group({
      id: new FormControl(this.id, [Validators.required]),
      title: new FormControl(this.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.description, [Validators.required, Validators.minLength(10)]),
    });
  }

  showIdErrorMsg(): string {
    if (this.updatePostForm.get('id')?.touched && !this.updatePostForm.get('id')?.valid) {
      return 'Please Enter the ID';
    }
    return '';
  }

  showTitleErrorMsg(): string {
    if (this.updatePostForm.get('title')?.touched && !this.updatePostForm.get('title')?.valid) {
      if (this.updatePostForm.get('title')?.getError('required')) {
        return 'Please Enter the title';
      }

      if (this.updatePostForm.get('title')?.getError('minlength')) {
        return 'Min. 6 characters are required';
      }
    }
    return '';
  }

  showDescErrorMsg(): string {
    if (this.updatePostForm.get('description')?.touched && !this.updatePostForm.get('description')?.valid) {
      if (this.updatePostForm.get('description')?.getError('required')) {
        return 'Please Enter the Description';
      }

      if (this.updatePostForm.get('description')?.getError('minlength')) {
        return 'Min. 10 characters are required';
      }
    }
    return '';
  }

  checkToEnableBtn() {
    if (this.id == this.updatePostForm.value.id &&
      this.title === this.updatePostForm.value.title &&
      this.description === this.updatePostForm.value.description) {
      console.log('Disable');
      this.enableUpdateBtn = false;
    } else {
      console.log('Enable');
      this.enableUpdateBtn = true;
    }
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

}
