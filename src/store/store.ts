import { configureStore } from '@reduxjs/toolkit'
import firstReducer from "../features/first/firstSlice";

export const store = configureStore({
    reducer: {
        first: firstReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch