import { createReducer, on } from "@ngrx/store";
import { addPost, clearallPosts, deletePost, updatePost } from "./posts.action";
import { initialPostState } from "./posts.state";

export const postsReducer = createReducer(initialPostState,
    on(addPost, (state, action) => {

        const checkPostWithSameId = state.posts.find((post) => post.id == action.id);

        if (checkPostWithSameId) {
            return { ...state };
        }
        return {
            ...state,
            posts: [...state.posts, { id: action.id, title: action.title, description: action.description }]
        }
    }),
    on(updatePost, (state, action) => {

        const postToBeUpdated = state.posts.find((post) => post.id === action.id);
        const restOfThePosts = state.posts.filter((post) => post.id !== action.id);
        return {
            ...state,
            posts: [...restOfThePosts, { id: postToBeUpdated!.id, title: action.title, description: action.description }]
        }
    }),
    on(deletePost, (state, action) => {
        const postsToBeKept = state.posts.filter((post) => post.id !== action.id);
        return {
            ...state,
            posts: [...postsToBeKept]
        }
    }),
    on(clearallPosts, (state) => {
        return {
            ...state,
            posts: [],
        }
    }),
)