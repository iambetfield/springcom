import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from "redux-thunk"
import { authReducer } from './Auth/Reducer';

const rootReducers = combineReducers({
    auth: authReducer
})


export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch