import { call, put, takeEvery } from 'redux-saga/effects';
import { bookActions } from 'store/book/slice';
import { getBookByIDApi, getBooksApi, getSortingBooksApi } from 'common/api/helpers';
import { IVolumeInfo } from 'pages/main/items/item';

export interface IPropsAction {
	action?: string;
	payload: string;
}

export interface IDataBooks {
	books: IDataBook;
}

export interface IDataBook {
	data: {
		kind: string;
		id: number;
		etag: string;
		selfLink: string;
		volumeInfo: IVolumeInfo;
	};
	id?: number;
}

function* getBooks(action: IPropsAction) {
	try {
		const books: IDataBooks = yield call(getBooksApi, action.payload);
		yield put(bookActions.getBooksSuccess(books));
	} catch {
		yield put(bookActions.getBooksFail('Произошла ошибка загрузки данных'));
	}
}

function* getSortingBooks(action: IPropsAction) {
	try {
		const dataBooks: IDataBooks = yield call(
			getSortingBooksApi,
			action.payload,
			);
			yield put(bookActions.getSortingBooksSuccess(dataBooks));
		} catch {
			yield put(bookActions.getSortingBooksFail('Произошла ошибка загрузки данных'));
	}
}

function* getBook(action: IPropsAction) {
	try {
		const book: IDataBooks = yield call(getBookByIDApi, action.payload);
		yield put(bookActions.getBookSuccess(book));
	} catch {
		yield put(bookActions.getBookFail('Произошла ошибка загрузки данных'));
	}
}

export default function* bookSagas() {
  yield takeEvery(`${bookActions.getBookStart}`, getBooks);
  yield takeEvery(`${bookActions.getSortingBooksStart}`, getSortingBooks);
  yield takeEvery(`${bookActions.getBookStart}`, getBook);
}