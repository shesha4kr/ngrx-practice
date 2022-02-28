import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

const add = '[Posts] add';
const update = '[Posts] update';
const deleteById = '[Posts] delete';
const clearAll = '[Posts] clearAll';

export const addPost = createAction(add, props<Post>());
export const updatePost = createAction(update, props<Post>());
export const deletePost = createAction(deleteById, props<{ id: number }>());
export const clearallPosts = createAction(clearAll);