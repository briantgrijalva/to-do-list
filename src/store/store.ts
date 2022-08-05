import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { tasksReducer } from '../reducers/tasksReducers'
import { usersReducer } from '../reducers/usersReducer'

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    users: usersReducer,
    tasks: tasksReducer,
    // counter: counterReducer,
  },
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector