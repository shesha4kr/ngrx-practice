import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { PostState } from "./posts.state";

const postSelector = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(postSelector, state => state.posts);

export const getPostById = (id: number) => createSelector(postSelector, (state) => state.posts.find(post => post.id === id));

// export const getPostById = createSelector(postSelector, (state: PostState, props: { id: number }) => {
//     return state.posts.find(post => post.id === props.id);
// })