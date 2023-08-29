import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './sagas';
import { bookReducer } from './book/slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		book: bookReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

