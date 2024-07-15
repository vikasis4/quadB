import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './toDoSlice'
import generalReducer from './generalSlice';
import cache_middleware from './cache_middleware';

// Configuring the Redux store
export const store = configureStore({
    // Combining multiple reducers into one root reducer
    reducer: {
        todo: toDoReducer,
        general: generalReducer
    },
    // Passsing custom middleware which will run whenever state will update, The custom middleware is to CACHE all the data
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cache_middleware),
});
