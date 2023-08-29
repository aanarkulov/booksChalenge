import { IVolumeInfo } from 'pages/main/items/item';
import { IDataBook } from 'store/book/sagas';

export interface IDataBooks {
	kind: string;
	items: IDataBook[];
}

export interface ICurrentState {
	book: { book: IDataBook };
}

export interface IStateBooksProperties {
	book: IStateProperties;
}

export interface IProps {
	items: IItemProps[];
}
export interface IProperties {
	data: IProps;
}

export interface IStateProperties {
	books: IProperties;
}

interface IItemProps {
	kind: string;
	id: number;
	etag: string;
	selfLink: string;
	volumeInfo: IVolumeInfo;
}

export interface IState {
	book: {
		books: IDataBook[];
		book: IDataBook; 
		loading: boolean;
		error: string;
		id: number;
		searhcParams: string;
		queryParams: string;
	};
}

export const urlBookId = (state: IState) => state.book.id;

export const isLoading = (state: IState) => state.book?.loading;

export const state = (state: IStateBooksProperties) =>
	state.book.books.data?.items;

export const bookData = (state: ICurrentState) =>
	state.book?.book?.data?.volumeInfo ?? [];

export const imageLinks = (state: ICurrentState) =>
	state.book.book?.data?.volumeInfo?.imageLinks?.smallThumbnail ?? '';
