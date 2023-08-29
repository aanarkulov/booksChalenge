import { createSlice } from '@reduxjs/toolkit';

interface IState {
  books: [];
  book: {};
  loading: boolean;
  error: string;
  id: number;
  searchParams: any;
  queryParams: string;
  bookIsLoading: boolean;
}

const initialState: IState = {
  books: [],
  book: {},
  loading: false,
  error: '',
  id: 0,
  searchParams: '',
  queryParams: '',
  bookIsLoading: false,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getBooksStart (state, { payload }) {
      state.loading = true;
      state.searchParams = payload;
    },
		getBooksSuccess(state, { payload }) {
      state.books = payload;
      state.loading = false;
    },
    getBooksFail(state, { payload }) {
      state.error = payload;
      state.loading = false;
    },

    getSortingBooksStart(state, {payload}) {
      state.loading = false;
      state.queryParams = payload;
    },
		getSortingBooksSuccess(state, { payload }) {
      state.books = payload;
      state.loading = false;
    },
    getSortingBooksFail(state, { payload }) {
      state.error = payload;
      state.loading = false;
    },

    getBookStart(state, { payload }) {
      state.id = payload;
      state.bookIsLoading = true;
    },
    getBookSuccess(state, { payload }) {
      state.book = payload;
      state.bookIsLoading = false;
    },
    getBookFail(state, { payload }) {
      state.error = payload;
      state.bookIsLoading = false;
    },
  },
});

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
