import artifactReducer from './reducers/artifactSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loggerMiddleware from "redux-logger";
import { artifactSliceReducer } from './reducers/artifactSlice';
import { artistSliceReducer } from './reducers/artistSlice';
import { postSliceReducer } from './reducers/postSlice';
import { storySliceReducer } from './reducers/storySlice';

export default configureStore({
    reducer: {
        artifact: artifactSliceReducer,
        artist: artistSliceReducer,
        post: postSliceReducer,
        story: storySliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
})